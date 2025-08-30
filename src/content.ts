import { generateSvgFavicon, rgbStringToHex, setFavicon } from "./libs/index"

let previousIconUrl: string | undefined;

const checkAndSetFavicon = () => {
  const projectHeader = document.getElementById('project-header');
  let newIconUrl: string | undefined;

  // Check the background color of the project header.
  if (projectHeader) {
    const projectColor = projectHeader.style.backgroundColor;
    console.log('checkAndSetFavicon: Found project header. Color:', projectColor); // Log project header color detection.

    const projectColorHex = rgbStringToHex(projectColor);
    if (projectColorHex) {
      console.log('checkAndSetFavicon: Converted color to hex:', projectColorHex); // Log RGB to HEX conversion.
      newIconUrl = generateSvgFavicon(projectColorHex);
    }
  }

  // Update the favicon only if the URL has changed.
  if (newIconUrl && newIconUrl !== previousIconUrl) {
    setFavicon(newIconUrl);
    previousIconUrl = newIconUrl;
  } else {
    console.log('checkAndSetFavicon: No change detected or no new icon URL. Skipping update.'); // Log if no change is detected.
  }
};

// Use MutationObserver to monitor for DOM changes.
const observer = new MutationObserver(() => {
  console.log('MutationObserver: DOM change detected.'); // Log DOM change detection.
  checkAndSetFavicon();
});

// Observe attribute changes on the body and project header.
observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

const projectHeader = document.getElementById('project-header');
if (projectHeader) {
  observer.observe(projectHeader, { attributes: true, attributeFilter: ['style'] });
} else {
  console.log('checkAndSetFavicon: Project header not found on initial load.'); // Log if project header is not found.
}

// Initial execution on page load.
console.log('Initial check on page load.'); // Log initial execution.
checkAndSetFavicon();