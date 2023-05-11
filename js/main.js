// section travel-companies
new Swiper('.travel-companies-slider', {
    loop: true,
    loopedSlides: 10,
    slidesPerView: 3,
    centeredSlides: true,
    initialSlide: 0,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    speed: 1000,
});


// section founders
let foundersSlider = new Swiper('.founders-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    loop: true,
    slidesPerView: 5.5,
    spaceBetween: 84,
    slideToClickedSlide: true,
    speed: 500,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 5.5,
        },
    },
});

const foundersBlockquotes = document.querySelectorAll('.founders__blockquote');

let indexBlockquote = 0;

const activeBlockquote = n => {
    for (foundersBlockquote of foundersBlockquotes) {
        foundersBlockquote.classList.remove('active');
    }
    foundersBlockquotes[n].classList.add('active');
};

foundersSlider.on('slideChange', function () {
    indexBlockquote = foundersSlider.realIndex;
    activeBlockquote(indexBlockquote);
});


// section frameworks
new Swiper('.frameworks-slider', {
    navigation: {
        nextEl: '.frameworks-slider-button-next',
        prevEl: '.frameworks-slider-button-prev'
    },
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    spaceBetween: 15,
    speed: 1000,
});


// section sustainably
const stars = document.querySelectorAll('.sustainably__star');
const links = document.querySelectorAll('.sustainably__link');

// _______________________________________________________________________________________________

// stars[0].onmouseenter = () => {
//     links[0].style.opacity = 1;
//     links[0].style.pointerEvents = 'auto';
//     links[0].onmouseleave = () => {
//         links[0].style.opacity = 0;
//         links[0].style.pointerEvents = 'none';
//         links[0].onmouseenter = () => {
//             links[0].style.opacity = 0;
//         }
//     }
// };

// stars[0].onmouseleave = () => {
//     links[0].style.opacity = 0;
//     links[0].onmouseenter = () => {
//         links[0].style.opacity = 1;
//     }
// };

// _______________________________________________________________________________________________

// stars[1].onmouseenter = () => {
//     links[1].style.opacity = 1;
//     links[1].style.pointerEvents = 'auto';
//     links[1].onmouseleave = () => {
//         links[1].style.opacity = 0;
//         links[1].style.pointerEvents = 'none';
//         links[1].onmouseenter = () => {
//             links[1].style.opacity = 0;
//         }
//     }
// };

// stars[1].onmouseleave = () => {
//     links[1].style.opacity = 0;
//     links[1].onmouseenter = () => {
//         links[1].style.opacity = 1;
//     }
// };

// _______________________________________________________________________________________________

// stars[2].onmouseenter = () => {
//     links[2].style.opacity = 1;
//     links[2].style.pointerEvents = 'auto';
//     links[2].onmouseleave = () => {
//         links[2].style.opacity = 0;
//         links[2].style.pointerEvents = 'none';
//         links[2].onmouseenter = () => {
//             links[2].style.opacity = 0;
//         }
//     }
// };

// stars[2].onmouseleave = () => {
//     links[2].style.opacity = 0;
//     links[2].onmouseenter = () => {
//         links[2].style.opacity = 1;
//     }
// };


// section postulates
const listItems = document.querySelectorAll('.postulates__list-item');
const numberItems = document.querySelectorAll('.postulates__number-item');
const postBckgImgs = document.querySelectorAll('.postulates__background-image');
const postParagraphs = document.querySelectorAll('.postulates__second-paragraph');

let indexPostulates = 0;

const activeListItem = n => {
    for (listItem of listItems) {
        listItem.classList.remove('active');
    }
    listItems[n].classList.add('active');
};

const activeNumberItem = n => {
    for (numberItem of numberItems) {
        numberItem.classList.remove('active');
    }
    numberItems[n].classList.add('active');
};

const activePostBckgImg = n => {
    for (postBckgImg of postBckgImgs) {
        postBckgImg.classList.remove('active');
    }
    postBckgImgs[n].classList.add('active');
};

const activePostParagraph = n => {
    for (postParagraph of postParagraphs) {
        postParagraph.classList.remove('active');
        postParagraph.style.transitionDelay = "0s";
    }
    postParagraphs[n].classList.add('active');
}

const prepareCurrentItem = ind => {
    activeListItem(indexPostulates);
    activeNumberItem(indexPostulates);
    activePostBckgImg(indexPostulates);
    activePostParagraph(indexPostulates);
};

listItems.forEach((item, indexDot) => {
    item.addEventListener('mouseenter', () => {
        indexPostulates = indexDot;
        prepareCurrentItem(indexPostulates);
    });
    item.addEventListener('click', () => {
        indexPostulates = indexDot;
        prepareCurrentItem(indexPostulates);
    });
    item.addEventListener('mouseleave', () => {
        item.style.transitionDelay = "0s";
    });
});


// section partnership-rules
new Swiper('.partnership-rules-slider', {
    navigation: {
        nextEl: '.partnership-rules-slider-button-next',
        prevEl: '.partnership-rules-slider-button-prev'
    },
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    spaceBetween: 8,
    speed: 1000,
});


// Disabled :hover effect on touch devices
function watchForHover() {
    // lastTouchTime is used for ignoring emulated mousemove events
    let lastTouchTime = 0;

    function enableHover() {
        if (new Date() - lastTouchTime < 500) return
        document.body.classList.add('hasHover')
    };

    function disableHover() {
        document.body.classList.remove('hasHover')
    };

    function updateLastTouchTime() {
        lastTouchTime = new Date()
    };

    document.addEventListener('touchstart', updateLastTouchTime, true);
    document.addEventListener('touchstart', disableHover, true);
    document.addEventListener('mousemove', enableHover, true);

    enableHover();
};

watchForHover();


// Adding animation
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 8;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.scrollX || document.documentElement.scrollLeft,
            scrollTop = window.scrollY || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);
}


// Remove transition-delay for .partnership-rules__link
const partnershipRulesButton = document.querySelector('.partnership-rules__link');
partnershipRulesButton.addEventListener('mousedown', () => {
    partnershipRulesButton.style.transitionDelay = '0s';
})