// computes greatest common divisor
  // reduces fractions to their simplest form
    // finds largest number that divides a and b without a remainder

// example: dividing a plot of land into squares
  // squares must be largest size possible and all equal size

  const divide = (height, width) => {
    // if one side is a multiple of the other side it can be divided equally
      // the biggest box that works for this size works for the entire box
    if (height % width === 0) {
      console.log(`The largest, equally dividible box size is ${width}m x ${width}m`);
      return width;
    }
    if (width % height === 0) {
      console.log(`The largest, equally dividible box size is ${height}m x ${height}m`);
      return height;
    }

    // divide box into equal squares and find remaining space
    let newHeight = height % width;
    let newWidth = width % height;

    // continue dividing remaining space until the largest, equally dividible box is found
    divide(newHeight, newWidth);

  }

  divide(1680, 640);