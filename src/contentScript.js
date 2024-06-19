let autoScrollInterval;

function startAutoScroll() {
  if (window.location.hostname.includes("youtube.com")) {
    const video = document.querySelector("video");
    if (video) {
      video.addEventListener("ended", handleYouTube);
    }
  } else if (window.location.hostname.includes("instagram.com")) {
    const video = document.querySelector("video");
    if (video) {
      video.addEventListener("ended", handleInstagram);
    }
  }
}

function stopAutoScroll() {
  if (window.location.hostname.includes("youtube.com")) {
    const video = document.querySelector("video");
    if (video) {
      video.removeEventListener("ended", handleYouTube);
    }
  } else if (window.location.hostname.includes("instagram.com")) {
    const video = document.querySelector("video");
    if (video) {
      video.removeEventListener("ended", handleInstagram);
    }
  }
  clearInterval(autoScrollInterval);
}

function handleYouTube() {
  const nextButton = document.querySelector(".ytp-next-button");
  if (nextButton) {
    nextButton.click();
  }
}

function handleInstagram() {
  const nextButton = document.querySelector("._ac6e");
  if (nextButton) {
    nextButton.click();
  }
}

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === "startScrolling") {
    console.log("startScrolling message received in content script");
    startAutoScroll();
    sendResponse({ status: "scrolling started" });
  } else if (message === "stopScrolling") {
    console.log("stopScrolling message received in content script");
    stopAutoScroll();
    sendResponse({ status: "scrolling stopped" });
  }
});
