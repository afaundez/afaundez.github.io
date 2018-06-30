---
---
document.addEventListener("DOMContentLoaded", function() {
  let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  let active = false;

  const lazyLoad = function() {
    if (active === false) {
      active = true;

      setTimeout(function() {
        lazyImages.forEach(function(lazyImage) {
          if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
            let video = document.createElement('video');
            let source = document.createElement('source');
            video.autoplay = true;
            video.loop = true;
            source.src = lazyImage.src.replace("placeholder-", "").replace(/\.(.*)($|\?)/, '.mp4$2')
            source.type = 'video/mp4';
            video.appendChild(source);
            let fallback = document.createElement('img');
            fallback.src = lazyImage.src.replace("placeholder-", "").replace(/\.(.*)($|\?)/, '.gif$2')
            fallback.setAttribute('type', 'image/gif');
            video.appendChild(fallback);
            if (lazyImage.parentNode.tagName.toLowerCase() === 'picture') {
              lazyImage.parentNode.replaceWith(video);
            };
            lazyImage.classList.remove("lazy");

            lazyImages = lazyImages.filter(function(image) {
              return image !== lazyImage;
            });

            if (lazyImages.length === 0) {
              document.removeEventListener("scroll", lazyLoad);
              window.removeEventListener("resize", lazyLoad);
              window.removeEventListener("orientationchange", lazyLoad);
            }
          }
        });

        active = false;
      }, 200);
    }
  };

  document.addEventListener("scroll", lazyLoad);
  window.addEventListener("resize", lazyLoad);
  window.addEventListener("orientationchange", lazyLoad);
});
