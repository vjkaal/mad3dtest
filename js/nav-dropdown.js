document.onload = document.querySelector('.dropdown-content').style.display = 'none';

function toggleDropDown(){
  let content = document.querySelector('.dropdown-content');
  console.log(content.style.display);
  if(content.style.display === 'none') content.style.display = 'inline-block';
  else content.style.display = 'none';
}