let successPopup = document.querySelector(".success-popup")
var cases = {
    initCaseContent: function(id) {
        let self = this;
        self.openModal();
        $.ajax({
            url: 'ajax.php',
            data: 'action=showCase&id=' + id,
            type: 'GET',
            dataType: 'json',
            cache: false,
            beforesend: function(){},
            success: function(msg){
                //console.log(msg);
                let status = msg.status || 'error';
                if(status == 'ok') {
                    self.showContent(msg.content, msg.url, msg.pagetitle, msg.related);
                }
            }
        })
    },
    enableScroll: function() {
        if (document.querySelectorAll('.fixed-block')) {
            document.querySelectorAll('.fixed-block').forEach(block => block.style.paddingRight = '0px')
        }
        document.body.style.paddingRight = '0px'
        document.querySelector('.footer').style.right = '0px'
        document.body.classList.remove("noscroll")
    },
    disableScroll: function() {
        let paddingValue = window.innerWidth > 325 ? window.innerWidth - document.documentElement.clientWidth + 'px' : 0
        if (document.querySelectorAll('.fixed-block')) {
            document.querySelectorAll('.fixed-block').forEach(block => block.style.paddingRight = paddingValue)
        }
        document.body.style.paddingRight = paddingValue
        document.querySelector('.footer').style.right = paddingValue
        document.body.classList.add("noscroll");
    },
    //show modal
    openModal: function() {
        let modal = document.querySelector('.cases-modal');
        if (!modal.classList.contains("open")) {
            this.disableScroll();
            modal.classList.add("open")
        }
        modal.querySelector('.modal__inner').innerHTML =
            `<div class="modal-loading-icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="26.349px" height="26.35px" viewBox="0 0 26.349 26.35" style="enable-background:new 0 0 26.349 26.35;"
          xml:space="preserve">
         <g>
           <circle cx="13.792" cy="3.082" r="3.082"/>
           <circle cx="13.792" cy="24.501" r="1.849"/>
           <circle cx="6.219" cy="6.218" r="2.774"/>
           <circle cx="21.365" cy="21.363" r="1.541"/>
           <circle cx="3.082" cy="13.792" r="2.465"/>
           <circle cx="24.501" cy="13.791" r="1.232"/>
           <path d="M4.694,19.84c-0.843,0.843-0.843,2.207,0,3.05c0.842,0.843,2.208,0.843,3.05,0c0.843-0.843,0.843-2.207,0-3.05
             C6.902,18.996,5.537,18.988,4.694,19.84z"/>
           <circle cx="21.364" cy="6.218" r="0.924"/>
         </g>
       </svg></div>`;
        modal.querySelector(".btn-main").style.opacity = 0;
        modal.querySelector(".btn-main").style.visibility = "hidden";
    },
    // unshow modal
    closeModal: function () {
        let modal = document.querySelector('.cases-modal');
        modal.classList.remove("open")
        modal.querySelector(".btn-main").style.opacity = 0;
        modal.querySelector(".btn-main").style.visibility = "hidden";
        setTimeout(() => {
            modal.querySelector('.modal__inner').innerHTML = "";
            this.enableScroll();
        }, 300);
        //возвращаем при закрытии окна новые старые урлы и заголовки, если они заданы
        if (typeof originalUrl !== 'undefined') {
            window.history.pushState("", "", originalUrl);
        }
        if (typeof originalTitle !== 'undefined') {
            document.title = originalTitle;
        }
        if (typeof onCloseRedirect !== "undefined") {
            location.href = onCloseRedirect;
        }
    },
    loaded: function(item) {
        item.src = item.dataset.src
        if (item.parentNode.querySelector("source")) {
            item.parentNode.querySelectorAll("source").forEach(el => {
                el.srcset = el.dataset.srcset
            })
        }
    },
    loadImg: function(lazyImages, i) {
        let self = this;
        self.loaded(lazyImages[i]);
        lazyImages[i].onload = function nextImg() {
            lazyImages[i].removeAttribute("data-src")
            if (lazyImages[i].parentNode.querySelector("source")) {
                lazyImages[i].parentNode.querySelectorAll("source").forEach(el => {
                    el.removeAttribute('data-srcset')
                })
            }
            if (i < lazyImages.length - 1) {
                i++
                self.loadImg(lazyImages, i)
            }
        }
    },
    loadLazyImages: function(inModal = true) {
        let lazyImages = [];
        if(inModal === true) {
            let modal = document.querySelector('.cases-modal');
            lazyImages = modal.querySelectorAll(".lazy");
        } else {
            lazyImages = document.querySelector(".lazy");
        }
        if(lazyImages.length > 0) {
            this.loadImg(lazyImages, 0);
        }
    },
    showContent: function(content, url = false, title = false, related = ''){
        let modal = document.querySelector('.cases-modal');
        modal.querySelector('.modal__inner').innerHTML = content;
        $(document).find('.modal__inner .case__body').append(related);
        modal.querySelector(".btn-main").style.opacity = 1;
        modal.querySelector(".btn-main").style.visibility = "visible";
        this.loadLazyImages();
        if(url !== false) {
            window.history.pushState("", "", url);
        }
        if(title !== false) {
            document.title = title;
        }
    }
};
function formSuccess(form) {
  let current = document.querySelector(".popup.active")
  if (current) {
    successPopup.classList.add("active")
    setTimeout(() => {
      current.classList.remove("active")
    }, 300);
  }
}
window.addEventListener("load", () => {
    document.querySelector(".modal").addEventListener("click", e => {
        if (e.target.classList.contains("modal__overlay") || e.target.classList.contains("modal__close")) {
            cases.closeModal(document.querySelector(".fancy-modal"))
        }
    })
    $(document).on('click', '.modal .js-pageup', function () {
        $('.modal__overlay').stop().animate(
            {
                scrollTop: 0,
            },
            1500
        );
    });
    if (document.querySelector(".modal .js-pageup")) {
        document.querySelector(".modal__overlay").addEventListener("scroll", () => {
          if (document.querySelector(".modal__overlay").scrollTop > 400) {
            document.querySelector(".js-pageup").classList.add("show")
          } else {
            document.querySelector(".js-pageup").classList.remove("show")
          }
        })
    }

})