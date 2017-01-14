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
  /* The line below
  sets the hour of selectedClock, by getting UTC, adding the value selected by the user
  and sums the difference timezone
      */
  now.setHours(now.getUTCHours() + Number(optionValue) + (now.getHours() - now.getUTCHours()));
  //Because we will use UTC now, and it's important to evaluate the time difference btwen
  //the user and UTC
  //UTC = Local - timezone
  s.innerHTML = now.toUTCString() + String(optionValue) + "00";

  setTimeout(displayTime, 1000);
}

window.onload = displayTime;
