# **Ahrefs URL Opener Chrome Extension**

## Description

**Ahrefs URL Opener** is a Chrome extension that automatically opens the Ahrefs Traffic Checker with the URL of the active tab. It's a simple and effective tool for quickly analyzing the traffic data of any website using Ahrefs' platform.

## Features

- **Automatic URL Opening**: With just one click, it captures the active tab's URL and opens it in Ahrefs' Traffic Checker.
- **Easy Integration**: Seamlessly integrates into your Chrome browser, making traffic analysis quick and easy.

## Installation

1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/GarvGeek/ahref-url-opener.git
    ```
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click "Load unpacked" and select the directory where you cloned the repository.
5. The extension will now appear in your Chrome extensions list.

## Files

- **manifest.json**: Defines the extension's metadata (name, version, permissions).
- **background.js**: Contains the background logic that listens for a click event and then opens the Ahrefs Traffic Checker with the current tab's URL.
- **icon.png**: The icon displayed in Chrome's toolbar.

## Usage

1. Once installed, click on the extension icon from your Chrome toolbar.
2. The extension will automatically open the Ahrefs Traffic Checker for the currently active tab's URL.

## Permissions

- **tabs**: Required to access the active tab's URL.
- **activeTab**: Allows the extension to interact with the current tab.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Contact

For any questions or suggestions, feel free to open an issue or contact [your email or GitHub profile].
