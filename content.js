function createDownloadButton(image, imageUrl) {
  const btn = document.createElement("button");
  btn.innerText = "⬇️";
  btn.style.position = "absolute";
  btn.style.zIndex = 9999;
  btn.style.background = "white";
  btn.style.border = "1px solid #888";
  btn.style.borderRadius = "5px";
  btn.style.padding = "2px 6px";
  btn.style.fontSize = "12px";
  btn.style.cursor = "pointer";

  const wrapper = document.createElement("div");
  wrapper.style.position = "relative";
  image.parentNode.insertBefore(wrapper, image);
  wrapper.appendChild(image);
  wrapper.appendChild(btn);

  btn.style.position = "absolute";
  btn.style.bottom = "5px";
  btn.style.right = "5px";

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    chrome.runtime.sendMessage({ action: "downloadImage", url: imageUrl });
  });
}

function addButtonsToImages() {
  const images = document.querySelectorAll("img.ipsImage_thumbnailed");

  images.forEach(img => {
    const fullUrl = img.getAttribute("data-src") || img.src;
    if (!fullUrl || img.dataset.downloadAttached) return;

    img.dataset.downloadAttached = "true";
    createDownloadButton(img, fullUrl);
  });
}

window.addEventListener("load", () => {
  setTimeout(addButtonsToImages, 1000);
});
