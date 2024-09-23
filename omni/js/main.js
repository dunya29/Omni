//enablescroll
function enableScroll() {
  if (document.querySelectorAll('.fixed-block')) {
    document.querySelectorAll('.fixed-block').forEach(block => block.style.paddingRight = '0px')
  }
  document.body.style.paddingRight = '0px'
  document.querySelector('.footer').style.right = '0px'
  document.body.classList.remove("noscroll")
}
//disable scroll
function disableScroll() {
  let paddingValue = window.innerWidth > 325 ? window.innerWidth - document.documentElement.clientWidth + 'px' : 0
  if (document.querySelectorAll('.fixed-block')) {
    document.querySelectorAll('.fixed-block').forEach(block => block.style.paddingRight = paddingValue)
  }
  document.body.style.paddingRight = paddingValue
  document.querySelector('.footer').style.right = paddingValue
  document.body.classList.add("noscroll");
}
// Header hide
const header = document.querySelector('.header__content');
if (header) {
  let lastScroll = 0;
  const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
  const containHide = () => header.classList.contains('hide');
  const menuMobile = document.querySelector('.header-mobile-menu');
  window.addEventListener('scroll', () => {
    if (menuMobile && !menuMobile.classList.contains('menu--active')) {
        if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > 10) {
          //scroll down
          header.classList.add('hide');
        } else if (scrollPosition() < lastScroll && containHide()) {
          //scroll up
          header.classList.remove('hide');
        }
    } else {
      header.classList.remove('hide');
    }
    lastScroll = scrollPosition();
  });
}
// Menu burger action
const menuBurgerOpen = document.querySelector('.header__burger');
if (menuBurgerOpen) {
  const menuMobile = document.querySelector('.header-mobile-menu');
  const menuHeader = document.querySelector('.header__content');
  menuBurgerOpen.addEventListener('click', () => {
    menuMobile.classList.toggle('menu--active');
    document.body.classList.toggle('noscroll');
    menuBurgerOpen.classList.toggle('burger--active');
    menuHeader.classList.toggle('mobile');
  });
}
  
// Main popup action
const allPopups = document.querySelectorAll('.popup');
const allClosePopupBtns = document.querySelectorAll('.close-btn');
const allPopupOpenBtns = document.querySelectorAll('.popup-open');
if (allPopupOpenBtns.length != 0) {
  const popupClientsCards = document.querySelector('.popup-clients__cards');
  const popupReqForm = document.querySelector('.popup-req__form');
  const popupClients = document.querySelector('.popup-clients');
  const popupReq = document.querySelector('.popup-req');
  const mobileMenu = document.querySelector('.header-mobile-menu');
  const headerContent = document.querySelector('.header__content');
  const headerBurger = document.querySelector('.header__burger');
  allPopupOpenBtns.forEach(popupOpenBtn => {
      popupOpenBtn.addEventListener('click', () => {
        let popupId = popupOpenBtn.getAttribute('data-popup');
        let currentPopup = document.querySelector(popupId);
        allPopups.forEach(popup => {
          popup.classList.remove('active');
        });
        function animateCards(el) {
          el.classList.add('active');
        }
        currentPopup.classList.add('active');
        //document.body.classList.add('noscroll');
        disableScroll()
        if (popupClients.classList.contains('active')) {
          setTimeout(animateCards(popupClientsCards), 300);
        }
        if (popupReq.classList.contains('active')) {
          // mobileMenu.classList.remove('active')
          setTimeout(animateCards(popupReqForm), 300);
        }
      });
  });
  allPopups.forEach(popup => {
    if (popup.classList.contains('active')) {
      document.body.classList.add('noscroll');
    } else {
      document.body.classList.remove('noscroll');
    }
  });
  allClosePopupBtns.forEach(closePopupBtn => {
      closePopupBtn.addEventListener('click', () => {
        let animSpd 
        if (document.querySelector(".popup-req.active")) {
          animSpd = 800
        } else {
          animSpd = 300
        }
        setTimeout(() => {
          enableScroll()
        }, animSpd);
        allPopups.forEach(popup => {
          popup.classList.remove('active');
        });
        if (popupClientsCards) {
          setTimeout(popupClientsCards.classList.remove('active'), 1000);
        }
        if (popupReqForm) {
          setTimeout(popupReqForm.classList.remove('active'), 1000);
        }
        mobileMenu.classList.remove('menu--active');
        headerContent.classList.remove('mobile');
        headerBurger.classList.remove('burger--active');
      });
  });
}

// Accordion stages site
// const accordionStagesItems = document.querySelectorAll('.accordion__title')

const stagesListDiv = document.querySelector('.accordion-list');
if (stagesListDiv) {
    const stagesListOl = stagesListDiv.firstElementChild;
    const accordionStagesParents = stagesListOl.childNodes;
    accordionStagesParents.forEach(accordionStagesParent => {
      accordionStagesParent.addEventListener('click', () => {
        const accordionStagesItem = accordionStagesParent.firstElementChild;
        const accordionStagesItemBody = accordionStagesItem.nextElementSibling;
        if (accordionStagesItem.classList.contains('active')) {
          accordionStagesItem.classList.remove('active');
          accordionStagesItemBody.classList.remove('active');
        } else {
          accordionStagesParents.forEach(el => {
            const childEl = el.firstElementChild;
            if (childEl != undefined) {
              const elBody = childEl.nextElementSibling;
              elBody.style.maxHeight = 0;
              childEl.classList.remove('active');
              elBody.classList.remove('active');
            }
          });
          accordionStagesItem.classList.add('active');
          accordionStagesItemBody.classList.add('active');
        }
        if (accordionStagesItem.classList.contains('active')) {
          accordionStagesItemBody.style.maxHeight = accordionStagesItemBody.scrollHeight + 'px';
        } else {
          accordionStagesItemBody.style.maxHeight = 0;
        }
      });
    });
}

// Select
const select = document.querySelector('.default');
const defaultSelect = () => {
  const choices = new Choices(select, {
    searchEnabled: false,
    shouldSort: false
  });
};
if (select) {
  defaultSelect();
}
  
// preloader
const preloader = document.querySelector('.preloader');
if (preloader) {
  const marquee = document.querySelector('.marquee__wrap');
  const menuHeader = document.querySelector('.header__content');
  menuHeader.classList.add('hide');
  document.body.classList.add('noscroll');
  window.onload = function () {
    document.body.classList.add('loaded');
    window.setTimeout(function () {
      marquee.style.position = "fixed";
      marquee.classList.add('visible');
    }, 500);
    window.setTimeout(function () {
      marquee.style.position = "absolute";
      preloader.classList.add('hidden');
      menuHeader.classList.remove('hide');
      document.body.classList.remove('noscroll');
    }, 3000);
  };
}

// Projects filter
const filterOpenBtn = document.querySelector('.proj-filter__open');
if (filterOpenBtn) {
    const filter = document.querySelector('.proj-filter__lists');
    const filterReset = document.querySelector('.proj-filter__clear');
    filterOpenBtn.addEventListener('click', () => {
      filterOpenBtn.classList.toggle('active');
      filter.classList.toggle('opened');
    });
}
const projAreaWrap = document.querySelector('#filter-area');
const projTypeWrap = document.querySelector('#filter-type');
if (projAreaWrap) {
    const projAreas = projAreaWrap.querySelectorAll('.proj-filter__arg');
    const projTypes = projTypeWrap.querySelectorAll('.proj-filter__arg');
    const filterCards = document.querySelectorAll('.filterCard');
    const filterReset = document.querySelector('.proj-filter__clear');
    filterReset.addEventListener('click', () => {
      filterCards.forEach(item => {
        item.classList.remove('filterHide');
        item.classList.remove('filterAnimated');
        item.dataset.area = 'none';
        item.dataset.type = 'none';
      });
      projAreaWrap.classList.remove('filtered');
      projTypeWrap.classList.remove('filtered');
      projAreas.forEach(el => {
        el.classList.remove('active');
      });
      projTypes.forEach(el => {
        el.classList.remove('active');
      });
      filterReset.classList.remove('active');
      filterOpenBtn.firstElementChild.innerHTML = 'Фильтры';
      filterOpenBtn.dataset.numbProj = '0';
      filterOpenBtn.dataset.numbType = '0';
    });
    projAreas.forEach(projArea => {
      projArea.addEventListener('click', () => {
        if (!projArea.classList.contains('active')) {
          projAreas.forEach(el => {
            el.classList.remove('active');
          });
          projArea.classList.add('active');
          filterReset.classList.add('active');
          filterOpenBtn.dataset.numbProj = '1';
          if (filterOpenBtn.dataset.numbProj == '1' && filterOpenBtn.dataset.numbType == '1') {
            filterOpenBtn.firstElementChild.innerHTML = 'Фильтры (2)';
          } else if (filterOpenBtn.dataset.numbProj == '1' || filterOpenBtn.dataset.numbType == '1') {
            filterOpenBtn.firstElementChild.innerHTML = 'Фильтры (1)';
          }
          const category = projArea.dataset.filter;
          filterCards.forEach(item => {
            projAreaWrap.classList.add('filtered');
            if (!projTypeWrap.classList.contains('filtered')) {
              if (!item.classList.contains(category)) {
                item.classList.add('filterAnimated');
                item.classList.add('filterHide');
                item.dataset.area = category;
              } else {
                item.classList.remove('filterHide');
                item.classList.remove('filterAnimated');
                item.dataset.area = category;
              }
            } else {
              if (!item.classList.contains(category) || !item.classList.contains(item.dataset.type)) {
                item.classList.add('filterAnimated');
                item.classList.add('filterHide');
                item.dataset.area = category;
              } else if (item.classList.contains(category) && item.classList.contains(item.dataset.type)) {
                item.classList.remove('filterHide');
                item.classList.remove('filterAnimated');
                item.dataset.area = category;
              }
            }
          });
        } else {
          projArea.classList.remove('active');
          if (!projTypeWrap.classList.contains('filtered')) {
            filterReset.classList.remove('active');
          }
          filterCards.forEach(item => {
            projAreaWrap.classList.remove('filtered');
            if (!projTypeWrap.classList.contains('filtered')) {
              item.classList.remove('filterHide');
              item.classList.remove('filterAnimated');
            } else {
              if (item.classList.contains(item.dataset.type)) {
                item.classList.remove('filterHide');
                item.classList.remove('filterAnimated');
              }
            }
          });
          filterOpenBtn.dataset.numbProj = '0';
          if (filterOpenBtn.dataset.numbType == '1') {
            filterOpenBtn.firstElementChild.innerHTML = 'Фильтры (1)';
          } else {
            filterOpenBtn.firstElementChild.innerHTML = 'Фильтры';
          }
        }
      });
    });
    projTypes.forEach(projType => {
      projType.addEventListener('click', () => {
        if (!projType.classList.contains('active')) {
          projTypes.forEach(el => {
            el.classList.remove('active');
          });
          projType.classList.add('active');
          filterReset.classList.add('active');
          filterOpenBtn.dataset.numbType = '1';
          if (filterOpenBtn.dataset.numbProj == '1' && filterOpenBtn.dataset.numbType == '1') {
            filterOpenBtn.firstElementChild.innerHTML = 'Фильтры (2)';
          } else if (filterOpenBtn.dataset.numbProj == '1' || filterOpenBtn.dataset.numbType == '1') {
            filterOpenBtn.firstElementChild.innerHTML = 'Фильтры (1)';
          }
          const category = projType.dataset.filter;
          filterCards.forEach(item => {
            projTypeWrap.classList.add('filtered');
            if (!projAreaWrap.classList.contains('filtered')) {
              if (!item.classList.contains(category)) {
                item.classList.add('filterAnimated');
                item.classList.add('filterHide');
                item.dataset.type = category;
              } else {
                item.classList.remove('filterHide');
                item.classList.remove('filterAnimated');
                item.dataset.type = category;
              }
            } else {
              if (!item.classList.contains(category) || !item.classList.contains(item.dataset.area)) {
                item.classList.add('filterAnimated');
                item.classList.add('filterHide');
                item.dataset.type = category;
              } else if (item.classList.contains(category) && item.classList.contains(item.dataset.area)) {
                item.classList.remove('filterHide');
                item.classList.remove('filterAnimated');
                item.dataset.type = category;
              }
            }
          });
        } else {
          projType.classList.remove('active');
          if (!projAreaWrap.classList.contains('filtered')) {
            filterReset.classList.remove('active');
          }
          filterCards.forEach(item => {
            projTypeWrap.classList.remove('filtered');
            if (!projAreaWrap.classList.contains('filtered')) {
              item.classList.remove('filterHide');
              item.classList.remove('filterAnimated');
            } else {
              if (item.classList.contains(item.dataset.area)) {
                item.classList.remove('filterHide');
                item.classList.remove('filterAnimated');
              }
            }
          });
          filterOpenBtn.dataset.numbType = '0';
          if (filterOpenBtn.dataset.numbProj == '1') {
            filterOpenBtn.firstElementChild.innerHTML = 'Фильтры (1)';
          } else {
            filterOpenBtn.firstElementChild.innerHTML = 'Фильтры';
          }
        }
      });
    });
}
/*   const lazyImages = document.querySelectorAll('img[data-src], source[data-srcset]');
  const windowHeight = document.documentElement.clientHeight;
  let lazyImagesPositions = [];
  if (lazyImages.length > 0) {
    lazyImages.forEach(img => {
      if (img.dataset.src || img.dataset.srcset) {
        lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset);
        lazyScrollCheck();
      }
    });
  }
  window.addEventListener("scroll", lazyScroll);
  function lazyScroll() {
    if (document.querySelectorAll('img[data-src], source[data-srcset]').length > 0) {
      lazyScrollCheck();
    }
  }
  function lazyScrollCheck() {
    let imgIndex = lazyImagesPositions.findIndex(item => pageYOffset > item - windowHeight);
    if (imgIndex >= 0) {
      if (lazyImages[imgIndex].dataset.src) {
        lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
        lazyImages[imgIndex].removeAttribute('data-src');
      } else if (lazyImages[imgIndex].dataset.srcset) {
        lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset;
        lazyImages[imgIndex].removeAttribute('data-srcset');
      }
      delete lazyImagesPositions[imgIndex];
    }
  } */
function Marquee(selector, speed) {
  const parentSelector = document.querySelector(selector);
  const clone = parentSelector.innerHTML;
  const firstElement = parentSelector.children[0];
  let i = 0;
  parentSelector.insertAdjacentHTML('beforeend', clone);
  parentSelector.insertAdjacentHTML('beforeend', clone);
  setInterval(function () {
    firstElement.style.marginLeft = `-${i}px`;
    if (i > firstElement.clientWidth) {
      i = 0;
    }
    i = i + speed;
  }, 0);
}
  
//after window is completed load
//1 class selector for marquee
//2 marquee speed 0.2
if (document.querySelector('.marquee')) {
  window.addEventListener('load', Marquee('.marquee', 0.2));
}

// Show more project cards
const showMore = document.querySelector('.show-more');
if (showMore) {
  const productsLength = document.querySelectorAll('.filterCard').length;
  let items = 6;
  showMore.addEventListener('click', () => {
    items += 4;
    const array = Array.from(document.querySelector('.project-cards').children);
    const visItems = array.slice(0, items);
    visItems.forEach(el => el.classList.add('is-visible'));
    if (visItems.length === productsLength) {
      showMore.style.display = 'none';
    }
  });
}
  
  // Input file
const inputs = document.querySelectorAll('.input__file');
if (inputs) {
  Array.prototype.forEach.call(inputs, function (input) {
    let label = input.nextElementSibling,
      labelVal = label.querySelector('.input__file-button-text').innerText;
    input.addEventListener('change', function (e) {
      let countFiles = '';
      console.log(this.files);
      if (this.files && this.files.length >= 1) countFiles = this.files.length;
      if (countFiles)
        // label.querySelector('.input__file-button-text').innerText = 'Выбрано файлов: ' + countFiles;
        label.querySelector('.input__file-button-text').innerText = this.files[0].name;else label.querySelector('.input__file-button-text').innerText = labelVal;
    });
  });
}
const servicesSlider = document.querySelector('.services__slider')

if (servicesSlider) {
    let recommendSwiper
    function mobileSlider() {
        if (window.innerWidth <= 768 && servicesSlider.dataset.mobile == 'false') {
            recommendSwiper = new Swiper(servicesSlider, {
                slidesPerView: 1.4,
                slidesPerGroup: 1,
                spaceBetween: 10,
                speed: 500,
                breakpoints: {
                    640: {
                        slidesPerView: 1.8,
                        slidesPerGroup: 1,
                        spaceBetween: 20,
                    },
                },
                slideClass: 'services-slide',
            })

            servicesSlider.dataset.mobile = 'true'
        }

        if (window.innerWidth > 768) {
            servicesSlider.dataset.mobile = 'false'
            if (servicesSlider.classList.contains('swiper-container-initialized')) {
                recommendSwiper.destroy()
            }
        }
    }

    mobileSlider()

    window.addEventListener('resize', () => {
        mobileSlider()
    })
}


new Swiper('.staff-slider', {
    navigation: {
        nextEl: '.staff__arrow-right',
        prevEl: '.staff__arrow-left',
    },
    speed: 500,
    loop: false,
    slidesPerView: 1.4,
    slidesPerGroup: 1,
    spaceBetween: 10,
    simulateTouch: true,
    breakpoints: {
        640: {
            slidesPerView: 1.8,
            spaceBetween: 20,
            loop: false,
        },
        768: {
            slidesPerView: 2.7,
            spaceBetween: 20,
            loop: true,
        },
        961: {
            slidesPerView: 4.6,
            spaceBetween: 20,
            loop: true,
        },
    }
})
//password
const itemFormPass = document.querySelectorAll(".item-form--password")
if (itemFormPass) {
  itemFormPass.forEach(item => {
    item.querySelector("input").addEventListener("input", () => {
      if (item.querySelector("input").value.length > 0) {
        item.classList.add("show-eyeBtn")
      } else {
        item.querySelector("input").type = "password"
        item.classList.remove("show-eyeBtn","show-password")
      }
    })
    item.querySelector(".item-form__eye").addEventListener("click", () => {
      item.classList.toggle("show-password")
      if (item.classList.contains("show-password")) {
        item.querySelector("input").type = "text"
      } else {
        item.querySelector("input").type = "password"
      }
    })
  })
}
