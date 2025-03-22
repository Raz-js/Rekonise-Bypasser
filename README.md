# Rekonise Bypasser

The **Rekonise Bypasser** is a Chrome extension designed to automatically process Rekonise URLs and extract download links. This extension is particularly useful for users who frequently interact with Rekonise links and want to streamline the process of obtaining the final download URLs.

## Features

- **Automatic URL Processing**: The extension automatically detects when a Rekonise URL is loaded in the browser and processes it to extract the download link.
- **Seamless Integration**: Once the URL is processed, the extension redirects the user to the final download URL without any manual intervention.
- **User-Friendly Interface**: The extension includes a simple popup with a button that links to the developer's Instagram profile.

## How It Works

1. **Background Script**: The `background.js` script listens for updates to the browser tabs. When a tab with a Rekonise URL is detected, it injects the `content.js` script into the page.
2. **Content Script**: The `content.js` script processes the Rekonise URL, expands any short URLs, and retrieves the final download URL using the Rekonise API.
3. **Redirect**: Once the download URL is obtained, the script redirects the user to the final download page.

## Installation Guide

To install and use the Rekonise Bypasser Chrome extension, follow these steps:

### Step 1: Download the Extension Files

1. Download the extension files (`background.js`, `content.js`, `manifest.json`, and `popup.html`) to your local machine.
2. Ensure that all files are placed in the same directory.

### Step 2: Load the Unpacked Extension in Chrome

1. Open Google Chrome and navigate to `chrome://extensions/`.
2. Enable **Developer Mode** by toggling the switch in the top right corner of the page.
3. Click on the **Load unpacked** button.
4. Select the directory where you saved the extension files.
5. The extension should now appear in your list of installed extensions.

### Step 3: Use the Extension

1. Navigate to a Rekonise URL in your browser.
2. The extension will automatically process the URL and redirect you to the final download page.

## Popup Interface

The extension includes a popup interface that can be accessed by clicking on the extension icon in the Chrome toolbar. The popup contains a button that links to the developer's Instagram profile.

## Permissions

The extension requires the following permissions:

- **activeTab**: To interact with the currently active tab.
- **scripting**: To inject the content script into the page.
- **tabs**: To listen for tab updates and detect Rekonise URLs.

## Host Permissions

The extension has access to the following domains:

- `*://rekonise.com/*`
- `*://api.rekonise.com/*`

## Credits

- **Developer**: Raz

---

Enjoy seamless processing of Rekonise URLs with the Rekonise Bypasser Chrome extension!
