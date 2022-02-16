const interruptor = document.querySelector('#switch');
const bulb = document.querySelector('.bulb');
const lightbulb = document.querySelector('#light-bulb');
const body = document.querySelector('body');
const h1 = document.querySelector('h1')

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
}