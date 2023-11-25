
setInterval(() => {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  hrotation = 30*h + m/2;
  mrotation = 6*m;
  srotation = 6*s;

  hours.style.transform = `rotate(${hrotation}deg)`
  minutes.style.transform = `rotate(${mrotation}deg)`
  seconds.style.transform = `rotate(${srotation}deg)`
}, 1000);
