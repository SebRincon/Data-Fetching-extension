const text = [];
const aTags = document.getElementById("a");
for (const tag in aTags) {
  text.push(text.textContent);
}

//? Store fetched info in storage
// chrome.storage.local.set({
//   text,
// });

//? Sending message extension state
chrome.runtime.sendMessage(null, text, (response) => {
  // Context will be in the content script / open window
  console.log("Response From State" + response);
});

chrome.runtime.onMessage.addListener((msg, sender, sendRes) => {
  console.log(msg);
});
