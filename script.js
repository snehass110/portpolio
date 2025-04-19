


// const glassForm = document.querySelector('.glass-form');

// window.addEventListener('scroll', () => {
//   const formTop = glassForm.getBoundingClientRect().top;
//   const windowHeight = window.innerHeight;

//   if (formTop < windowHeight - 100) {
//     glassForm.classList.add('visible');
//     glassForm.classList.remove('hidden');
//   }
// });

// const modal = document.getElementById('imgModal');
//   const modalImg = document.getElementById('modal-img');
//   const images = document.querySelectorAll('.modern-img');
//   const closeBtn = document.querySelector('.modern-close');

//   images.forEach(img => {
//     img.addEventListener('click', () => {
//       modal.style.display = 'block';
//       modalImg.src = img.src;
//     });
//   });

//   closeBtn.onclick = function () {
//     modal.style.display = 'none';
//   };

//   window.onclick = function (event) {
//     if (event.target == modal) {
//       modal.style.display = 'none';
//     }
//   };


document.addEventListener("DOMContentLoaded", () => {
  const navMenu = document.getElementById("navMenu");
  const hamburger = document.querySelector(".hamburger");
  const closeBtn = document.querySelector(".close-btn");

  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    navMenu.classList.toggle("open");
  });

  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    navMenu.classList.remove("open");
  });

  document.addEventListener("click", (event) => {
    if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
      navMenu.classList.remove("open");
    }
  });
});

