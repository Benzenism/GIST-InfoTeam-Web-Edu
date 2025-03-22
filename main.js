function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("mySidebar").classList.add("show");
  document.getElementById("main").classList.add("move");
  document.querySelector(".openbtn").innerHTML = "☰ Close Sidebar";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("mySidebar").classList.remove("show");
  document.getElementById("main").classList.remove("move");
  document.querySelector(".openbtn").innerHTML = "☰ Open Sidebar";
}

document.querySelector(".openbtn").onclick = function() {
  if (document.getElementById("mySidebar").style.width === "0px" || document.getElementById("mySidebar").style.width === "") {
    openNav();
  } else {
    closeNav();
  }
};