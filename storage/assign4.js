clickCounter();

function clickCounter() {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount)+1;
  } else {
    localStorage.clickcount = 1;
  }
  
  document.getElementById("demo").innerHTML = localStorage.clickcount;
}


clickCounter2();

function clickCounter2()
{
    if (sessionStorage.clickcount) {
        sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
      } else {
        sessionStorage.clickcount = 1;
      }
      document.getElementById("demoo").innerHTML = sessionStorage.clickcount;
}
