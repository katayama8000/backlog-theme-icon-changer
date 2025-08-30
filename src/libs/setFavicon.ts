export const setFavicon = (newIconUrl: string): void => {
    const existingLinks = document.querySelectorAll<HTMLLinkElement>("link[rel*='icon']");
    existingLinks.forEach(link => {
        link.remove();
    });

    const link = document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = newIconUrl;
    document.head.appendChild(link);
};