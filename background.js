chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "downloadImage") {
    chrome.downloads.download({
      url: message.url,
      saveAs: false
    });
  }
});
