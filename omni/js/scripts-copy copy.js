let mobMenu = document.querySelector(".header-mobile-menu")
//open modal
function openModal(modal) {
    let activeModal = document.querySelector(".modal.open")
    if (!activeModal && !mobMenu.classList.contains("menu--active") ) {
        disableScroll()
    }
    if (activeModal) {
      activeModal.classList.remove("open")
    }
    modal.classList.add("open")
  }
  //close modal
  function closeModal(modal) {
    modal.classList.remove("open")
    setTimeout(() => {
      if (!mobMenu.classList.contains("menu--active")) {
        enableScroll()
      }
    }, 400);
}
const stories = document.querySelector(".stories")
const story = document.querySelectorAll(".item-story")

if (stories && story.length > 0) {
    if (stories.querySelector(".swiper")) {
        let stroiesSwiper = new Swiper(stories.querySelector(".swiper"), {
            slidesPerView: 2,
            spaceBetween: 10,
            observer: true,
            observeparents: true,
            watchSlidesProgress: true,
            breakpoints: {
                1250: {
                    slidesPerView: 5,
                    spaceBetween: 20
                },
                960: {
                    slidesPerView: 4,
                    spaceBetween: 20
                }, 
                639: {
                    slidesPerView: 3,
                    spaceBetween: 20
                }
            },
            speed: 800
        })
    }
    story.forEach(item => {
        let itemStoryCount = item.querySelectorAll(".item-story__story").length
        if (+item.getAttribute("data-watched") == itemStoryCount - 1) {
            item.classList.add("seen")
        }
        if (itemStoryCount > 1) {
            let svgPathL = item.querySelector(".item-story__bg-path").getTotalLength()
            let dash = (svgPathL - 20 * itemStoryCount) / itemStoryCount 
            item.querySelector(".item-story__bg-path").style.strokeDasharray = `${dash} 20`;
        }
    })
    stories.addEventListener("click", e => {
        story.forEach((item,index) => {
            if (item.contains(e.target)) {
                let storyIndex = index     
                document.querySelector(".footer").insertAdjacentHTML('afterend', `
                <div class="modal story-modal">
                     <button class="btn-reset modal__close">
                         <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                             <line x1="10.3935" y1="31.2531" x2="31.2531" y2="10.3935" stroke-width="1.5"></line>
                             <line x1="31.2529" y1="31.6065" x2="10.3932" y2="10.7469" stroke-width="1.5"></line>
                         </svg>
                     </button>
                    <div class="modal__overlay">
                        <div class="modal__content">
                            <div class="modal__inner">
                                <div class="swiper">
                                    <div class="swiper-wrapper">
                                        ${Array.from(story).map(item => `<div class="swiper-slide">
                                                <div class="media-cover"></div>
                                                <div class="story-modal__progress">
                                                    ${Array.from(item.querySelectorAll(".item-story__story")).map(item => `<div class="story-modal__progress-bar">
                                                        <span></span>
                                                    </div>`).join("")}
                                                </div>
                                        </div>`).join("")}
                                    </div>
                                    <div class="swiper-btns">
                                    <button type="button" class="btn-reset nav-btn nav-btn--prev">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M29.73 -0.00260162L0.216305 29.5111L29.73 59.0248L33.2952 55.4596L9.86778 32.0321H60V26.9901H9.86778L33.2952 3.56264L29.73 -0.00260162Z" fill="white"/>
                                        </svg>
                                    </button>
                                    <button type="button" class="btn-reset nav-btn nav-btn--next">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M30.27 -0.00260162L59.7837 29.5111L30.27 59.0248L26.7048 55.4596L50.1322 32.0321H0V26.9901H50.1322L26.7048 3.56264L30.27 -0.00260162Z" fill="white"/>
                                        </svg>
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `);
                const storyModal = document.querySelector(".story-modal")
                let activeIdx = +item.getAttribute("data-watched")
                let count 
                let timeOut
                let activeSlde
                let storySwiper = new Swiper(".story-modal .swiper", {
                    slidesPerView: 1,
                    observer: true,
                    observeParents: true,
                    initialSlide: storyIndex,
                    navigation: {
                        prevEl: ".story-modal .nav-btn--prev",
                        nextEl: ".story-modal .nav-btn--next",
                    },
                    on: {
                        'navigationPrev': ()=> {
                            storyIndex--
                            clearTimeout(timeOut)
                            activeSlde.querySelectorAll(".story-modal__progress-bar span")[activeIdx].style.transitionDuration = '0s'
                            activeSlde.querySelectorAll(".story-modal__progress-bar")[activeIdx].classList.remove("seen")
                            activeIdx = +story[storyIndex].getAttribute("data-watched")
                            setContent()
                        },
                        'navigationNext': ()=> {
                            storyIndex++
                            clearTimeout(timeOut)
                            activeSlde.querySelectorAll(".story-modal__progress-bar span")[activeIdx].style.transitionDuration = '0s'
                            activeSlde.querySelectorAll(".story-modal__progress-bar")[activeIdx].classList.remove("seen")
                            activeIdx = +story[storyIndex].getAttribute("data-watched")                     
                            setContent()
                        }
                    }, 
                    speed: 500,
                })
                openModal(storyModal)
                function setContent() {
                    count = story[storyIndex].querySelectorAll(".item-story__story").length
                    activeSlde = storyModal.querySelectorAll(".swiper-slide")[storyIndex]
                    let initSl = story[storyIndex].querySelectorAll(".item-story__story")[activeIdx].cloneNode(true)
                    activeSlde.querySelector(".media-cover").innerHTML = ""
                    activeSlde.querySelector(".media-cover").appendChild(initSl)
                    activeSlde.querySelectorAll(".story-modal__progress-bar").forEach((item,idx) => {
                        if (idx < activeIdx) {
                            item.querySelector("span").style.transitionDuration = '0s'
                            item.classList.add("seen")
                        }
                    })
                    activeSlde.querySelectorAll("[data-src]").forEach(item => {
                        item.setAttribute("src",item.getAttribute("data-src"))
                        item.removeAttribute("data-src")
                    })
                    if(initSl.tagName.toLowerCase() == "video") {
                        activeSlde.querySelector(".media-cover video").addEventListener("loadedmetadata", (event) => {
                            let videoDur = activeSlde.querySelector(".media-cover video").duration
                            activeSlde.querySelectorAll(".story-modal__progress-bar span")[activeIdx].style.transitionDuration = videoDur + 's'
                            activeSlde.querySelector(".media-cover video").play()
                            activeSlde.querySelector(".media-cover video").setAttribute("autoplay","")
                            activeSlde.querySelectorAll(".story-modal__progress-bar")[activeIdx].classList.add("seen")
                            timeOut = setTimeout(autoPlay, videoDur * 100);
                        }) 
                    } else {
                        activeSlde.querySelectorAll(".story-modal__progress-bar span")[activeIdx].style.transitionDuration = '1.5s'
                        activeSlde.querySelectorAll(".story-modal__progress-bar")[activeIdx].classList.add("seen")
                        timeOut = setTimeout(autoPlay, 15 * 100);
                    }
                }
                function autoPlay() {
                    if (activeIdx < count - 1) {                       
                        activeIdx++
                        story[storyIndex].setAttribute("data-watched", activeIdx)
                        setContent()
                    } else {
                        if (story[storyIndex].querySelectorAll(".item-story__story").length - 1 == activeIdx) {
                            story[storyIndex].classList.add("seen")
                        }
                        if (storyIndex < story.length - 1) {
                            storyIndex++
                            //storySwiper.slideTo(storyIndex + 1)
                            storySwiper.slideTo(storyIndex )
                            activeIdx = +story[storyIndex].getAttribute("data-watched")
                            setContent()
                        } else {
                            closeModal(storyModal)
                        }                     
                    }
                }  
                setContent() 
                storyModal.querySelector(".modal__close").addEventListener("click", e => {
                    clearTimeout(timeOut)
                    closeModal(storyModal)
                    setTimeout(() => {
                      storyModal.remove()
                    }, 400);
                })
            }
        })
    })
}