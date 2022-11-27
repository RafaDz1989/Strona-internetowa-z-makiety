document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.navbar');

    const navBtn = document.querySelector('.navbar__burger-btn');
    const navMobile = document.querySelector('.navbar__mobile');
    const navLogo = document.querySelector('.navbar__logo');
    const navbarMobileItemLinks = document.querySelectorAll('.navbar__mobile-item a');

    const sections = document.querySelectorAll('.section');
    const navbarDesktopItemLinks = document.querySelectorAll('.navbar__desktop-item a');
    
    const footerYear = document.querySelector('.footer__year');

    
    // adding shadow to navigation
    const addShadow = () => {
        nav.classList.toggle('shadow-bg', window.scrollY >= 50);
    };
    

    // opening & closing mobile navigation
    const handleMobileNav = () => {
        navBtn.classList.toggle('is-active');
        navMobile.classList.toggle('show-menu');

        navLogo.addEventListener('click', () => {
            navBtn.classList.remove('is-active');
            navMobile.classList.remove('show-menu');
        });

        navbarMobileItemLinks.forEach(link => {
            link.addEventListener('click', () => {
                navBtn.classList.remove('is-active');
                navMobile.classList.remove('show-menu');
            });
        });
    };


    // scrollspy on desktop navigation
    const options = {
        threshold: [0.8]
    };

    const handleScrollspy = entries => {
        if (document.body.hasAttribute('data')) {
            entries.forEach(entry => {
                const activeLink = document.querySelector(`.navbar__desktop-item a[href='#${entry.target.id}']`);

                if (entry.isIntersecting) {
                    navbarDesktopItemLinks.forEach(link => link.classList.remove('active-link'));
                    activeLink.classList.add('active-link');
                };
            });
        };
    };

    const observer = new IntersectionObserver(handleScrollspy, options);
    
    sections.forEach(section => {
        observer.observe(section);
    });


    // showing current year
    const handleCurrentYear = () => {
        const year = (new Date).getFullYear();
        footerYear.innerText = year;
    };

    
    handleCurrentYear();
    window.addEventListener('scroll', addShadow);
    navBtn.addEventListener('click', handleMobileNav);
});