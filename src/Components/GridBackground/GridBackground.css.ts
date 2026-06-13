import { style } from '@vanilla-extract/css';

export const gridWrapper = style({
    // 14" laptop — perfect, don't touch
    position: 'absolute',
    bottom: -400,
    left: -300,
    right: 10,
    height: '75%',
    zIndex: 1,
    pointerEvents: 'none',
    overflow: 'hidden',

    '@media': {
        'screen and (max-width: 1280px)': {
            bottom: -320,
            left: -210,
            right: 40,
            height: '75%',
        },

        'screen and (max-width: 1024px)': {
            bottom: -1600,
            left: -200,
            right: 40,
            height: '90%',
        },

        'screen and (max-width: 768px)': {
            bottom: -1200,
            left: -300,
            right: 90,
            height: '70%',
        },
        // mobile
        'screen and (max-width: 480px)': {
            bottom: -1500,
            left: 0,
            right: 0,
            height: '75%',
        },
    },
});

export const gridSvg = style({
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '220%',

    '@media': {
        'screen and (max-width: 1024px)': {
            height: '180%',
        },
        'screen and (max-width: 768px)': {
            height: '100%',
        },
        'screen and (max-width: 480px)': {
            height: '100%',
        },
    },
});

export const gridFade = style({
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, #0a0a0a 0%, transparent 25%, transparent 80%, #0a0a0a 100%)',
    pointerEvents: 'none',
});