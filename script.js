let navbar = document.querySelector('.navbar');
// let menuIcon = document.querySelector('#menu-btn');
// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height){
//             navLinks.forEach(Links => {
//                 Links.classList.remove('active');
//                 document.querySelector('header nav a [href*=' + id +']').classList.add('active');
//             })
//         }
//     })
// }

menuIcon.onclick = () => {
    // menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

document.addEventListener('scroll', function() {
    var animatedBar = document.getElementById('animatedBar');
    var barContainer = document.querySelector('.bar-container');
    var containerPosition = barContainer.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;
  
    if (containerPosition < screenPosition) {
      animatedBar.style.width = '100%';
    }
  });
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=> {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.progress-line');
hiddenElements.forEach((el) => observer.observe(el));


// animated skills bars when scrolling  

// const skillsSection = document.getElementById('skills');

// const progressBars = document.querySelectorAll('.progress-line');

// function showProgress(){
//     progressBars.forEach(progressBar => {
//         const value = progressBar.dataset.progress; 
//         progressBar.style.opacity = 1;
//         progressBar.style.width = `${value}%`;
//         console.log(value);
//     });
// }

// function hideProgress(){
//     progressBars.forEach(p => {
//         p.style.opacity = 0;
//         p.style.wifth = 0;
//     });
// }

// window.addEventListener('scroll',() => {
//     const sectionPos = skillsSection.getBoundingClientRect.top;
//     const screenPos = window.innerHeight / 2;

//     if(sectionPos < screenPos){
//         showProgress();
//     } else{
//         hideProgress();
//     }
// });
