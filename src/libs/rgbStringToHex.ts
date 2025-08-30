export const rgbStringToHex = (rgbString: string): string | null => {
    const parts = rgbString.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    if (!parts) return null;

    const toHex = (c: number): string => {
        const hex = Math.max(0, Math.min(255, c)).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };

    const r = parseInt(parts[1], 10);
    const g = parseInt(parts[2], 10);
    const b = parseInt(parts[3], 10);

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};