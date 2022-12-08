/* ------------ CACHED ELEMENT REFERENCES ------------ */
const inputEl = document.getElementById('todo-input')
const btnEl = document.getElementById('submit-button')
const ulEl = document.getElementById('todo-list')

btnEl.addEventListener('click', function(evt) {
  const li = document.createElement('li')
  li.textContent = inputEl.value
  if (li.textContent !== '') {
    inputEl.value = ''
    ulEl.appendChild(li)
  }
})