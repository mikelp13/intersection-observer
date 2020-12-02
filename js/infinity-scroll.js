const obs = document.querySelector('.obs');
const obsWrapper = document.querySelector('.obs__wrapper')
const images = document.querySelectorAll('.section img')


const lazyLoad = (target) => {
  const options = {
    rootMargin: "30px 0px",
  };
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {

      }
    });
  }, options);

  io.observe(target)
};

