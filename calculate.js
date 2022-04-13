let calculate = document.getElementById("calculate");
calculate.onclick = calcMag;

function calcMag() {
  // Get values from the form
  let size = document.getElementById("magSize").value;
  let perk = document.getElementById("perk").value;

  // Search for the product
  window.location.href = "/?size=" + size + "&perk=" + perk;
}
