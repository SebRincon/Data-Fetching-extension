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
    title: "Google Search",
    id: "contextMenu2",
    parentId: "contextMenu1",
    // Context Menu Show up on right click of page or menu selection
    contexts: ["selection"],
  });
  // Child menu 2
  chrome.contextMenus.create({
    title: "IMDB Search",
    id: "contextMenu3",
    parentId: "contextMenu1",
    // Context Menu Show up on right click of page or menu selection
    contexts: ["selection"],
  });

  chrome.contextMenus.onClicked.addListener((event) => {
    // Check if menu 2 or menu 3 has been clicked
    if (event.menuItemId === "contextMenu2") {
      chrome.search.query({
        // On click create new tab and send the selected text
        disposition: "NEW_TAB",
        text: `${event.selectionText}`,
      });
    } else if (event.menuItemId === "contextMenu3") {
      chrome.tabs.create({
        url: `https://www.imdb.com/find/?q=${event.selectionText}&ref_=nv_sr_sm`,
      });
    }
  });
});

console.log("Background is Running");
