function scrollToNextVideo() {
  // For YouTube
  if (window.location.host.includes("youtube.com")) {
    const nextButton = document.querySelector(".ytp-next-button");
    if (nextButton) {
      nextButton.click();
    }
  }

  // For Instagram
  if (window.location.host.includes("instagram.com")) {
    const nextButton = document.querySelector(
      "a.coreSpriteRightPaginationArrow"
    );
    if (nextButton) {
      nextButton.click();
    }
  }
}

function observeVideos() {
  let videoElement;

  // For YouTube
  if (window.location.host.includes("youtube.com")) {
    videoElement = document.querySelector("video");
  }

  // For Instagram
  if (window.location.host.includes("instagram.com")) {
    videoElement = document.querySelector("video");
  }

  if (videoElement) {
    videoElement.addEventListener("ended", scrollToNextVideo);
  }
}

window.addEventListener("load", observeVideos);
