let isScrolling = false;

const toggleScroll = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (isScrolling) {
      chrome.tabs.sendMessage(tabs[0].id, "stopScrolling", (response) => {
        console.log(response.status);
        document.getElementById("toggleScroll").innerHTML = "Start Auto Scroll";
      });
    } else {
      chrome.tabs.sendMessage(tabs[0].id, "startScrolling", (response) => {
        console.log(response.status);
        document.getElementById("toggleScroll").innerHTML = "Stop Auto Scroll";
      });
    }
    isScrolling = !isScrolling;
  });
};

document.getElementById("toggleScroll").addEventListener("click", toggleScroll);
