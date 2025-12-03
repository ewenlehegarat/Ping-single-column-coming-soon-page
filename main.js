const input = document.querySelector('input')
const paragraphe = document.querySelector('p')
const button = document.querySelector('button')

button.addEventListener('click', function(){
    input.style.borderColor = 'hsl(354, 54%, 52%)'
    paragraphe.style.display = 'block'
})