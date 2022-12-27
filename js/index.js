        let  menuIcon = document.querySelector('.nav-icon');
        let nav = document.querySelector('.overlay-menu');
          let toggleIcon = document.querySelector('.nav-icon');






        menuIcon.addEventListener('click', () => {
            if (nav.style.transform != 'translateX(0%)') {
                nav.style.transform = 'translateX(0%)';
                nav.style.transition = 'transform 0.2s ease-out';
            } else { 
                nav.style.transform = 'translateX(-100%)';
                nav.style.transition = 'transform 0.2s ease-out';
            }
        });

        nav.addEventListener('click', () => {
                nav.style.transform = 'translateX(-100%)';
                nav.style.transition = 'transform 0.2s ease-out';
                document.body.classList.remove('fixed-position');
                toggleIcon.className = 'nav-icon';
        });

        toggleIcon.addEventListener('click', () => {
            if (toggleIcon.className != 'nav-icon toggle') {
                toggleIcon.className += ' toggle';
              document.body.classList.toggle('fixed-position');
            } else {
                toggleIcon.className = 'nav-icon';
                    document.body.classList.remove('fixed-position');
            }
        });

window.addEventListener('resize', () => {


     if (toggleIcon.className != 'nav-icon') {
        console.log("Update")
                nav.style.transform = 'translateX(-100%)';
                nav.style.transition = 'transform 0.2s ease-out';
                document.body.classList.remove('fixed-position');
                toggleIcon.className = 'nav-icon';
  }
});
