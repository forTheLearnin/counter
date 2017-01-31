const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const value = document.getElementById('value');

let state = 0;

function setState() {
  value.innerHTML = state;
}

setState();


add.addEventListener('click', () => {
  state += 1;
  setState();
});

subtract.addEventListener('click', () => {
  state -= 1;
  setState();
});
