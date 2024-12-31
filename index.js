import{a as d,S as p,i as a}from"./assets/vendor-BWiIACaD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const y="47816092-1a68c63dfec782d726e058565",g="https://pixabay.com/api/";function h(o){return d.get(g,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data).catch(r=>{throw console.error("Error fetch:",r),r})}const u=document.querySelector(".gallery");let c;function b(o){const r=o.map(({webformatURL:i,largeImageURL:s,tags:e,likes:t,views:n,comments:f,downloads:m})=>`
      <a href="${s}" class="gallery-item">
        <img src="${i}" alt="${e}" />
        <div class="info">
          <p>Likes: ${t}</p>
          <p>Views: ${n}</p>
          <p>Comments: ${f}</p>
          <p>Downloads: ${m}</p>
        </div>
      </a>
    `).join("");u.innerHTML=r,c?c.refresh():c=new p(".gallery-item",{captionsData:"alt",captionDelay:250})}function L(){u.innerHTML=""}const q=document.querySelector(".form"),l=document.querySelector(".loader");document.querySelector(".load-more");q.addEventListener("submit",o=>{o.preventDefault();const r=o.target.elements.query.value.trim();if(!r){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#F44336"});return}L(),l.style.display="block",h(r).then(i=>{if(i.hits.length===0){a.info({message:"No images found"});return}b(i.hits)}).catch(i=>{a.error({message:"Error fetching images. Please try again.",backgroundColor:"#F44336",position:"topRight"})}).finally(()=>{l.style.display="none"})});
//# sourceMappingURL=index.js.map
