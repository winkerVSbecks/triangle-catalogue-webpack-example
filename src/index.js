import { area } from './math';

const baseEl = document.getElementById('base');
const heightEl = document.getElementById('height');
const calculateEl = document.getElementById('calculate');
const resultEl = document.getElementById('result');

calculateEl.onclick = function() {
  const base = baseEl.value;
  const height = heightEl.value;
  const result = area(base, height);

  resultEl.innerText = result;
};
