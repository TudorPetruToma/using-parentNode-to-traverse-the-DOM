const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionP = document.querySelector('p.description');
const descriptionInput = document.querySelector('input.description');
const descriptionButton  =document.querySelector('button.description')
const listUl = document.querySelector('ul');
const addItemBtn = document.querySelector('button.addItemBtn');
const addItemInput = document.querySelector('input.addItemInput');


listUl.addEventListener('click', (e) => {
  if(e.target.tagName === 'BUTTON'){
    if(e.target.className === 'li-remove'){
      let li = e.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
    if(e.target.className === 'li-up'){
      let li = e.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if(prevLi){
      ul.insertBefore(li, prevLi);
      }
    }
    if(e.target.className === 'li-down'){
      let li = e.target.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      if(nextLi){
        ul.insertBefore(nextLi, li);
      }
    }
  }
});


toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';                        
    listDiv.style.display = 'none';
  }                         
});


descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

addItemBtn.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
    if(li.textContent){
      ul.appendChild(li);
   }
  addItemInput.value = '';
});