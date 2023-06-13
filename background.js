chrome.runtime.onInstalled.addListener((details) => {
  chrome.storage.local.set({
    shows: [],
  })
})

chrome.runtime.onInstalled.addListener((details) => {
  chrome.contextMenus.create({
    title: 'Test Context Menu',
    id: 'contextMenu1',
    // Context Menu Show up on right click of page or menu selection
    contexts: ['page', 'selection'],
  })
  // Child Context Menu
  chrome.contextMenus.create({
    title: 'Google Search',
    id: 'contextMenu2',
    parentId: 'contextMenu1',
    // Context Menu Show up on right click of page or menu selection
    contexts: ['selection'],
  })
  // Child menu 2
  chrome.contextMenus.create({
    title: 'IMDB Search',
    id: 'contextMenu3',
    parentId: 'contextMenu1',
    // Context Menu Show up on right click of page or menu selection
    contexts: ['selection'],
  })

  // Child menu 3
  chrome.contextMenus.create({
    title: 'MAZE Search',
    id: 'contextMenu4',
    parentId: 'contextMenu1',
    // Context Menu Show up on right click of page or menu selection
    contexts: ['selection'],
  })

  // Child menu 4
  chrome.contextMenus.create({
    title: 'Text to Speach',
    id: 'contextMenu5',
    parentId: 'contextMenu1',
    // Context Menu Show up on right click of page or menu selection
    contexts: ['selection'],
  })

  chrome.contextMenus.onClicked.addListener((event) => {
    // Check if menu 2 or menu 3 has been clicked
    if (event.menuItemId === 'contextMenu2') {
      chrome.search.query({
        // On click create new tab and send the selected text
        disposition: 'NEW_TAB',
        text: `${event.selectionText}`,
      })
    } else if (event.menuItemId === 'contextMenu3') {
      chrome.tabs.create({
        url: `https://www.imdb.com/find/?q=${event.selectionText}&ref_=nv_sr_sm`,
      })
    } else if (event.menuItemId === 'contextMenu4') {
      fetch(`https://api.tvmaze.com/search/shows?q=${event.selectionText}`)
        .then((res) => res.json())
        .then((data) => chrome.storage.local.set({ shows: data }))
    } else if (event.menuItemId === 'contextMenu5') {
      chrome.tts.speak(event.selectionText)
    }
  })
})

console.log('Background is Running')

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  console.log(msg)
  console.log(sender)
  sendResponse('This is a return call ')

  //? This can be used to send a message backwards
  chrome.tabs.sendMessage(sender.tab.id, 'Got your message')
})
