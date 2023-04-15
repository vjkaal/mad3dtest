document.onload = document.querySelector('.dropdown-content').style.display = 'none';

function toggleDropDown(){
  console.log(window.innerWidth);
  if(window.innerWidth < '960'){
    let content = document.querySelector('.dropdown-content');
    // console.log(content.style.display);
    if(content.style.display === 'none') content.style.display = 'inline-block';
    else content.style.display = 'none';
  }
}

function showDropDown(){
  if(window.innerWidth >= '960'){
    let content = document.querySelector('.dropdown-content');
    content.style.display = 'inline-block';
    
    content.addEventListener('mouseover', ()=>{
      content.style.display = 'inline-block';
    })
    content.addEventListener('mouseout', ()=>{
      content.style.display = 'none';
    })
  }
}

function hideDropDown(){
  if(window.innerWidth >= '960'){
    document.querySelector('.dropdown-content').style.display = 'none';
  }
}