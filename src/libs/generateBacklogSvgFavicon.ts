export const generateSvgFavicon = (color: string): string => {
    const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" rx="15" ry="15" fill="${color}"/>
    <text x="50" y="70" text-anchor="middle" font-size="60" font-weight="bold" fill="white">b</text>
  </svg>`;

    const encodedSvg = encodeURIComponent(svgString);
    return `data:image/svg+xml,${encodedSvg}`;
};