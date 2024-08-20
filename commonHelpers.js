import{S as d,i as n}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function u(s,o){return fetch(`https://pixabay.com/api/?key=45506482-0746cd613ccb32219c9653431&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).catch(e=>{throw iziToast.error({position:"topRight",message:`${e}`}),e})}let l;function m(s){const o=document.querySelector(".gallery-list"),i=s.hits.map(t=>`
        <div class="image-frame">
          <a href="${t.largeImageURL}">
            <img class="image" src="${t.webformatURL}" alt="${t.tags}" />
          </a>
          <div class="text-wrapper">
            <div class="text-block">
              <h5>Likes</h5><p>${t.likes}</p>
            </div>
            <div class="text-block">
              <h5>Views</h5><p>${t.views}</p>
            </div>
            <div class="text-block">
              <h5>Comments</h5><p>${t.comments}</p>
            </div>
            <div class="text-block">
              <h5>Downloads</h5><p>${t.downloads}</p>
            </div>
          </div>
        </div>`).join("");o.insertAdjacentHTML("afterbegin",i),l.refresh()}function p(){const s=document.querySelector(".gallery-list");s.innerHTML=""}function f(){l=new d(".gallery-list a",{captions:!0,captionsData:"alt",captionDelay:250})}const g=document.querySelector(".gallery-form"),h=document.querySelector(".input-for-gallery"),a=document.querySelector(".loader");let y;g.addEventListener("submit",v);function v(s){p(),s.preventDefault(),a.classList.remove("hidden");const o=h.value.trim(),i=1;if(o===""){n.error({position:"topRight",message:"Please fill the input"}),a.classList.add("hidden");return}u(o,i).then(t=>{if(t.total===0){n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),a.classList.add("hidden");return}else m(t),n.success({position:"topRight",message:`Found ${t.total} images.`}),y.refresh()}).catch(t=>{n.error({position:"topRight",message:`An error occurred: ${t}`})}).finally(()=>{a.classList.add("hidden")})}f();
//# sourceMappingURL=commonHelpers.js.map
