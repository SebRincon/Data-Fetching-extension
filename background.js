chrome.runtime.onInstalled.addListener((details) => {
  console.log(details);
  chrome.contextMenus.create({
    title: "Test Context Menu",
    id: "contextMenu1",
    // Context Menu Show up on right click of page or menu selection
    contexts: ["page", "selection"],
  });
});

console.log("Background is Running");
