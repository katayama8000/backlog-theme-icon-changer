type ThemeConfig = {
  [key: string]: string;
};

const themeIcons: ThemeConfig = {
  'light': chrome.runtime.getURL('icons/light-icon.png'),
  'dark': chrome.runtime.getURL('icons/dark-icon.png'),
};

const setFavicon = (theme: string): void => {
  const link = document.querySelector<HTMLLinkElement>("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/png';
  link.rel = 'icon';
  link.href = themeIcons[theme];
  document.head.appendChild(link);
};

const observeTheme = (): void => {
  const body = document.body;
  const observer = new MutationObserver((mutations: MutationRecord[]) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class') {
        if (body.classList.contains('theme-light')) {
          setFavicon('light');
        } else if (body.classList.contains('theme-dark')) {
          setFavicon('dark');
        }
      }
    });
  });
  observer.observe(body, { attributes: true });

  if (body.classList.contains('theme-light')) {
    setFavicon('light');
  } else if (body.classList.contains('theme-dark')) {
    setFavicon('dark');
  }
};

observeTheme();