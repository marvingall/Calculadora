let body = document.body;
let trocarTema = document.getElementById('moonLight');
let iconeTema = document.getElementById('moon');

document.getElementById('moon').addEventListener('click', function () {
  body.classList.toggle('dark');
  body.classList.toogle('light');
})
