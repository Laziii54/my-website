const image = document.querySelector('.main_pic');
const container = document.querySelector('.main-container');

window.addEventListener('scroll', () => {
  const containerTop = container.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  
  const scrollAmount = containerTop * -0.3; 

  image.style.transform = `translateY(${scrollAmount}px)`;
});

