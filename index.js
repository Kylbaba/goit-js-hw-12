import{a as m,S as d,i as a}from"./assets/vendor-BWiIACaD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const g="47816092-1a68c63dfec782d726e058565",y="https://pixabay.com/api/";function h(o){return m.get(y,{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data).catch(t=>{throw console.error("Error fetch:",t),t})}const u=document.querySelector(".gallery");let c;function b(o){const t=o.map(({webformatURL:i,largeImageURL:s,tags:e,likes:r,views:n,comments:f,downloads:p})=>`
      <a href="${s}" class="gallery-item">
        <img src="${i}" alt="${e}" />
        <div class="info">
          <p>Likes: ${r}</p>
          <p>Views: ${n}</p>
          <p>Comments: ${f}</p>
          <p>Downloads: ${p}</p>
        </div>
      </a>
    `).join("");u.innerHTML=t,c?c.refresh():c=new d(".gallery-item",{captionsData:"alt",captionDelay:250})}function L(){u.innerHTML=""}const q=document.querySelector(".form"),l=document.querySelector(".loader");q.addEventListener("submit",o=>{o.preventDefault();const t=o.target.elements.query.value.trim();if(!t){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#F44336"});return}L(),l.style.display="block",h(t).then(i=>{if(i.hits.length===0){a.info({message:"No images found"});return}b(i.hits)}).catch(i=>{a.error({message:"Error fetching images. Please try again.",backgroundColor:"#F44336",position:"topRight"})}).finally(()=>{l.style.display="none"})});
//# sourceMappingURL=index.js.map
