const REKONISE_DOMAIN = "https://rekonise.com/";
const UNLOCK_URL_TEMPLATE = "https://api.rekonise.com/social-unlocks/{}/unlock";

async function expandShortUrl(shortUrl) {
    const response = await fetch(shortUrl, { method: 'HEAD', redirect: 'follow' });
    return response.url;
}

function removeDomain(url) {
    return url.replace(REKONISE_DOMAIN, "");
}

function removeHash(url) {
    // Remove the hashtag and everything after it
    return url.split('#')[0];
}

async function getDownloadUrl(plugId) {
    const unlockUrl = UNLOCK_URL_TEMPLATE.replace("{}", plugId);
    const response = await fetch(unlockUrl);
    const data = await response.json();
    return data.url;
}

async function processLink(link) {
    const expandedUrl = await expandShortUrl(link.url);
    const plug = removeDomain(expandedUrl);
    const downloadUrl = await getDownloadUrl(plug);
    link.download_url = downloadUrl;
    return link;
}

async function main(link) {
    if (!link) {
        console.error("No link provided.");
        return;
    }

    // Remove the hashtag and everything after it
    link = removeHash(link);

    // Process the individual link
    const linkDict = { name: "Individual Link", url: link, download_url: "" };
    const processedLink = await processLink(linkDict);

    // Load the processed link in the same tab
    window.location.href = processedLink.download_url;
}

// Get the current URL and run the main function
const currentUrl = window.location.href;
main(currentUrl);