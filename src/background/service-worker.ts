// Background service worker
// This script will handle the core logic of the extension

chrome.runtime.onInstalled.addListener(() => {
  console.log("Vaulty extension installed.");
});
