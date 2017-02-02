const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const value = document.getElementById('value');

let state = 0;

function setState(args) {
  value.innerHTML = state;
}

setState(state);


add.addEventListener('click', () => {
  state += 1;
  setState(state);
});

subtract.addEventListener('click', () => {
  state -= 1;
  setState(state);
});
