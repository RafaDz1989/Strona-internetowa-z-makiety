const navbarItemOfferLink = document.querySelector('.navbar__desktop-item:nth-child(3) a');

const showOfferPage = () => {
    navbarItemOfferLink.classList.add('active-link');
};

showOfferPage();