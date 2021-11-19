document.querySelectorAll(".dropdown").forEach((function(e){const t=document.querySelector(".dropdown__button"),i=e.querySelector(".dropdown__list"),s=i.querySelectorAll(".dropdown__list-item"),r=e.querySelector(".dropdown__input-hidden");t.addEventListener("click",(function(t){i.classList.toggle("show"),e.classList.toggle("active"),this.classList.toggle("active")})),s.forEach((function(s){s.addEventListener("click",(function(s){s.stopPropagation(),t.innerHTML=this.innerHTML,t.focus(),r.value=this.dataset.value,i.classList.remove("show"),t.classList.remove("active"),e.classList.remove("active")}))})),document.addEventListener("click",(function(s){s.target!==t&&(t.classList.remove("active"),i.classList.remove("show"),e.classList.remove("active"))})),document.addEventListener("keydown",(function(s){"Tab"!==s.key&&"Escape"!==s.key||(t.classList.remove("active"),i.classList.remove("show"),e.classList.remove("active"))}))}));const iconMenu=document.querySelector(".menu__icon"),menu=document.querySelector(".header__menu"),menuClose=document.querySelector(".menu__close");iconMenu&&(iconMenu.addEventListener("click",(function(e){document.body.classList.toggle("lock"),iconMenu.classList.add("_active"),menu.classList.toggle("_active")})),menuClose.addEventListener("click",(function(e){document.body.classList.remove("lock"),iconMenu.classList.remove("_active"),menu.classList.remove("_active")})));const mainSlider=document.querySelector(".main-slider");mainSwiper=new Swiper(mainSlider,{observer:!0,observeParents:!0,slidesPerView:1,effect:"slide",speed:800,loop:!1,watchOverflow:!0,slideClass:"main-block__item",wrapperClass:"main-slider__body",pagination:{el:".main-slider__pagination",clickable:!0,type:"fraction"},navigation:{nextEl:".main-slider .slider-arrow_next",prevEl:".main-slider .slider-arrow_prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:10},600:{slidesPerView:2,spaceBetween:30},991:{slidesPerView:1,spaceBetween:40}}});const articleSlider=document.querySelector(".article-slider");articleSwiper=new Swiper(articleSlider,{observer:!0,observeParents:!0,observeChildren:!0,autoHeight:!0,effect:"slide",speed:800,loop:!1,watchOverflow:!0,slideClass:"article__column",wrapperClass:"article__wrapper",pagination:{el:".article-slider__pagination",clickable:!0,type:"fraction"},navigation:{nextEl:".article__controls .slider-arrow_next",prevEl:".article__controls .slider-arrow_prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:20,pagination:{el:".article-slider__pagination_mobile",clickable:!0,type:"fraction"}},580:{slidesPerView:2,spaceBetween:20},991:{slidesPerView:3,spaceBetween:30}}});const seoSlider=document.querySelector(".seo-block__slider");seoSwiper=new Swiper(seoSlider,{observer:!0,observeParents:!0,observeChildren:!0,slidesPerView:1,initialSlide:0,spaceBetween:15,effect:"fade",fadeEffect:{crossFade:!0},speed:800,loop:!1,watchOverflow:!0,slideClass:"seo-block__item",wrapperClass:"seo-block__wrapper",pagination:{el:".seo-block__pagination",clickable:!0,type:"fraction"},navigation:{nextEl:".seo-block__slider .slider-arrow_next",prevEl:".seo-block__slider .slider-arrow_prev"}});const buildingSlider=document.querySelector(".building-slider");buildingSwiper=new Swiper(buildingSlider,{observer:!0,observeParents:!0,observeChildren:!0,slidesPerView:1,initialSlide:0,spaceBetween:15,effect:"fade",fadeEffect:{crossFade:!0},speed:800,loop:!1,watchOverflow:!0,slideClass:"building__photo",wrapperClass:"building-slider__body",pagination:{el:".building-slider__pagination",clickable:!0,type:"fraction"},navigation:{nextEl:".building-slider .slider-arrow_next",prevEl:".building-slider .slider-arrow_prev"}});const spollersArray=document.querySelectorAll("[data-spollers]");if(spollersArray.length>0){const e=Array.from(spollersArray).filter((function(e,t,i){return!e.dataset.spollers.split(",")[0]}));e.length>0&&initSpollers(e);const t=Array.from(spollersArray).filter((function(e,t,i){return e.dataset.spollers.split(",")[0]}));if(t.length>0){const e=[];t.forEach((t=>{const i={},s=t.dataset.spollers.split(",");i.value=s[0],i.type=s[1]?s[1].trim():"max",i.item=t,e.push(i)}));let i=e.map((function(e){return"("+e.type+"-width: "+e.value+"px),"+e.value+","+e.type}));i=i.filter((function(e,t,i){return i.indexOf(e)===t})),i.forEach((t=>{const i=t.split(","),s=i[1],r=i[2],o=window.matchMedia(i[0]),l=e.filter((function(e){if(e.value===s&&e.type===r)return!0}));o.addListener((function(){initSpollers(l,o)})),initSpollers(l,o)}))}function initSpollers(e,t=!1){e.forEach((e=>{e=t?e.item:e,t.matches||!t?(e.classList.add("_init"),initSpollerBody(e),e.addEventListener("click",setSpollerAction)):(e.classList.remove("_init"),initSpollerBody(e,!1),e.removeEventListener("click",setSpollerAction))}))}function initSpollerBody(e,t=!0){const i=e.querySelectorAll("[data-spoller]");i.length>0&&i.forEach((e=>{t?(e.removeAttribute("tabindex"),e.classList.contains("_active")||(e.nextElementSibling.hidden=!0)):(e.setAttribute("tabindex","-1"),e.nextElementSibling.hidden=!1)}))}function setSpollerAction(e){const t=e.target;if(t.hasAttribute("data-spoller")||t.closest("[data-spoller]")){const i=t.hasAttribute("data-spoller")?t:t.closest("[data-spoller]"),s=i.closest("[data-spollers]"),r=!!s.hasAttribute("data-one-spoller");s.querySelectorAll("._slide").length||(r&&!i.classList.contains("_active")&&hideSpollersBody(s),i.classList.toggle("_active"),_slideToggle(i.nextElementSibling,500)),e.preventDefault()}}function hideSpollersBody(e){const t=e.querySelector("[data-spoller]._active");t&&(t.classList.remove("_active"),_slideUp(t.nextElementSibling,500))}}let _slideUp=(e,t=500)=>{e.classList.contains("_slide")||(e.classList.add("_slide"),e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=e.offsetHeight+"px",e.offsetHeight,e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,window.setTimeout((()=>{e.hidden=!0,e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("_slide")}),t))},_slideDown=(e,t=500)=>{if(!e.classList.contains("_slide")){e.classList.add("_slide"),e.hidden&&(e.hidden=!1);let i=e.offsetHeight;e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,e.offsetHeight,e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=i+"px",e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),window.setTimeout((()=>{e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("_slide")}),t)}},_slideToggle=(e,t=500)=>e.hidden?_slideDown(e,t):_slideUp(e,t);