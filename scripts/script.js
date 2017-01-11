function displayTime()
{
  var l = document.getElementById("localClock");
  var u = document.getElementById("UTCClock");
  var now = new Date();
  l.innerHTML = now.toString();
  u.innerHTML = now.toUTCString();
  setTimeout(displayTime, 1000);
}

window.onload = displayTime;
