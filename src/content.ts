import { generateBacklogSvgFavicon, setFavicon, backLogThemeColorMap } from "./libs/index";

let previousIconUrl: string | undefined;

const INITIAL_CHECK_DELAY_MS = 50;

const getThemeName = (): string | null => {
  const themeClass = Array.from(document.body.classList).find(cls => cls.startsWith('theme-'));
  return themeClass ? themeClass.split('-')[1] : null;
};

const updateFaviconBasedOnTheme = () => {
  const themeName = getThemeName();
  if (!themeName) {
    return;
  }

  const color = backLogThemeColorMap[themeName];
  if (!color) {
    return;
  }

  const newIconUrl = generateBacklogSvgFavicon(color);
  if (newIconUrl !== previousIconUrl) {
    setFavicon(newIconUrl);
    previousIconUrl = newIconUrl;
  }
};

const observeThemeChanges = () => {
  const observer = new MutationObserver((mutations) => {
    if (mutations.some(m => m.attributeName === 'class')) {
      updateFaviconBasedOnTheme();
    }
  });

  observer.observe(document.body, {
    attributes: true,
  });
};

setTimeout(updateFaviconBasedOnTheme, INITIAL_CHECK_DELAY_MS);

observeThemeChanges();
