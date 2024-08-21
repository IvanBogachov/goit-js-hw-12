import{i as d,a as g,S as m}from"./assets/vendor-38cc1e54.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();const i={info:"Please enter a value in the search field!",warning:"Sorry, there are no images matching your search query. Please try again!",error:"Sorry, there are no connection to the server. Please try again later! ",exception:"Exception: We have some issue with connection. Please try again later! "},l={green:"#59a10d",orange:"#ffa000",red:"#ef4040"};function c(e,t){d.info({position:"topRight",backgroundColor:`${t}`,message:`${e}`})}g.defaults.baseURL="https://pixabay.com/api/";const y="45418693-8ae3627eda45814ae2d20cf49";async function h(e,t){const a={key:y,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t};try{return(await g.get("",{params:a})).data}catch(n){return n.response?c(i.error,l.orange):c(`${i.exception} ERROR:  ${n.message}`,l.orange),null}}const S=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(e,t){t.innerHTML=$(e),S.refresh()}function $(e){return e.hits.map(({webformatURL:t,largeImageURL:a,tags:n,likes:r,views:o,comments:s,downloads:p})=>`
            <li class="gallery-item hvr-grow">
                <a class="gallery-link" href="${a}">
                    <figure class="gallery-figure ">
                        <img class="gallery-image" src="${t}" alt="${n}" loading="lazy">
                        <figcaption class="gallery-figcaption">
                            <ul class="img-content-wrapper">
                                <li>Likes<span>${r}</span></li>
                                <li>Views<span>${o}</span></li>
                                <li>Comments<span>${s}</span></li>
                                <li>Downloads<span>${p}</span></li>
                            </ul>
                        </figcaption>
                    </figure>
                </a>
            </li>
          `).join("")}function w(e){return e?e&&e.totalHits===0?(showInfoMessage(MESSAGES.warning,MESSAGES_BG_COLORS.red),gallery.innerHTML="",!1):!0:(gallery.innerHTML="",!1)}const E=document.querySelector(".search-form"),f=document.querySelector(".gallery");E.addEventListener("submit",M);function M(e){e.preventDefault(),d.destroy(),f.innerHTML="",O();const t=new FormData(e.target),{search:a}=Object.fromEntries(t.entries());if(!a.trim()){c(i.info,l.red),f.innerHTML="",u();return}h(a.trim()).then(n=>{w(n)&&L(n,f)}).catch(n=>{c(i.exception+n,l.orange)}).finally(()=>{u(),e.target.reset()})}function O(){const e=document.querySelector(".loader");e&&e.classList.remove("is-hidden")}function u(){const e=document.querySelector(".loader");e&&e.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
