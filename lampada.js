const btn = document.getElementById("turnOn");
const lamp = document.getElementById("lamp");

function toggle() {
  if (lamp.src.includes('desligada.jpg')) {
    lamp.src = 'img/ligada.jpg';
    btn.innerText = 'Desligar';
  } else if (lamp.src.includes('ligada.jpg')) {
    lamp.src = 'img/desligada.jpg';
    btn.innerText = 'Ligar';
  }
}

function quebrou() {
  lamp.src = 'img/quebrada.jpg';
  lamp.onmouseout = null;
  lamp.onmouseover = null;
  btn.onclick = null; 
}


window.onload = () => {
  lamp.onmouseover = () => {
    if (!lamp.src.includes('quebrada.jpg')) {
      lamp.src = 'img/ligada.jpg';
      btn.innerText = 'Desligar';
    }
  };

  lamp.onmouseout = () => {
    if (!lamp.src.includes('quebrada.jpg')) {
      lamp.src = 'img/desligada.jpg';
      btn.innerText = 'Ligar';
    }
  };

  btn.onclick = toggle; 
};
