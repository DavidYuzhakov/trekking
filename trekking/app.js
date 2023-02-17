// Shop

const shopItems = document.querySelectorAll(".shop__item");


shopItems.forEach(shopClick);

function shopClick(item) {
    item.addEventListener("click", function() {
        let currentItem = item;

        if( ! currentItem.classList.contains('active') ) {
            shopItems.forEach(function(item) {
                item.classList.remove('active');
            })

            currentItem.classList.add('active');
        }

    });
}


//scrolling when clicked
const menuLinks = document.querySelectorAll('[data-goto]');

if (menuLinks.length > 0) {
    for (const menuLink of menuLinks) {
        menuLink.addEventListener("click", function(e) {
            const menuLink = e.target;

            if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: "smooth",
                });
                e.preventDefault();
            }
        });
    }
}

// Fixed Header
const header = document.querySelector('.header');
const intro = document.querySelector('.intro');
const headerH = header.offsetHeight;
const introH = intro.offsetHeight;

if (document.documentElement.clientWidth > 770) {
    window.addEventListener("scroll", () => {
        let scrollDistance = window.scrollY;
    
        if (scrollDistance > introH - 60) {
            header.classList.add('header--fixed');
        } else {
            header.classList.remove('header--fixed');
        }
    });
}

// Animation
const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const AnimItemOffset = offset(animItem).top;
            const animStart = 4;  

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((scrollY > AnimItemOffset - animItemPoint) && scrollY < (AnimItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (! animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove("_active");
                }

            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

    setTimeout(() => {
        animOnScroll();
    }, 300);
}