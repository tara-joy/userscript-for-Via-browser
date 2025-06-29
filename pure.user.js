// ==UserScript==
// @name Pure Redirector
// @namespace http://tampermonkey.net/
// @version 1.0
// @description Redirect entertainment and social media sites to voxday.net
// @author You
// @run-at document-start
// @match *://dynasty-scans.com/*
// @match *://*.dynasty-scans.com/*
// @match *://itch.io/*
// @match *://*.itch.io/*
// @match *://astro.com/*
// @match *://*.astro.com/*
// @match *://archiveofourown.org/*
// @match *://*.archiveofourown.org/*
// @match *://ao3.org/*
// @match *://*.ao3.org/*
// @match *://transformativeworks.org/*
// @match *://*.transformativeworks.org/*
// @match *://archive.transformativeworks.org/*
// @match *://www.4chan.org/*
// @match *://boards.4chan.org/*
// @match *://fanfiction.net/*
// @match *://*.fanfiction.net/*
// @match *://wattpad.com/*
// @match *://*.wattpad.com/*
// @match *://webtoons.com/*
// @match *://*.webtoons.com/*
// @match *://manhwahentai.me/*
// @match *://*.manhwahentai.me/*
// @match *://manhwax.net/*
// @match *://*.manhwax.net/*
// @match *://reddit.com/*
// @match *://*.reddit.com/*
// @match *://instagram.com/*
// @match *://*.instagram.com/*
// @match *://boredpanda.com/*
// @match *://*.boredpanda.com/*
// @match *://buzzfeed.com/*
// @match *://*.buzzfeed.com/*
// @match *://tiktok.com/*
// @match *://*.tiktok.com/*
// @grant none
// ==/UserScript==

/*
  ___  _   _ ____  _____ 
 |  _ \| | | |  _ \| ____|
 | |_) | | | | |_) |  _|  
 |  __/| |_| |  _ <| |___ 
 |_|    \___/|_| \_\_____|
REDIRECTS ENTERTAINMENT & SOCIAL MEDIA
SITES TO VOXDAY.NET FOR A CLEANER
INTERNET EXPERIENCE */

function redirectToVoxDay() {
    window.stop();
    
    // Redirect to voxday.net
    let newURL = "https://voxday.net";
    window.location.replace(newURL);
}

var urlHostname = window.location.hostname;

switch (urlHostname) {
    case "dynasty-scans.com":
    case "www.dynasty-scans.com":
        redirectToVoxDay();
        break;

    case "itch.io":
    case "www.itch.io":
        redirectToVoxDay();
        break;

    case "astro.com":
    case "www.astro.com":
        redirectToVoxDay();
        break;

    case "archiveofourown.org":
    case "www.archiveofourown.org":
        redirectToVoxDay();
        break;

    case "ao3.org":
    case "www.ao3.org":
        redirectToVoxDay();
        break;

    case "transformativeworks.org":
    case "www.transformativeworks.org":
        redirectToVoxDay();
        break;

    case "archive.transformativeworks.org":
        redirectToVoxDay();
        break;

    case "www.4chan.org":
    case "boards.4chan.org":
        redirectToVoxDay();
        break;

    case "fanfiction.net":
    case "www.fanfiction.net":
        redirectToVoxDay();
        break;

    case "wattpad.com":
    case "www.wattpad.com":
        redirectToVoxDay();
        break;

    case "webtoons.com":
    case "www.webtoons.com":
        redirectToVoxDay();
        break;

    case "manhwahentai.me":
    case "www.manhwahentai.me":
        redirectToVoxDay();
        break;

    case "manhwax.net":
    case "www.manhwax.net":
        redirectToVoxDay();
        break;

    case "reddit.com":
    case "www.reddit.com":
    case "old.reddit.com":
        redirectToVoxDay();
        break;

    case "instagram.com":
    case "www.instagram.com":
        redirectToVoxDay();
        break;

    case "boredpanda.com":
    case "www.boredpanda.com":
        redirectToVoxDay();
        break;

    case "buzzfeed.com":
    case "www.buzzfeed.com":
        redirectToVoxDay();
        break;

    case "tiktok.com":
    case "www.tiktok.com":
        redirectToVoxDay();
        break;
}
