function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").classList.add("sidebar-open");
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").classList.remove("sidebar-open");
}