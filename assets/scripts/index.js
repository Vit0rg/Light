const interruptor = document.querySelector('#switch');
const bulb = document.querySelector('.bulb');
const lightbulb = document.querySelector('#light-bulb');
const body = document.querySelector('body');
const h1 = document.querySelector('h1')
let count = 0;

function toggle()
{
  interruptor.classList.toggle("toggle");
  bulb.classList.toggle("bulb-on");
  lightbulb.classList.toggle("lights-on");
  body.classList.toggle("body-lights-on");

  if(h1.innerText === 'LIGHTS OFF')
  {
    h1.innerText = 'LIGHTS ON';
  }
  else
  {
    h1.innerText = 'LIGHTS OFF';
  }
  count++;
  if (count > 15)
  {
    breakSwitch();
  }
}

function playClick()
{
  const audio = new Audio("./assets/audios/click");
  audio.volume = 1,9;
  audio.play();
}

function breakSwitch()
{
  h1.innerText = "YOU BROKE ME"

  body.classList.remove("body-lights-on");
  bulb.classList.remove("bulb-on");
  body.classList.remove("body-lights-on");
  interruptor.classList.remove("toggle");
}

