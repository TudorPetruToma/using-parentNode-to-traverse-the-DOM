const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionP = document.querySelector('p.description');
const descriptionInput = document.querySelector('input.description');
const descriptionButton = document.querySelector('button.description')
const listUl = document.querySelector('ul');
const addItemButton = document.querySelector('button.addItemButton');
const addItemInput = document.querySelector('input.addItemInput');
const lis = listUl.children;


function attachListItemButtons(li) {
  let up = document.createElement('button');
  up.className = 'up';
  up.textContent = 'Up';
  li.appendChild(up);

  let down = document.createElement('button');
  down.className = 'down';
  down.textContent = 'Down';
  li.appendChild(down);

  let remove = document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'Remove';
  li.appendChild(remove);
};

for(let i = 0; i < lis.length; i++){
  attachListItemButtons(lis[i])
}

listUl.addEventListener('click', (e) => {
  if(e.target.tagName == 'BUTTON'){
    if(e.target.className == 'remove'){
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
    if(e.target.className == 'up'){
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if(prevLi){
      ul.insertBefore(li, prevLi);
      }
    }
    if(e.target.className == 'down'){
      let li = event.target.parentNode;
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


addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
    if(li.textContent){
        attachListItemButtons(li);
        ul.appendChild(li);
    }
  addItemInput.value = '';
});