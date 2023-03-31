// section travel-companies
new Swiper('.travel-companies-slider', {
    loop: true,
    loopedSlides: 10,
    // mousewheel: {
    //     sensitivity: 1,
    // },
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
    touchRatio: 0,
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
            touchRatio: 1,
        },
        480: {
            slidesPerView: 3,
            touchRatio: 1,
        },
        992: {
            slidesPerView: 5.5,
        },
    },
});

const foundersBlockquotes = document.querySelectorAll('.founders__blockquote');
const nextButtonFoundersSlider = document.querySelector('.swiper-button-next');
const prevButtonFoundersSlider = document.querySelector('.swiper-button-prev');

let indexBlockquote = 0;

const activeBlockquote = n => {
    for (foundersBlockquote of foundersBlockquotes) {
        foundersBlockquote.classList.remove('active');
    }
    foundersBlockquotes[n].classList.add('active');
};

const prepareCurrentBlockqute = ind => {
    activeBlockquote(indexBlockquote);
};

function nextBlockquote() {
    indexBlockquote = foundersSlider.realIndex;
        activeBlockquote(indexBlockquote);
}

function prevBlockquote() {
    indexBlockquote = foundersSlider.realIndex;
        activeBlockquote(indexBlockquote);
}

foundersSlider.slides.forEach((item) => {
    item.addEventListener('click', () => {
        indexBlockquote = foundersSlider.realIndex;
        activeBlockquote(indexBlockquote);
    });
});

nextButtonFoundersSlider.addEventListener('click', nextBlockquote);
prevButtonFoundersSlider.addEventListener('click', prevBlockquote);


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
let stars = document.querySelectorAll('.sustainably__star');
let links = document.querySelectorAll('.sustainably__link');

// _______________________________________________________________________________________________

stars[0].onmouseenter = () => {
    links[0].style.opacity = 1;
    links[0].onmouseleave = () => {
        links[0].style.opacity = 0;
        links[0].onmouseenter = () => {
            links[0].style.opacity = 0;
        }
    }
};

stars[0].onmouseleave = () => {
    links[0].style.opacity = 0;
    links[0].onmouseenter = () => {
        links[0].style.opacity = 1;
    }
};

// _______________________________________________________________________________________________

stars[1].onmouseenter = () => {
    links[1].style.opacity = 1;
    links[1].onmouseleave = () => {
        links[1].style.opacity = 0;
        links[1].onmouseenter = () => {
            links[1].style.opacity = 0;
        }
    }
};

stars[1].onmouseleave = () => {
    links[1].style.opacity = 0;
    links[1].onmouseenter = () => {
        links[1].style.opacity = 1;
    }
};

// _______________________________________________________________________________________________

stars[2].onmouseenter = () => {
    links[2].style.opacity = 1;
    links[2].onmouseleave = () => {
        links[2].style.opacity = 0;
        links[2].onmouseenter = () => {
            links[2].style.opacity = 0;
        }
    }
};

stars[2].onmouseleave = () => {
    links[2].style.opacity = 0;
    links[2].onmouseenter = () => {
        links[2].style.opacity = 1;
    }
};


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
});

numberItems.forEach((item, indexDot) => {
    item.addEventListener('mouseenter', () => {
        indexPostulates = indexDot;
        prepareCurrentItem(indexPostulates);
    });
    item.addEventListener('click', () => {
        indexPostulates = indexDot;
        prepareCurrentItem(indexPostulates);
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