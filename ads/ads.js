// ads.js

const adUnits = {
    // Ad Unit 1
    adUnit1: {
        key: '016a00269030c3c3fdecdafbfaca0eeb',
        format: 'iframe',
        height: 90,
        width: 728,
        params: {}
    },
    // Ad Unit 2
    adUnit2: {
        key: '1ec12885c6277097c5861b7c2740b2a1',
        format: 'iframe',
        height: 90,
        width: 728,
        params: {}
    },
    // Ad Unit 3
    adUnit3: {
        key: 'aeeb78aebd4b5d286edb51bc492109c3',
        format: 'iframe',
        height: 90,
        width: 728,
        params: {}
    },
    // Ad Unit 4
    adUnit4: {
        key: '9d4b89d5cbcaa1b19d907abbf60e5119',
        format: 'iframe',
        height: 90,
        width: 728,
        params: {}
    },
    // Ad Unit 5
    adUnit5: {
        key: '95388126cf0d976ed92ed5b7b0021ba4',
        format: 'iframe',
        height: 90,
        width: 728,
        params: {}
    },
    // Ad Unit 6
    adUnit6: {
        key: '373cc5c6f517c18407ef041b259c7957',
        format: 'iframe',
        height: 90,
        width: 728,
        params: {}
    },
    // Ad Unit 7
    adUnit7: {
        key: '29bef97371e711b216a927cd9adf74d7',
        format: 'iframe',
        height: 90,
        width: 728,
        params: {}
    },
    // Ad Unit 8
    adUnit8: {
        key: '38ec2163858c11888cee961b02e28cdf',
        format: 'iframe',
        height: 90,
        width: 728,
        params: {}
    },
    // Ad Unit 9
    adUnit9: {
        key: '00d40dd8961eefbe7ad3ace47e3ddae6',
        format: 'iframe',
        height: 90,
        width: 728,
        params: {}
    },
    // Ad Unit 10
    adUnit10: {
        key: 'fdcb1ec53cb933f1ef28dbe66d9ba1bd',
        format: 'iframe',
        height: 90,
        width: 728,
        params: {}
    },
    // Ad Unit 11
    adUnit11: {
        key: 'e5f3fc98128903c57e979c598d72f8ff',
        format: 'iframe',
        height: 90,
        width: 728,
        params: {}
    },
    // Ad Unit 12
    adUnit12: {
        key: '11435b173627adcba358804b3e75aacd',
        format: 'iframe',
        height: 90,
        width: 728,
        params: {}
    },
    // Ad Unit 13
    adUnit13: {
        key: 'd295c17a3c56fb1a8ff63a56ed5e962c',
        format: 'iframe',
        height: 90,
        width: 728,
        params: {}
    },
    // Ad Unit 14
    adUnit14: {
        key: 'd71dd54649a72db6b6f0a9abec7ccc6e',
        format: 'iframe',
        height: 90,
        width: 728,
        params: {}
    },
    // Ad Unit 15
    adUnit15: {
        key: '507c46e8f716a21d987fae5b4eb29bac',
        format: 'iframe',
        height: 90,
        width: 728,
        params: {}
    },
    // Ad Unit 16
    adUnit16: {
        key: '7d4d7b751cbafba0825ef51a60a603d3',
        format: 'iframe',
        height: 90,
        width: 728,
        params: {}
    },
    // Ad Unit 17
    adUnit17: {
        key: '557bde13d9cfbf1e61649456c5b0c8e6',
        format: 'iframe',
        height: 90,
        width: 728,
        params: {}
    },
    // Ad Unit 18
    adUnit18: {
        key: '67727d32565ea74be455589b43394dbe',
        format: 'iframe',
        height: 90,
        width: 728,
        params: {}
    },
    // Ad Unit 19
    adUnit19: {
        key: '5c64d1449c495bf7fd633e2db781e60b',
        format: 'iframe',
        height: 90,
        width: 728,
        params: {}
    }
};

// **IMPORTANT: If 'cellspitch.com' changes, you only need to update it here!**
const adDomain = "cellspitch.com";

/**
 * Inserts an ad unit into a specified HTML element.
 * @param {string} containerId The ID of the HTML element where the ad should be placed.
 * @param {string} adUnitName The key from the `adUnits` object (e.g., 'adUnit1', 'adUnit2').
 */
function insertAd(containerId, adUnitName) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.warn(`Ad container with ID "${containerId}" not found.`);
        return;
    }

    const ad = adUnits[adUnitName];
    if (!ad) {
        console.warn(`Ad unit "${adUnitName}" not found in adUnits object.`);
        return;
    }

    // Assign atOptions globally for the ad script to pick up
    window.atOptions = ad;

    // Create the script element for the ad invoker
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `//${adDomain}/${ad.key}/invoke.js`;

    // Append the script to the container. This will make the ad network's script
    // write its content directly into the container.
    // NOTE: This assumes the ad network's 'invoke.js' uses document.write.
    // If it appends elements, you might need to adjust.
    container.appendChild(script);
}

/**
 * A helper function to load all ads you want on a given page.
 * Call this function on `DOMContentLoaded`.
 */
function loadAllAds() {
    // Example: You would call insertAd for each slot on your page.
    // Make sure your HTML has div elements with these IDs.
    // insertAd('top-ad-slot', 'adUnit1');
    // insertAd('middle-ad-slot', 'adUnit2');
    // insertAd('bottom-ad-slot', 'adUnit3');

    // You can also create more specific functions if you have many pages
    // and want different ad combinations per page.
}

// You can uncomment the line below if you want to load all ads automatically
// once the DOM is ready without manually calling `loadAllAds` in your HTML.
// document.addEventListener('DOMContentLoaded', loadAllAds);
