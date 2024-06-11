// LUMINENCE CALCULATOR

//Input
document.getElementById("Lum").addEventListener("click", Calc);

function Calc() {
  let redColour = document.getElementById("red1").value;
  let greenColour = document.getElementById("green1").value;
  let blueColour = document.getElementById("blue1").value;

  //Process
  let brightness = Math.sqrt(
    0.299 * redColour ** 2 + 0.587 * greenColour ** 2 + 0.114 * blueColour ** 2
  );
  //Output
  document.getElementById("luminance").innerHTML = brightness;
}
