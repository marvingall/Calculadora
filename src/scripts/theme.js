let body = document.querySelector("body");


document.getElementById('moon').addEventListener('click', function () {

  body.classList.toggle('dark');
  body.classList.toggle('light');

  window.localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");

})
