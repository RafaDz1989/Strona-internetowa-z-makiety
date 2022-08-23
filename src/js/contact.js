const navbarItemContactLink = document.querySelector('.navbar__desktop-item:last-child a');

const showContactPage = () => {
    navbarItemContactLink.classList.add('active-link');
};

showContactPage();