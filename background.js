// Create the context menu for right-clicking on links
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "ahrefsUrlChecker",  // Unique ID for the context menu item
        title: "Check in Ahrefs Traffic Checker",  // Label for the context menu
        contexts: ["link"],  // Show only when right-clicking on links
    });
});

// Handle clicks on the context menu item
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "ahrefsUrlChecker") {
        let linkUrl = info.linkUrl;  // Get the URL of the clicked link
        let ahrefsUrl = `https://ahrefs.com/traffic-checker/?input=${linkUrl}&mode=exact`;

        // Open the Ahrefs URL in a new tab
        chrome.tabs.create({ url: ahrefsUrl });
    }
});

// Handle the active tab when the extension icon is clicked
chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        let currentTab = tabs[0];
        let currentUrl = currentTab.url;

        // Build the Ahrefs Traffic Checker URL with the current tab's URL
        let ahrefsUrl = `https://ahrefs.com/traffic-checker/?input=${currentUrl}&mode=exact`;

        // Open the Ahrefs URL in a new tab
        chrome.tabs.create({ url: ahrefsUrl });
    });
});
