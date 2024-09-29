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
        if (+item.getAttribute("data-watched") == itemStoryCount ) {
            item.classList.add("seen")
            item.setAttribute("data-last", 0)
        } else {
            item.setAttribute("data-last",+item.getAttribute("data-watched"))
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
                `);
                const storyModal = document.querySelector(".story-modal")
                let activeIdx = +item.getAttribute("data-last")                
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
                            activeIdx = +story[storyIndex].getAttribute("data-last")
                            setContent()
                        },
                        'navigationNext': ()=> {
                            storyIndex++
                            clearTimeout(timeOut)
                            activeSlde.querySelectorAll(".story-modal__progress-bar span")[activeIdx].style.transitionDuration = '0s'
                            activeSlde.querySelectorAll(".story-modal__progress-bar")[activeIdx].classList.remove("seen")
                            activeIdx = +story[storyIndex].getAttribute("data-last")                     
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
                    let content = story[storyIndex].querySelectorAll(".item-story__mod-item")[activeIdx].querySelector(".item-story__mod-content")
                    activeSlde.querySelector(".story-modal__content").innerHTML = content ? content.innerHTML : ""  
                    activeSlde.querySelector(".media-cover").innerHTML = story[storyIndex].querySelectorAll(".item-story__mod-item")[activeIdx].querySelector(".item-story__mod-src").innerHTML
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
                    if (activeSlde.querySelector("[data-srcset]")) {
                        activeSlde.querySelectorAll("[data-srcset]").forEach(item => {
                            item.setAttribute("srcset",item.getAttribute("data-srcset"))
                            item.removeAttribute("data-srcset")
                        })
                    }
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
                    function showSumbitBtn(form) {
                        if (form.querySelector("textarea").value.length > 0) {
                          form.classList.add("btn-show")
                        } else {
                            form.classList.remove("btn-show")
                        }
                    }
                    let form = activeSlde.querySelector(".story-form")
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
                    if (activeIdx < count - 1) {                       
                        activeIdx++
                        story[storyIndex].setAttribute("data-last", activeIdx)
                        story[storyIndex].setAttribute("data-watched", activeIdx)
                        setContent()
                    } else {
                        story[storyIndex].setAttribute("data-watched", activeIdx + 1)
                        story[storyIndex].setAttribute("data-last", 0)
                        story[storyIndex].classList.add("seen")
                        activeSlde.querySelectorAll(".story-modal__progress-bar").forEach(item => {
                            item.querySelector("span").style.transitionDuration = '0'
                            item.classList.remove("seen")
                        })
                        if (storyIndex < story.length - 1) {
                            storyIndex++
                            storySwiper.slideTo(storyIndex )
                            activeIdx = +story[storyIndex].getAttribute("data-last")
                            setContent()
                        } else {
                            closeModal(storyModal)
                        }                     
                    }
                    story[storyIndex].setAttribute("data-watched", activeIdx+1)
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