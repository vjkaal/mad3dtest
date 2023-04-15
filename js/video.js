function playVid(id){
  document.querySelector(id).play();
  console.log('on')
}

function pauseVid(id){
  document.querySelector(id).pause();
  console.log('off')
}