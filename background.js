chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let currentTab = tabs[0];
        let currentUrl = currentTab.url;

        // Build the Ahrefs Traffic Checker URL with the current URL
        let ahrefsUrl = `https://ahrefs.com/traffic-checker/?input=${currentUrl}&mode=subdomains`;

        // Open the Ahrefs URL in a new tab
        chrome.tabs.create({ url: ahrefsUrl });
    });
});
