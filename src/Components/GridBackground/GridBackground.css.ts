// import { style } from '@vanilla-extract/css';
//
// export const gridWrapper = style({
//     position: 'absolute',
//     bottom: -400,
//     left: -100,
//     right: 40,
//     height: '75%',
//     zIndex: 1,
//     pointerEvents: 'none',
//     overflow: 'hidden',
//
//     '@media': {
//         'screen and (max-width: 1280px)': {
//             bottom: -320,
//             left:  -120,
//             height: '75%',
//         },
//         'screen and (max-width: 1024px)': {
//             bottom: -240,
//             left:   -150,
//             height: '75%',
//         },
//         'screen and (max-width: 768px)': {
//             bottom: -160,
//             left: -170,
//
//             height: '55%',
//         },
//         'screen and (max-width: 480px)': {
//             bottom: -80,
//             left: -200,
//
//             height: '45%',
//         },
//     },
// });
//
// export const gridSvg = style({
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     width: '100%',
//     height: '220%',
//
//     '@media': {
//         'screen and (max-width: 1024px)': {
//             height: '180%',
//         },
//         'screen and (max-width: 768px)': {
//             height: '150%',
//         },
//         'screen and (max-width: 480px)': {
//             height: '120%',
//         },
//     },
// });
//
// export const gridFade = style({
//     position: 'absolute',
//     inset: 0,
//     background: 'linear-gradient(to bottom, #0a0a0a 0%, transparent 25%, transparent 80%, #0a0a0a 100%)',
//     pointerEvents: 'none',
// });

// import { style } from '@vanilla-extract/css';
//
// export const gridWrapper = style({
//     position: 'absolute',
//     bottom: -400,
//     left: -100,
//     right: 40,
//     height: '75%',
//     zIndex: 1,
//     pointerEvents: 'none',
//     overflow: 'hidden',
//
//     '@media': {
//         'screen and (min-width: 1920px)': {
//             bottom: -500,
//             left: -150,
//             right: 60,
//             height: '80%',
//         },
//         'screen and (min-width: 1440px) and (max-width: 1919px)': {
//             bottom: -450,
//             left: -120,
//             right: 50,
//             height: '78%',
//         },
//         'screen and (max-width: 1280px)': {
//             bottom: -320,
//             left: -120,
//             height: '75%',
//         },
//         'screen and (max-width: 1024px)': {
//             bottom: -240,
//             left: -150,
//             height: '75%',
//         },
//         'screen and (max-width: 768px)': {
//             bottom: -160,
//             left: -170,
//             height: '55%',
//         },
//         'screen and (max-width: 480px)': {
//             bottom: -80,
//             left: -200,
//             height: '45%',
//         },
//     },
// });
//
// export const gridSvg = style({
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     width: '100%',
//     height: '220%',
//
//     '@media': {
//         'screen and (min-width: 1920px)': {
//             height: '250%',
//         },
//         'screen and (max-width: 1024px)': {
//             height: '180%',
//         },
//         'screen and (max-width: 768px)': {
//             height: '150%',
//         },
//         'screen and (max-width: 480px)': {
//             height: '120%',
//         },
//     },
// });
//
// export const gridFade = style({
//     position: 'absolute',
//     inset: 0,
//     background: 'linear-gradient(to bottom, #0a0a0a 0%, transparent 25%, transparent 80%, #0a0a0a 100%)',
//     pointerEvents: 'none',
// });

import { style } from '@vanilla-extract/css';

export const gridWrapper = style({
    position: 'absolute',
    bottom: -400,
    left: -100,
    right: 40,
    height: '75%',
    zIndex: 1,
    pointerEvents: 'none',
    overflow: 'hidden',

    '@media': {
        'screen and (max-width: 1280px)': {
            bottom: -320,
            left:  -120,
            height: '75%',
        },
        'screen and (max-width: 1024px)': {
            bottom: -240,
            left:   -150,
            height: '75%',
        },
        'screen and (max-width: 768px)': {
            bottom: -160,
            left: -170,

            height: '55%',
        },
        'screen and (max-width: 480px)': {
            bottom: -80,
            left: -200,

            height: '45%',
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
            height: '150%',
        },
        'screen and (max-width: 480px)': {
            height: '120%',
        },
    },
});

export const gridFade = style({
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, #0a0a0a 0%, transparent 25%, transparent 80%, #0a0a0a 100%)',
    pointerEvents: 'none',
});


