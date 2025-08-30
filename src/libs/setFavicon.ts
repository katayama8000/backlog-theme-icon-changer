export const setFavicon = (newIconUrl: string): void => {
    console.log('setFavicon: Attempting to set favicon to:', newIconUrl); // ファビコン設定開始のログ

    const existingLinks = document.querySelectorAll<HTMLLinkElement>("link[rel*='icon']");
    existingLinks.forEach(link => {
        link.remove();
        console.log('setFavicon: Removed existing favicon link.'); // 既存ファビコン削除のログ
    });

    const link = document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = newIconUrl;
    document.head.appendChild(link);
    console.log('setFavicon: New favicon link appended to head.'); // 新しいファビコン設定完了のログ
};