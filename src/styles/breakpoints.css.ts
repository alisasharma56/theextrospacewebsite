export const breakpoints = {
    smallMobile:     '320px',
    largerMobile:    '480px',
    tablet:          '768px',
    tabletLandscape: '1024px',
    laptop:          '1366px',
    laptopLarge:     '1440px',
} as const;

// Media query helpers for Vanilla Extract
// Usage inside style(): '@media': { [screens.tablet]: { ... } }
export const screens = {
    smallMobile:     `screen and (min-width: 320px)`,
    largerMobile:    `screen and (min-width: 480px)`,
    tablet:          `screen and (min-width: 768px)`,
    tabletLandscape: `screen and (min-width: 1024px)`,
    laptop:          `screen and (min-width: 1366px)`,
    laptopLarge:     `screen and (min-width: 1440px)`,

    // Max-width helpers for mobile-first overrides
    belowTablet:     `screen and (max-width: 767px)`,
    belowLaptop:     `screen and (max-width: 1365px)`,
} as const;