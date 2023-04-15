function toggleCardText(i){
  if(window.innerWidth < '960'){
    let text = document.querySelector('#card-text'+i);
    // console.log(text.style.display);
    if(text.style.display === 'none') text.style.display = 'block';
    else text.style.display = 'none';
  }
}
