/**Declarations */
let body = document.querySelector('body');
let hOne = document.createElement('h1');
let container = document.querySelector('.container');
let allDivs = document.getElementsByTagName('div');
let styleSheet = document.createElement('style');
let button = document.createElement('button');
let buttonStyleSheet = document.createElement('style');
let sides = parseInt(prompt("Please enter a number of dimensions."));

/**DOM Manipulation */
body.insertBefore(hOne, container);
container.style.display = 'flex';
container.style.width = '100%';
body.insertBefore(styleSheet, container);
body.insertBefore(button, container);
body.insertBefore(buttonStyleSheet, button);
buttonStyleSheet.innerHTML = 'button{width: 100px; height: 35px; border-radius: 5px; background-color: red; color: white; font-size: 20px}';
button.textContent = "RESET";

/**Game Function */
(function (){
  for (let i = 0; i < sides; i++) {
    let divOne = document.createElement('div');
    container.appendChild(divOne);
    divOne.style.width = '100%';
    for (let j = 0; j < sides; j++) {
      let divTwo = document.createElement('div');
      divTwo.setAttribute('id', 'div-2');
      divTwo.textContent = '.';
      divTwo.style.color = 'grey';
      // divTwo.style.height = 'grey';
      divOne.appendChild(divTwo);
      divTwo.addEventListener('mouseover', () => {
        divTwo.style.backgroundColor = 'grey';
      });
    }
  }
  button.addEventListener('click', () =>{
    window.location.reload();
  });
})();






