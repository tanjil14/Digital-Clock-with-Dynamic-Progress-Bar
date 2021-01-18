const hour = document.getElementById("hour");
const minutes = document.getElementById("minute");
const seconds = document.getElementById("second");
const progress = document.getElementById("progress");

const showTime = () => {
  let date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  hour.textContent = hr;
  minutes.textContent = min;
  seconds.textContent = sec;
  progress.style.width = (sec / 60) * 100 + "%";
};

setInterval(showTime, 1000);
