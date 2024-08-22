import{S as d,i as a}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function f(s,o){return fetch(`https://pixabay.com/api/?key=45506482-0746cd613ccb32219c9653431&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}`).then(e=>{if(!e.ok)throw new Error(`Error ${e.status}: ${e.statusText}`);return e.json()}).then(e=>{if(e.hits.length===0)throw new Error("No images found.");return e}).catch(e=>{throw iziToast.error({position:"topRight",message:`An error occurred: ${e.message}`}),e})}let u;function g(s){const o=document.querySelector(".gallery-list"),i=s.hits.map(t=>`
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
        </div>`).join("");o.insertAdjacentHTML("afterbegin",i),u.refresh()}function p(){const s=document.querySelector(".gallery-list");s.innerHTML=""}function m(){u=new d(".gallery-list a",{captions:!0,captionsData:"alt",captionDelay:250})}const h=document.querySelector(".gallery-form"),y=document.querySelector(".input-for-gallery"),c=document.querySelector(".loader");let n;h.addEventListener("submit",v);function v(s){p(),s.preventDefault(),c.classList.add("active");const o=y.value.trim(),i=1;if(o===""){a.error({position:"topRight",message:"Please fill the input"}),c.classList.remove("active");return}f(o,i).then(t=>{if(t.total===0){a.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),c.classList.remove("active");return}else g(t),a.success({position:"topRight",message:`Found ${t.total} images.`}),n?n.refresh():n=m()}).catch(t=>{a.error({position:"topRight",message:`An error occurred: ${t.message}`})}).finally(()=>{c.classList.remove("active")})}n=m();
//# sourceMappingURL=commonHelpers.js.map
