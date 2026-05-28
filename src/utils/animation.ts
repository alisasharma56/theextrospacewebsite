/** Linear interpolation */
export const lerp = (a: number, b: number, t: number): number =>
    a + (b - a) * t;

/** Clamp value to [min, max] */
export const clamp = (val: number, min: number, max: number): number =>
    Math.min(Math.max(val, min), max);

/** Ease-in-out cubic */
export const easeInOut = (t: number): number =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

/** Ease-out quart — fast start, gentle landing */
export const easeOut = (t: number): number =>
    1 - Math.pow(1 - t, 4);

/** Ease-in cubic — slow start, fast end */
export const easeIn = (t: number): number =>
    t * t * t;

/**
 * Map global progress `t` into a 0→1 value scoped to [start, end],
 * then apply easeInOut. Values outside the range clamp to 0 or 1.
 */
export const subProgress = (
    t: number,
    start: number,
    end: number,
    easeFn: (t: number) => number = easeInOut,
): number => easeFn(clamp((t - start) / (end - start), 0, 1));