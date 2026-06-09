/*
  Pattern Nineteen 
*/


const patternNineteenTopLayer = (n) => {
  let space = 0;
  for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = 0; j < n-i; j++) {
      line += '*';
    }
    for (let j = 0; j < space; j++) {
      line += ' ';
    }
    for (let j = 0; j < n-i; j++) {
      line += '*';
    }
    console.log(line);
    space += 2
  }
};

const patternNineteenBottomLayer = (n) => {
  let space= 2*(n-1)
  for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = 0; j <= i; j++) {
      line += '*';
    }
    for (let j = 0; j < space; j++) {
      line += ' ';
    }
    for (let j = 0; j <= i; j++) {
      line += '*';
    }
    console.log(line);
    space -= 2
  }
};

patternNineteenTopLayer(5);
patternNineteenBottomLayer(5);

# Mastering Pattern Printing in JavaScript: The Symmetric Butterfly Void

Welcome back! Today, we are conquering **Pattern Nineteen: The Symmetric Butterfly Void**. This is one of the most visually stunning dual-matrix structural challenges.
Instead of building a solid shape, we are doing the exact opposite: printing a massive blocks-of-stars structure and expanding a hollow diamond gap right through the center of it.

## The Goal

We want to write JavaScript functions that accept a structural value n and produce a fully inverted reflection pattern. For n = 5, the compiled target output is a 10-row matrix that looks like this:

```text
**********
**** ****
*** ***
** **
* *
* *
** **
*** ***
**** ****
**********

```
### The Structural Logic

To break down this pattern easily, we split the shape directly down the equator into two distinct parts: the **Top Hourglass** (where gaps expand) and the **Bottom Hourglass** (where gaps shrink).

Each horizontal line follows a strict layout rule: **Left Stars + Center Blank Spaces + Right Stars**.

#### 1. The Top Layer Phase (Inverted Triangle Voids)

 * **Row 1 (i = 0):** 5 Stars + 0 Spaces + 5 Stars. Total width: 10 characters.

 * **Row 2 (i = 1):** 4 Stars + 2 Spaces + 4 Stars. Total width: 10 characters.

 * **Row 5 (i = 4):** 1 Star + 8 Spaces + 1 Star. Total width: 10 characters.

 * *Logic:* Stars per side equal n - i. Central blank spacing starts at 0 and increases by +2 per line.

#### 2. The Bottom Layer Phase (Standard Triangle Voids)

 * **Row 1 (i = 0):** 1 Star + 8 Spaces + 1 Star. Total width: 10 characters.

 * **Row 2 (i = 1):** 2 Stars + 6 Spaces + 2 Stars. Total width: 10 characters.

 * **Row 5 (i = 4):** 5 Stars + 0 Spaces + 5 Stars. Total width: 10 characters.

 * *Logic:* Stars per side equal i + 1. Central blank spacing starts at its maximum value, 2 * (n - 1), and decreases by -2 per line.

## The JavaScript Code

Here is your modular clean solution, split into two logical layers for maximum code readability:

```javascript
const patternNineteenTopLayer = (n) => {
  let space = 0; // The top layer starts with zero central empty space tracking

  for (let i = 0; i < n; i++) {
    let line = '';

    // 1. Left Wing: Inverted star counts descend down from 'n' to 1
    for (let j = 0; j < n - i; j++) {
      line += '*';
    }
    // 2. Center Void: Tracks expanding space width (0, 2, 4, 6, 8)
    for (let j = 0; j < space; j++) {
      line += ' ';
    }
    // 3. Right Wing: Perfectly mirrors the left wing block count
    for (let j = 0; j < n - i; j++) {
      line += '*';
    }

    console.log(line);
    space += 2; // Expand the inner gap width by 2 columns for the next row
  }
};

const patternNineteenBottomLayer = (n) => {
  let space = 2 * (n - 1); // The bottom layer starts at maximum gap width (8 spaces)

  for (let i = 0; i < n; i++) {
    let line = '';

    // 1. Left Wing: Standard star counts climb up from 1 to 'n'
    for (let j = 0; j <= i; j++) {
      line += '*';
    }
    // 2. Center Void: Tracks shrinking space width (8, 6, 4, 2, 0)
    for (let j = 0; j < space; j++) {
      line += ' ';
    }
    // 3. Right Wing: Perfectly mirrors the left wing block count
    for (let j = 0; j <= i; j++) {
      line += '*';
    }

    console.log(line);
    space -= 2; // Shrink the inner gap width by 2 columns for the next row
  }
};

// Execute both halves back-to-back to compile the full layout
patternNineteenTopLayer(5);
patternNineteenBottomLayer(5);

```

## Detailed Step-by-Step Breakdown

### 1. The Left/Right Star Counter Formulas
Notice the structural difference inside the wing loops:

 * In the top half, we use j < n - i. As row index i increases, the condition cuts shorter, cutting down the stars printed on each side.

 * In the bottom half, we use j <= i. This means the star count scales up linearly with the row number, filling the wings back out.

### 2. Manual Space Tracking Variables

Instead of using complex inline math formulas to calculate the width of the central gap, we use a dedicated tracker variable space:

 * In the top half, we initialize space = 0 and increment it using space += 2 at the end of every row loop iteration.

 * In the bottom half, we initialize it at its peak capacity, 2 * (n - 1) (which equals 8 when n = 5), and decrement it using space -= 2 after each line finishes rendering.

## 📊 Behind the Scenes: The Dry Run

Let’s track how both loops execute to build a seamless butterfly void profile when n = 5:

### Top Layer Execution
| Row Index (i) | Star Loop Limit (n - i) | Current space Value | Compiled Row Layout String |
|---|---|---|---|
| **0** | 5 | 0 | ***** + "" + ***** \rightarrow "**********" |
| **1** | 4 | 2 | **** + "  " + **** \rightarrow "**** ****" |
| **2** | 3 | 4 | *** + "    " + *** \rightarrow "*** ***" |
| **3** | 2 | 6 | ** + "      " + ** \rightarrow "** **" |
| **4** | 1 | 8 | * + "        " + * \rightarrow "* *" |


### Bottom Layer Execution
| Row Index (i) | Star Loop Limit (j <= i) | Current space Value | Compiled Row Layout String |
|---|---|---|---|
| **0** | 1 | 8 | * + "        " + * \rightarrow "* *" |
| **1** | 2 | 6 | ** + "      " + ** \rightarrow "** **" |
| **2** | 3 | 4 | *** + "    " + *** \rightarrow "*** ***" |
| **3** | 4 | 2 | **** + "  " + **** \rightarrow "**** ****" |
| **4** | 5 | 0 | ***** + "" + ***** \rightarrow "**********" |
