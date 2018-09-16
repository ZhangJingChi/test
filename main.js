let toggleNavStatus = false;

var abc = function() {

  let getSidebar = document.querySelector(".nav-sidebar");
  let getSidebarUl = document.querySelector(".nav-sidebar ul");
  let getSidebarTitle = document.querySelector(".nav-sidebar ul span");
  let getSidebarLink = document.querySelectorAll(".nav-sidebar ul a");


  if (toggleNavStatus === false) {
    getSidebar.style.width = "275px";
    getSidebarUl.style.visibility = "visible";
    getSidebarTitle.style.opacity = "0.5";
    for (let i = 0; i < getSidebarLink.length; i++) {
      getSidebarLink[i].style.opacity = "1";
    }
    toggleNavStatus = true;
  } else if (toggleNavStatus === true) {
    getSidebar.style.width = "60px";
    getSidebarUl.style.visibility = "hidden";
    getSidebarTitle.style.opacity = "0";
    for (let i = 0; i < getSidebarLink.length; i++) {
      getSidebarLink[i].style.opacity = "0";
    }
    toggleNavStatus = false;
  }

}


function insert(num) {
  document.getElementById('input1').value = document.getElementById('input1').value + num;
  document.getElementById('input2').value = "";
}

function insert2(cal) {
  var exp = document.getElementById('input2').value;
  if (exp) {
    document.getElementById('input1').value = exp + cal;
    document.getElementById('input2').value = "";
  } else {
    document.getElementById('input1').value = document.getElementById('input1').value + cal;
  }
}

function equal() {
  var exp = document.getElementById('input1').value;
  if (exp) {
    document.getElementById('input2').value = eval(exp);
    document.getElementById('input1').value = "";
  }
}

function c() {
  document.getElementById('input1').value = "";
  document.getElementById('input2').value = "";
}

function back() {
  var exp = document.getElementById('input1').value;
  document.getElementById('input1').value = exp.substring(0, exp.length - 1);
}


function ant() {
  document.getElementById('input2').value = -document.getElementById('input2').value;
}
