// menu opening functionality
function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.getElementById("t").style.color = "var(--primaryColor)";
  document.getElementById("f").style.color = "var(--primaryColor)";
  document.getElementById("l").style.color = "var(--primaryColor)";
  document.getElementById("i").style.color = "var(--primaryColor)";
  document.getElementById("g").style.color = "var(--primaryColor)";
  document.getElementById("globe1").style.color = "var(--primaryColor)";
  document.getElementById("globe1").style.transition = "1s";
  document.getElementById("globe2").style.color = "var(--primaryColor)";
  document.getElementById("globe2").style.transition = "1s";
  document.getElementById("globe3").style.color = "var(--primaryColor)";
  document.getElementById("globe3").style.transition = "1s";
  document.getElementById("bar1").style.background = "var(--primaryColor)";
  document.getElementById("bar1").style.color = "var(--primaryColor)";
  document.getElementById("bar1").style.transition = "1s";
  document.getElementById("bar2").style.background = "var(--primaryColor)";
  document.getElementById("bar2").style.transition = "1s";
  document.getElementById("bar1").style.color = ("var(--secondaryColor)");
  document.getElementById("bar2").style.color = ("var(--secondaryColor)");
}
// menu closing functionality
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementById("t").style.color = "var(--secondaryColor)";
  document.getElementById("t").style.transition = "1s";
  document.getElementById("f").style.color = "var(--secondaryColor)";
  document.getElementById("f").style.transition = "1s";
  document.getElementById("l").style.color = "var(--secondaryColor)";
  document.getElementById("l").style.transition = "1s";
  document.getElementById("i").style.color = "var(--secondaryColor)";
  document.getElementById("i").style.transition = "1s";
  document.getElementById("g").style.color = "var(--secondaryColor)";
  document.getElementById("g").style.transition = "1s";
  document.getElementById("globe1").style.color = "var(--secondaryColor)";
  document.getElementById("globe2").style.color = "var(--secondaryColor)";
  document.getElementById("globe3").style.color = "var(--secondaryColor)";
  document.getElementById("bar1").style.background = "var(--secondaryColor)";
  document.getElementById("bar2").style.background = "var(--secondaryColor)";
  document.getElementById("bar1").style.color = ("var(--primaryColor)");
  document.getElementById("bar2").style.color = ("var(--primaryColor)");

}
