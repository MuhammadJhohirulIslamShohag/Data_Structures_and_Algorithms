/*
  Pattern Twenty 
*/

const patternTwenty = (n) => {
  let space = 2*n - 2;

  for (let i = 1; i < 2*n; i++) {
    let line = '';
    let star = i;

    if(i > n) star = 2*n - i

    for (let j = 1; j <= star; j++) {
      line += '*';
    }

    for (let j = 1; j <= space; j++) {
      line += ' ';
    }

    for (let j = 1; j <= star; j++) {
      line += '*';
    }

    console.log(line);

    if(i < n) { 
        space -= 2
    }else{
        space += 2
    }

  }
};

patternTwenty(5);

# Mastering Pattern Printing in JavaScript: The Butterfly Wings

Welcome back! Today, we are tackling **Pattern Twenty: The Butterfly Wings**. This configuration looks like an exact inverse of the hollow void we created in Pattern Nineteen.
Instead of expanding a blank space from a solid block of stars, we are building the star wings from the outside edges inward, reaching a solid center row before spreading back out.

## The Goal

We want to write a JavaScript function that takes a number n and prints a symmetric butterfly graphic. Unlike the previous challenge, we can achieve this entire shape using **a single main loop** that tracks a shifting row peak. For n = 5, the pattern runs for exactly 2 \times 5 - 1 = 9 lines:

```text
* *
** **
*** ***
**** ****
**********
**** ****
*** ***
** **
* *

```

### The Structural Logic

Every horizontal row is assembled by concatenating three specific sub-components:

**Left Wing Stars + Center Negative Spaces + Right Wing Stars**.

Instead of writing two completely separate loop structures, your approach dynamically scales the parameters using conditional checks:

 * **The Star Limit Formula:** The number of stars printed on each wing increases linearly (star = i) until it crosses the midpoint row n. Past that peak, the star allocation mirrors itself in reverse using the formula: 2 * n - i.

 * **The Air Gap Space Tracker:** The central empty corridor starts at its maximum value, 2 * n - 2 (which evaluates to 8 columns when n = 5). It closes down by -2 each line until the midpoint is reached, and then widens back out by +2 per line.

## The JavaScript Code

Here is the clean, single-loop JavaScript implementation that handles symmetry boundaries on the fly:

```javascript
const patternTwenty = (n) => {
  // Initialize the central corridor spacing at its absolute maximum capacity
  let space = 2 * n - 2;

  // Run the loop for the entire height of the matrix (2 * n - 1 lines)
  for (let i = 1; i < 2 * n; i++) {
    let line = '';
    let star = i; // Default behavior: Star count scales up with row index

    // Symmetrical Pivot Condition
    if (i > n) {
      star = 2 * n - i; // Reversing phase: Mirror star calculations downward
    }

    // 1. Left Wing Printing Block
    for (let j = 1; j <= star; j++) {
      line += '*';
    }

    // 2. Central Gap Printing Block
    for (let j = 1; j <= space; j++) {
      line += ' ';
    }

    // 3. Right Wing Printing Block
    for (let j = 1; j <= star; j++) {
      line += '*';
    }

    console.log(line);

    // Dynamic Space Modification
    if (i < n) {
      space -= 2; // Shrink the central gap as we approach the equator row
    } else {
      space += 2; // Expand the central gap as we move past the equator row
    }
  }
};

// Execute the code to print the full butterfly wings
patternTwenty(5);

```

## Detailed Step-by-Step Breakdown

### 1. The Midpoint Star Calculation

```javascript
if (i > n) star = 2 * n - i;

```

Let's see what happens to our star tracking variable when n = 5 as loop index i runs from 1 to 9:

 * i = 3: 3 is not greater than 5 \rightarrow star = 3.

 * i = 5 (Center Row): 5 is not greater than 5 \rightarrow star = 5 (Solid block row).

 * i = 6: 6 > 5 is true \rightarrow star = 2(5) - 6 = 4.

 * i = 8: 8 > 5 is true \rightarrow star = 2(5) - 8 = 2.

### 2. Handling the Spacing Breakpoint
```javascript
if (i < n) { space -= 2; }
else { space += 2; }

```

This check manages the shifting behavior of the central void. For row i = 5 (the center line), 5 < 5 evaluates to false, causing the execution branch to fall directly into the else block. As a result, the space tracker immediately updates from 0 back up to 2 for the upcoming line.

## 📊 Behind the Scenes: The Dry Run

Let’s trace the step-by-step state variables for patternTwenty(5) as it renders:

| Loop Index (i) | Wing Star Count (star) | Corridor Gap (space) | Row Composition Breakdown | Compiled Output String |
|---|---|---|---|---|
| **1** | 1 | 8 | * + "        " + * | "* *" |
| **2** | 2 | 6 | ** + "      " + ** | "** **" |
| **3** | 3 | 4 | *** + "    " + *** | "*** ***" |
| **4** | 4 | 2 | **** + "  " + **** | "**** ****" |
| **5** | 5 | 0 | ***** + "" + ***** | "**********" |
| **6** | 4 | 2 | **** + "  " + **** | "**** ****" |
| **7** | 3 | 4 | *** + "    " + *** | "*** ***" |
| **8** | 2 | 6 | ** + "      " + ** | "** **" |
| **9** | 1 | 8 | * + "        " + * | "* *" |
