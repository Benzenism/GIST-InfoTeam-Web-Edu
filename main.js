function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("mySidebar").classList.add("show");
    document.getElementById("main").classList.add("move");
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("mySidebar").classList.remove("show");
    document.getElementById("main").classList.remove("move");
  }
  