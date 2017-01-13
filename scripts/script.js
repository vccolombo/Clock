function displayTime()
{
  var l = document.getElementById("localClock");
  var u = document.getElementById("UTCClock");
  var s = document.getElementById("selectedClock");
  var dropdown = document.getElementById("input");
  var optionValue = dropdown.options[dropdown.selectedIndex].value;
  var now = new Date();
  l.innerHTML = now.toString();
  u.innerHTML = now.toUTCString();
  if(optionValue)
  {
    optionValue = -optionValue;
    now.setHours(now.getUTCHours() - optionValue - 2);
  }
  //else { now.setHours(now.getUTCHours() + optionValue); }
  s.innerHTML = now.toUTCString();
  setTimeout(displayTime, 1000);
}

window.onload = displayTime;
