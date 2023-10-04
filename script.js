let diff = 0;
const txt = ["Designer", "Developer"];
const speed = 50;
let interv;

function typeWriter() {
  const dis = document.getElementById("workType");
  if (diff < txt[0].length) {
    dis.innerHTML += txt[0].charAt(diff);
    diff++;
  } else if (dis.innerHTML.length > 0) {
    dis.innerHTML = dis.innerHTML.slice(0, -1);
  } else {
    clearInterval(interv);
    txt.push(txt.shift());
    diff = 0;
    setTimeout(startTyping, 1000);
  }
}

function startTyping() {
  interv = setInterval(typeWriter, 100);
}

startTyping();

function toggleNav() {
  var sidenav = document.querySelector('.sidenav');
  var togBtn = document.querySelector(".toggle-btn");
  if (sidenav.style.width === '0px' || sidenav.style.width === '') {
      sidenav.style.width = '95px';
      togBtn.style.marginLeft = '95px';
  } else {
      sidenav.style.width = '0px';
      togBtn.style.marginLeft = '0px';
  }
}

