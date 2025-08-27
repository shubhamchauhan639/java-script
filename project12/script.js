const buttons = document.querySelectorAll('.button')
const body =document.querySelector('body')

buttons.forEach(button => {
  button.addEventListener('click', function () {
    const color = this.id.toLowerCase();
    body.style.backgroundColor = color;
  });
});