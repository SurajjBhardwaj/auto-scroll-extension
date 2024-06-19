chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === "startScrolling") {
    console.log("Received startScrolling message");
    sendResponse({ status: "scrolling started" });
  }
});
