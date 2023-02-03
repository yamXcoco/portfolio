// const cursor =document.querySelector('.cursor')
// mouseEffect.addEventListmer('mousemove',(e) =>{
//   cursor.style.left = `${e.clientX}px`;
//   cursor.style.top = `${e.clientY}px`;
// })
const cousor = document.querySelector('.cursor');
  const animateCursor = (e) => {
        cousor.style.left = `${e.pageX}px`;
        cousor.style.top = `${e.pageY}px`;
  }
window.addEventListener('mousemove', animateCursor);
