const menu = document.querySelector(".mobile-menu");
const onn = document.querySelector(".toggleOn");
const off = document.querySelector(".toggleOff");

function openMenu() {
  menu.classList.add("activate");
  onn.classList.add("toggleOn");
  onn.style.zIndex = 100;
}
function closeMenu() {
  menu.classList.remove("activate");
  off.classList.add("toggleOff");

  onn.style.zIndex = 200;
}

onn.addEventListener("click", openMenu);
off.addEventListener("click", closeMenu);

const drawer = document.querySelector(".drawer");
const opened = document.querySelector(".open-btn");
const closed = document.querySelector(".close-btn");
const overlay = document.querySelector(".drawer-overlay");

function openDrawer() {
  opened.classList.add("open-btn");
  drawer.classList.add("open");
  overlay.hidden = false;
  document.body.classList.add("no-scroll");
  drawer.setAttribute("aria-hidden", false);
}
function closeDrawer() {
  drawer.classList.remove("open");
  overlay.classList.remove("active");
  document.body.classList.remove("no-scroll");

  drawer.setAttribute("aria-hidden", "true");
  closebtn.setAttribute("aria-expanded", false);
}

opened.addEventListener("click", openDrawer);
closed.addEventListener("click", closeDrawer);

//fetching apis
/*
async function fetchUpdate() {
  
  try{

    const response= await fetch(`onxo'cpcj\mxb uop`);

    const data= response.json();

    data.

  }
  catch{
    console.error();
    
  }
  
}
fetchUpdate();*/
