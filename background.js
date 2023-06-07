chrome.runtime.onInstalled.addListener((details) => {
  console.log(details);
  chrome.contextMenus.create({
    title: "Test Context Menu",
    id: "contextMenu1",
    // Context Menu Show up on right click of page or menu selection
    contexts: ["page", "selection"],
  });
  // Child Context Menu
  chrome.contextMenus.create({
    title: "Child Menu",
    id: "contextMenu2",
    parentId: "contextMenu1",
    // Context Menu Show up on right click of page or menu selection
    contexts: ["page", "selection"],
  });
  chrome.contextMenus.onClicked.addListener((event) => {
    console.log(event);
  });
});

console.log("Background is Running");
