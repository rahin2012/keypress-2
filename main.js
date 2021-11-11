document.getElementById("keytype");

window.addEventListener("keydown", key_press);

function key_press(e) {
  kp = e.keyCode;
  if (kp >= 65 && kp <= 90) {
    Show.innerHTML = "Alphabet Key";
  }
  if (kp >= 97 && kp <= 122) {
    Show.innerHTML = "Alphabet Key";
  }
  if (kp >= 48 && kp <= 57) {
    Show.innerHTML = "Number Key";
  }
  if (kp >= 37 && kp <= 40) {
    Show.innerHTML = "Arrow Key";
  }
  if (kp == 27) {
    Show.innerHTML = "Esc Key";
  }
  if (kp == 18) {
    Show.innerHTML = "Alt Key";
  }
  if (kp == 17) {
    Show.innerHTML = "Ctrl Key";
  }
  if (kp == 13) {
    Show.innerHTML = "Enter Key";
  }
  if (kp == 16) {
    Show.innerHTML = "Shift Key";
  }
  if (kp == 46) {
    Show.innerHTML = "Delete Key";
  }
}
