export const hexToColorInfo = (hexColor) => {
  hexColor = hexColor.replace(/^#/, ""); // Remove the '#' if present
  const r = parseInt(hexColor.substring(0, 2), 16) / 255;
  const g = parseInt(hexColor.substring(2, 4), 16) / 255;
  const b = parseInt(hexColor.substring(4, 6), 16) / 255;

  // Convert RGB to HSL
  const hsl = rgbToHsl(r, g, b);
  const hslFormatted = [hsl[0] * 360, hsl[1] * 100, hsl[2] * 100];

  // Convert RGB to HWB
  const hwb = rgbToHwb(r, g, b);
  const hwbFormatted = [hwb[0], hwb[1] * 100, hwb[2] * 100];

  // Convert RGB to CMYK
  const cmyk = rgbToCmyk(r, g, b);

  // Convert RGB to NCol (closest named color)
  const colorName = findClosestColorName(hexColor);

  return {
    name: colorName,
    rgb: [r * 255, g * 255, b * 255],
    hsl: hslFormatted,
    hwb: hwbFormatted,
    cmyk: cmyk,
  };
};

export const rgbToHsl = (r, g, b) => {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let s, h;

  if (max === min) {
    s = 0;
    h = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [h, s, l];
};

export const rgbToHwb = (r, g, b) => {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  const hsl = rgbToHsl(r, g, b);
  const l = hsl[2];
  const w = 1 - (max - l) / max;
  const bValue = 1 - min / l;

  return [hsl[0] * 360, w, bValue];
};

export const rgbToCmyk = (r, g, b) => {
  const c = 1 - r;
  const m = 1 - g;
  const y = 1 - b;
  const k = Math.min(c, m, y);

  if (k === 1) {
    return [0, 0, 0, 1];
  }

  return [(c - k) / (1 - k), (m - k) / (1 - k), (y - k) / (1 - k), k];
};

export const findClosestColorName = (hexColor) => {
  // You would need a library or data source to find the closest named color.
  // Here, we'll just return null as a placeholder.
  return null;
};
