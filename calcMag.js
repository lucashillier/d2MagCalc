function calcMag(size, perk) {
  // Array representing the mag
  let mag = new Array(size).fill(1);

  // Counter
  let i = 0;

  // Loop until we've reached the end of the mag
  while (mag[i] != null) {
    // If we have enough bullets to proc the perk
    if (mag[i + perk - 1] != null) {
      // Add a bullet to the mag
      mag.push(1);

      // If 4th times we add an extra bullet
      if (perk == 4) {
        mag.push(1);
      }
    }

    // Move to next set of bullets in the mag
    i += perk;
  }

  return mag.length;
}

module.exports = {
  calcMag
};
