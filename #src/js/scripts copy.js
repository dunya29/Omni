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
let stroiesSwiper

if (stories && story.length > 0) {
    if (stories.querySelector(".swiper")) {
        stroiesSwiper = new Swiper(stories.querySelector(".swiper"), {
            slidesPerView: 2,
            spaceBetween: 15,
            observer: true,
            observeParents: true,
            watchSlidesProgress: true,
            breakpoints: {
                1450: {
                    slidesPerView: 5,
                    spaceBetween: 20
                },
                1250: {
                    slidesPerView: 4,
                    spaceBetween: 20
                }, 
                575: {
                    slidesPerView: 3,
                    spaceBetween: 20
                } 
            },
            speed: 800
        })
    }
    story.forEach(item => {
        let storyCount = item.querySelectorAll(".item-story__story").length
        if (+item.getAttribute("data-watched") == storyCount ) {
            item.classList.add("seen")
            item.setAttribute("data-last", 0)
        } else {
            item.setAttribute("data-last",+item.getAttribute("data-watched"))
        }
        if (storyCount > 1) {
            let svgPathL = item.querySelector(".item-story__bg-path").getTotalLength()
            let dash = (svgPathL - 20 * storyCount) / storyCount 
            item.querySelector(".item-story__bg-path").style.strokeDasharray = `${dash} 20`;
        }
    })
    stories.addEventListener("click", e => {
        document.querySelectorAll(".item-story").forEach((item,index) => {
            if (item.contains(e.target)) {
                let storyIndex = index 
                let activeIdx = +item.getAttribute("data-last")                
                let count 
                let timeOut
                let activeSlide  
                let thisAnimation = false  
                document.querySelector(".footer").insertAdjacentHTML('afterend', `
                <div class="modal story-modal">
                    <div class="container modal__top">
                        <button class="btn-reset modal__close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                                <line x1="10.3935" y1="31.2531" x2="31.2531" y2="10.3935" stroke-width="1.5"></line>
                                <line x1="31.2529" y1="31.6065" x2="10.3932" y2="10.7469" stroke-width="1.5"></line>
                            </svg>
                        </button>
                    </div>
                    <div class="modal__overlay">
                        <div class="modal__content">
                            <div class="modal__inner">
                                <div class="swiper">
                                    <div class="swiper-wrapper">
                                        ${Array.from(story).map(item => `<div class="swiper-slide">
                                            <div class="story-modal__item">
                                                <div class="story-modal__progress">
                                                    ${Array.from(item.querySelectorAll(".item-story__story")).map(item => `<div class="story-modal__progress-bar">
                                                        <span></span>
                                                    </div>`).join("")}
                                                </div>
                                                <div class="media-cover"></div>
                                                <div class="story-modal__content"></div>
                                                <form class="form story-form">
                                                    <textarea placeholder="Сообщение..." name="message"></textarea>
                                                    <button type="submit" class="btn-reset story-form__btn">
                                                        <svg xmlns="http://www.w3.org/2000/svg" id="send" viewBox="0 0 18 18">
                                                        <path d="M12.1048 2.2193L5.33234 4.4693C0.779844 5.9918 0.779844 8.4743 5.33234 9.9893L7.34234 10.6568L8.00984 12.6668C9.52484 17.2193 12.0148 17.2193 13.5298 12.6668L15.7873 5.9018C16.7923 2.8643 15.1423 1.2068 12.1048 2.2193ZM12.3448 6.2543L9.49484 9.1193C9.38234 9.2318 9.23984 9.2843 9.09734 9.2843C8.95484 9.2843 8.81234 9.2318 8.69984 9.1193C8.48234 8.9018 8.48234 8.5418 8.69984 8.3243L11.5498 5.4593C11.7673 5.2418 12.1273 5.2418 12.3448 5.4593C12.5623 5.6768 12.5623 6.0368 12.3448 6.2543Z"/>
                                                        </svg>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>`).join("")}
                                    </div>
                                </div>
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
                `);
                const storyModal = document.querySelector(".story-modal")
                let storySwiper = new Swiper(".story-modal .swiper", {
                    slidesPerView: 1,
                    observer: true,
                    observeParents: true,
                    initialSlide: storyIndex,
                    navigation: {
                        prevEl: ".story-modal .nav-btn--prev",
                        nextEl: ".story-modal .nav-btn--next",
                    },
                    speed: 500,
                })
                storySwiper.on("slideChange", (swiper) => {
                    storyIndex = swiper.realIndex
                    clearTimeout(timeOut)
                    if(activeSlide) {
                        activeSlide.querySelectorAll(".story-modal__progress-bar span")[activeIdx].style.transition = 'all 0s'
                        activeSlide.querySelectorAll(".story-modal__progress-bar")[activeIdx].classList.remove("seen")
                    }
                    activeIdx = +story[storyIndex].getAttribute("data-last")                     
                    setContent()
                })
                // set w and h 
                function setWH() {
                    if(storyModal) {
                        let w = storyModal.querySelector(".modal__content").clientHeight / 1.77
                        if (w > storyModal.querySelector(".modal__content").clientWidth) {
                            w = storyModal.querySelector(".modal__content").clientWidth
                            storyModal.querySelector(".swiper").style.width = w + "px"
                            storyModal.querySelector(".swiper").style.height = 1.77 * w + "px"
                        } else {
                            storyModal.querySelector(".swiper").style.width = w + "px"
                            storyModal.querySelector(".swiper").style.height = storyModal.querySelector(".modal__content").clientHeight + "px"
                        }
                    }
                }
                setWH()
                window.addEventListener("resize",() => setWH())
                openModal(storyModal)
                function setContent() {
                    count = story[storyIndex].querySelectorAll(".item-story__story").length
                    activeSlide = storyModal.querySelectorAll(".swiper-slide")[storyIndex]
                    let initSl = story[storyIndex].querySelectorAll(".item-story__story")[activeIdx].cloneNode(true)
                    let content = story[storyIndex].querySelectorAll(".item-story__mod-item")[activeIdx].querySelector(".item-story__mod-content")
                    activeSlide.querySelector(".story-modal__content").innerHTML = content ? content.innerHTML : ""  
                    activeSlide.querySelector(".media-cover").innerHTML = story[storyIndex].querySelectorAll(".item-story__mod-item")[activeIdx].querySelector(".item-story__mod-src").innerHTML
                    activeSlide.querySelectorAll(".story-modal__progress-bar").forEach((item,idx) => {
                        if (idx < activeIdx) {
                            item.querySelector("span").style.transition = 'all 0s'
                            item.classList.add("seen")
                        }
                    })
                    activeSlide.querySelectorAll("[data-src]").forEach(item => {
                        item.setAttribute("src",item.getAttribute("data-src"))
                        item.removeAttribute("data-src")
                    })
                    if (activeSlide.querySelector("[data-srcset]")) {
                        activeSlide.querySelectorAll("[data-srcset]").forEach(item => {
                            item.setAttribute("srcset",item.getAttribute("data-srcset"))
                            item.removeAttribute("data-srcset")
                        })
                    }
                    if(initSl.tagName.toLowerCase() == "video") {
                        activeSlide.querySelector(".media-cover video").addEventListener("loadedmetadata", (event) => {
                            let videoDur = activeSlide.querySelector(".media-cover video").duration
                            activeSlide.querySelectorAll(".story-modal__progress-bar span")[activeIdx].style.transition = 'all ' + videoDur/10 + 's linear'
                            activeSlide.querySelector(".media-cover video").play()
                            activeSlide.querySelector(".media-cover video").setAttribute("autoplay","")
                            activeSlide.querySelectorAll(".story-modal__progress-bar")[activeIdx].classList.add("seen")
                            timeOut = setTimeout(autoPlay, videoDur * 100);
                        }) 
                    } else {
                        activeSlide.querySelectorAll(".story-modal__progress-bar span")[activeIdx].style.transition = 'all 1.5s linear'
                        activeSlide.querySelectorAll(".story-modal__progress-bar")[activeIdx].classList.add("seen")
                        timeOut = setTimeout(autoPlay, 15 * 100);
                    }
                    function showSumbitBtn(form) {
                        if (form.querySelector("textarea").value.length > 0) {
                          form.classList.add("btn-show")
                        } else {
                            form.querySelector("textarea").style.height = ""
                            form.classList.remove("btn-show")
                        }
                    }
                    let form = activeSlide.querySelector(".story-form")
                    showSumbitBtn(form)
                    form.querySelector("textarea").addEventListener("input", () => {
                        let $this = form.querySelector("textarea")
                        $this.style.height = ""
                        $this.style.height = $this.style.height = $this.scrollHeight + 'px'
                        showSumbitBtn(form)
                    })
                    form.addEventListener("submit", e => {
                        e.preventDefault()
                        form.querySelector("textarea").value = ""
                        form.querySelector("textarea").style.height = ""
                        showSumbitBtn(form)
                    })
                }
                function autoPlay() {
                    thisAnimation = true
                    if (activeIdx < count - 1) {                       
                        activeIdx++
                        story[storyIndex].setAttribute("data-last", activeIdx)
                        story[storyIndex].setAttribute("data-watched", activeIdx)
                        setContent()
                    } else {
                        story[storyIndex].setAttribute("data-watched", activeIdx + 1)
                        story[storyIndex].setAttribute("data-last", 0)
                        if (!story[storyIndex].classList.contains("seen")) {
                            story[storyIndex].classList.add("seen")  
                            if (stroiesSwiper) {
                                stroiesSwiper.appendSlide(`<div class="swiper-slide">${story[storyIndex].parentNode.innerHTML}</div>`)
                                stroiesSwiper.removeSlide(storyIndex);
                            }
                            if (document.querySelector(".stories-p__items")) {
                                let watchedSlide = story[storyIndex].cloneNode(true)
                                document.querySelector(".stories-p__items").append(watchedSlide)
                                story[storyIndex].remove()
                            }
                        }            
                        activeSlide.querySelectorAll(".story-modal__progress-bar").forEach(item => {
                            item.querySelector("span").style.transition = 'none'
                            item.classList.remove("seen")
                        })
                        if (storyIndex < story.length - 1) {
                            storyIndex++
                            storySwiper.slideTo(storyIndex)
                        } else {
                            clearTimeout(timeOut)
                            closeModal(storyModal)
                            setTimeout(() => {
                              storyModal.remove()
                            }, 400);
                        }                     
                    }
                    thisAnimation = false
                }  
                function prev() {
                    if (!thisAnimation) {
                        clearTimeout(timeOut)
                        story[storyIndex].setAttribute("data-last", activeIdx == 0 ? 0 : activeIdx - 1)
                        if(activeSlide) {
                            activeSlide.querySelectorAll(".story-modal__progress-bar").forEach((item,idx) => {
                                if (idx >= activeIdx - 1) {
                                    item.querySelector("span").style.transition = 'none'
                                    item.classList.remove("seen")           
                                }
                            })
                        } 
                        if (activeIdx == 0) {                         
                            if (storyIndex == 0) {
                                clearTimeout(timeOut)
                                closeModal(storyModal)
                                setTimeout(() => {
                                    storyModal.remove()
                                }, 400);
                            } else {
                                storyIndex--
                                storySwiper.slideTo(storyIndex)
                            }
                        } else {
                            activeIdx--
                            setTimeout(() => {
                                setContent()
                            }, 0);
                        }                     
                    }
                }
                function next() {
                    if (!thisAnimation) {
                        clearTimeout(timeOut)
                        if(activeSlide) {
                            activeSlide.querySelectorAll(".story-modal__progress-bar").forEach((item,idx) => {
                                if (idx <= activeIdx) {
                                    item.querySelector("span").style.transition = 'none'
                                    item.classList.add("seen")
                                }
                            })
                        }
                        if(activeSlide) {
                           //activeSlide.querySelectorAll(".story-modal__progress-bar span")[activeIdx].style.transition = 'none'  
                            //activeSlide.querySelectorAll(".story-modal__progress-bar")[activeIdx].classList.add("seen")                   
                        }
                        autoPlay()
                       
                    }
                }

                document.querySelectorAll(".story-modal__item").forEach(item => {
                    item.addEventListener("touchend", e => {                 
                        if (window.innerWidth < 768) {
                            if (window.innerWidth / 2 < e.changedTouches[0].clientX) {
                                next()
                            } else {
                                prev()
                            }
                        }
                    })
                }) 
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