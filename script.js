// TURN PAGES WHEN CLICK NEXT OR PREVIEW BUTTON
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick=() => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);


         if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
            pageTurn.style.zIndex = 20 - index;
            }, 500)
        }

        else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
        }, 500)
    }
}
})

// CONTACT ME BUTTON WHEN CLICK
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() =>{
            page.classList.add('turn');
            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500)

        }, (index + 1) *200 + 100)
    })
}

// CREATE REVERSE INDEX FUNACTION
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}

// BACK PROFILE BUTTON WHEN CLICK
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick= () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');
setTimeout(() => {
    reverseIndex();
    pages[pageNumber].style.zIndex = 10 + index;
}, 500)
}, (index + 1) * 200 + 100)
})
}

// OPENING ANIMATIONS
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

// OPENING ANIMATIONS (COVER RIGHT ANIMATIONS)
setTimeout (() => {
    coverRight.classList.add('turn');
}, 2100)
setTimeout (() => {
    coverRight.style.zIndex = -1;
}, 2800)

// OPENING ANIMATIONS (PAGE LEFT OR PROFILE PAGE ANIMATION)
setTimeout (() => {
    pageLeft.style.zIndex = 20;
}, 3200)

// OPENING ANIMATIONS (ALL PAGES RIGHT ANIMATIONS)
pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');
setTimeout(() => {
reverseIndex();
pages[pageNumber].style.zIndex = 10 + index;
}, 500)
}, (index + 1) * 200 + 2100)
})