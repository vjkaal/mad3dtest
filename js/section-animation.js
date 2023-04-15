window.onload = () => {
  let content = document.querySelector('.card-container');
  console.log(content.classList);
  content.classList.add("animate__animated");
  content.classList.add('animate__fadeInUp');
  // content.classList.add("animate__backInUp");
  // content.classList.add("animate__slow");
  console.log(content.classList);
}