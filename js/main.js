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
new Swiper('.founders-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    loop: true,
    slidesPerView: 5,
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

let index = 0;

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
    activeListItem(index);
    activeNumberItem(index);
    activePostBckgImg(index);
    activePostParagraph(index);
};

listItems.forEach((item, indexDot) => {
    item.addEventListener('mouseenter', () => {
        index = indexDot;
        prepareCurrentItem(index);
    })
});

numberItems.forEach((item, indexDot) => {
    item.addEventListener('mouseenter', () => {
        index = indexDot;
        prepareCurrentItem(index);
    })
});

// postBckgImgs.forEach((item, indexDot) => {
//     item.addEventListener('mouseenter', () => {
//         index = indexDot;
//         prepareCurrentItem(index);
//     })
// });

// postParagraphs.forEach((item, indexDot) => {
//     item.addEventListener( () => {
//         index = indexDot;
//         prepareCurrentItem(index);
//     })
// });

// _______________________________________________________________________________________________

// function getBackgroundImageOne() {
//     document.querySelector('.postulates__background-image').style.background = "url('img/main/6th-section-postulates/elephants.png')";
//     document.querySelector('.postulates__background-image').style.backgroundSize = 'cover';
//     document.querySelector('.postulates__background-image').style.backgroundRepeat = 'no-repeat';
//     document.querySelector('.postulates__background-image').style.backgroundPosition = 'center';
// };
// function getBackgroundImageTwo() {
//     document.querySelector('.postulates__background-image').style.background = "url('img/main/6th-section-postulates/nature-underwater.png')";
//     document.querySelector('.postulates__background-image').style.backgroundSize = 'cover';
//     document.querySelector('.postulates__background-image').style.backgroundRepeat = 'no-repeat';
//     document.querySelector('.postulates__background-image').style.backgroundPosition = 'center';
// };
// function getBackgroundImageThree() {
//     document.querySelector('.postulates__background-image').style.background = "url('img/main/6th-section-postulates/house-on-the-mountain.png')";
//     document.querySelector('.postulates__background-image').style.backgroundSize = 'cover';
//     document.querySelector('.postulates__background-image').style.backgroundRepeat = 'no-repeat';
//     document.querySelector('.postulates__background-image').style.backgroundPosition = 'center';
// };
// function getBackgroundImageFour() {
//     document.querySelector('.postulates__background-image').style.background = "url('img/main/6th-section-postulates/blue-sky-and-mountains.png')";
//     document.querySelector('.postulates__background-image').style.backgroundSize = 'cover';
//     document.querySelector('.postulates__background-image').style.backgroundRepeat = 'no-repeat';
//     document.querySelector('.postulates__background-image').style.backgroundPosition = 'center';
// };


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