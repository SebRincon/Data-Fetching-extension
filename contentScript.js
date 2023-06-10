const text = [];
const aTags = document.getElementById("a");
for (const tag in aTags) {
  text.push(text.textContent);
}

// Store fetched info in storage
chrome.storage.local.set({
  text,
});
