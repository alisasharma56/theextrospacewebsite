//
// import { style, globalStyle, keyframes } from '@vanilla-extract/css';
// import { vars } from '../../styles/theme.css.ts';
//
// globalStyle('*, *::before, *::after', {
//     boxSizing: 'border-box', margin: 0, padding: 0, border: 'none', outline: 'none',
// });
// globalStyle('html, body, #root', {
//     background: vars.color.bg, color: vars.color.text,
//     overflowX: 'hidden', width: '100%', minHeight: '100vh',
// });
//
// const fadeDown = keyframes({
//     from: { opacity: 0, transform: 'translateY(-12px)' },
//     to:   { opacity: 1, transform: 'translateY(0)' },
// });
// const fadeUp = keyframes({
//     from: { opacity: 0, transform: 'translateY(10px)' },
//     to:   { opacity: 1, transform: 'translateY(0)' },
// });
//
// //
// export const heroWrapper = style({
//     position:      'relative',
//     width:         '100%',
//     maxWidth:      '100%',         // ← was 1366px, now full width
//     margin:        '0 auto',
//     display:       'flex',
//     flexDirection: 'column',
//     alignItems:    'center',
//     overflow:      'hidden',
//     background:    vars.color.bg,
//     height:        '1073px',
//
//     '@media': {
//         'screen and (min-width: 1920px)': {
//             height: '1080px',
//         },
//         'screen and (min-width: 1440px) and (max-width: 1919px)': {
//             height: '1073px',
//         },
//         'screen and (min-width: 1280px) and (max-width: 1439px)': {
//             height: '900px',
//         },
//         'screen and (min-width: 1024px) and (max-width: 1279px)': {
//             height: '800px',
//         },
//         'screen and (min-width: 768px) and (max-width: 1023px)': {
//             height: '700px',
//         },
//         'screen and (min-width: 480px) and (max-width: 767px)': {
//             height: '600px',
//         },
//         'screen and (max-width: 479px)': {
//             height: '580px',
//         },
//     },
// });
//
// export const headerBlock = style({
//     position:       'relative',
//     zIndex:          3,
//     display:        'flex',
//     flexDirection:  'column',
//     justifyContent: 'center',
//     alignItems:     'center',
//     textAlign:      'center',
//     paddingTop:     '56px',
//     width:          '100%',
//     flexShrink:      0,
// });
//
// export const meetLabel = style({
//     fontFamily:    '"Space Grotesk", sans-serif',
//     fontSize:      '12px',
//     fontWeight:     400,
//     lineHeight:    '18px',
//     letterSpacing: '6px',
//     textTransform: 'uppercase',
//     color:         '#8FF5FF',
//     textAlign:     'center',
//     display:       'block',
//     marginBottom:  '12px',
//     animation:     `${fadeDown} 0.7s cubic-bezier(0.22,1,0.36,1) both`,
// });
//
// export const titleRow = style({
//     display:        'flex',
//     justifyContent: 'center',
//     alignItems:     'center',
//     gap:            '32px',
//     alignSelf:      'stretch',
//     width:          '100%',
//     animation:      `${fadeDown} 0.75s cubic-bezier(0.22,1,0.36,1) both`,
//     animationDelay: '0.07s',
// });
//
// export const titleLine = style({
//     width:           '64px',
//     height:          '1px',
//     backgroundColor: '#8FF5FF',
//     opacity:          0.3,
//     flexShrink:       0,
// });
//
// export const mainTitle = style({
//     fontFamily:    '"Asap Condensed", sans-serif',
//     fontSize:      '72px',
//     fontStyle:     'normal',
//     fontWeight:     400,
//     lineHeight:    '108px',
//     letterSpacing: '7.2px',
//     textTransform: 'uppercase',
//     color:          vars.color.text,
//     textAlign:     'center',
//     margin:         0,
// });
//
// export const tagline = style({
//     fontFamily:    '"Space Grotesk", sans-serif',
//     fontSize:      '12px',
//     fontWeight:     300,
//     lineHeight:    '18px',
//     letterSpacing: '6px',
//     textTransform: 'uppercase',
//     color:         '#8FF5FF',
//     opacity:        0.45,
//     textAlign:     'center',
//     display:       'block',
//     marginTop:     '14px',
//     animation:     `${fadeUp} 0.7s cubic-bezier(0.22,1,0.36,1) both`,
//     animationDelay: '0.15s',
// });
//
// export const cardsArea = style({
//     position:       'relative',
//     zIndex:          2,             // ← below headerBlock (3) but above grid (1)
//     flex:            1,
//     width:          '100%',
//     display:        'flex',
//     alignItems:     'center',
//     justifyContent: 'center',
//     paddingTop:     '20px',
//     paddingBottom:  '160px',
//     overflow:       'visible',
// });

import { style, globalStyle, keyframes } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css.ts';

globalStyle('*, *::before, *::after', {
    boxSizing: 'border-box', margin: 0, padding: 0, border: 'none', outline: 'none',
});
globalStyle('html, body, #root', {
    background: vars.color.bg, color: vars.color.text,
    overflowX: 'clip', width: '100%', minHeight: '100vh',
});

const fadeDown = keyframes({
    from: { opacity: 0, transform: 'translateY(-12px)' },
    to:   { opacity: 1, transform: 'translateY(0)' },
});
const fadeUp = keyframes({
    from: { opacity: 0, transform: 'translateY(10px)' },
    to:   { opacity: 1, transform: 'translateY(0)' },
});

export const heroWrapper = style({
    position:      'relative',
    width:         '100%',
    maxWidth:      '100%',
    margin:        '0 auto',
    display:       'flex',
    flexDirection: 'column',
    alignItems:    'center',
    overflow:      'visible',
    background:    vars.color.bg,
   // height:        '1073px',

    '@media': {
        'screen and (min-width: 1920px)': { height: '120svh' },
        'screen and (min-width: 1440px) and (max-width: 1919px)': { height: '100svh' },
        'screen and (min-width: 1280px) and (max-width: 1439px)': { height: '100svh' },
        'screen and (min-width: 1024px) and (max-width: 1279px)': { height: '100svh' },
        'screen and (max-width: 1023px)': { height: '100svh', minHeight: '100svh' },
    },
});

export const headerBlock = style({
    position:       'relative',
    zIndex:          3,
    display:        'flex',
    flexDirection:  'column',
    justifyContent: 'center',
    alignItems:     'center',
    textAlign:      'center',
    paddingTop:     '56px',
    width:          '100%',
    flexShrink:      0,

    '@media': {
        'screen and (max-width: 768px)': { paddingTop: '36px' },
        'screen and (max-width: 480px)': { paddingTop: '24px' },
    },
});

export const meetLabel = style({
    fontFamily:    '"Space Grotesk", sans-serif',
    fontSize:      '12px',
    fontWeight:     400,
    lineHeight:    '18px',
    letterSpacing: '6px',
    textTransform: 'uppercase',
    color:         '#8FF5FF',
    textAlign:     'center',
    display:       'block',
    marginBottom:  '12px',
    animation:     `${fadeDown} 0.7s cubic-bezier(0.22,1,0.36,1) both`,

    '@media': {
        'screen and (max-width: 1023px)': { fontSize: '10px', letterSpacing: '4px' },
        'screen and (max-width: 480px)':  { fontSize: '9px',  letterSpacing: '3px', marginBottom: '8px' },
    },
});

export const titleRow = style({
    display:        'flex',
    justifyContent: 'center',
    alignItems:     'center',
    gap:            '32px',
    alignSelf:      'stretch',
    width:          '100%',
    animation:      `${fadeDown} 0.75s cubic-bezier(0.22,1,0.36,1) both`,
    animationDelay: '0.07s',

    '@media': {
        'screen and (max-width: 1023px)': { gap: '16px' },
        'screen and (max-width: 480px)':  { gap: '10px' },
    },
});

export const titleLine = style({
    width:           '64px',
    height:          '1px',
    backgroundColor: '#8FF5FF',
    opacity:          0.3,
    flexShrink:       0,

    '@media': {
        'screen and (max-width: 1023px)': { width: '32px' },
        'screen and (max-width: 480px)':  { width: '20px' },
    },
});

export const mainTitle = style({
    fontFamily:    '"Asap Condensed", sans-serif',
    fontSize:      '72px',
    fontStyle:     'normal',
    fontWeight:     400,
    lineHeight:    '108px',
    letterSpacing: '7.2px',
    textTransform: 'uppercase',
    color:          vars.color.text,
    textAlign:     'center',
    margin:         0,

    '@media': {
        'screen and (min-width: 1024px) and (max-width: 1279px)': { fontSize: '60px', lineHeight: '88px' },
        'screen and (min-width: 768px) and (max-width: 1023px)':  { fontSize: '42px', lineHeight: '60px', letterSpacing: '5px' },
        'screen and (min-width: 480px) and (max-width: 767px)':   { fontSize: '32px', lineHeight: '46px', letterSpacing: '4px' },
        'screen and (max-width: 479px)':                          { fontSize: '26px', lineHeight: '38px', letterSpacing: '3px' },
    },
});

export const tagline = style({
    fontFamily:    '"Space Grotesk", sans-serif',
    fontSize:      '12px',
    fontWeight:     300,
    lineHeight:    '18px',
    letterSpacing: '6px',
    textTransform: 'uppercase',
    color:         '#8FF5FF',
    opacity:        0.45,
    textAlign:     'center',
    display:       'block',
    marginTop:     '14px',
    animation:     `${fadeUp} 0.7s cubic-bezier(0.22,1,0.36,1) both`,
    animationDelay: '0.15s',

    '@media': {
        'screen and (max-width: 1023px)': { fontSize: '10px', letterSpacing: '4px', marginTop: '10px' },
        'screen and (max-width: 480px)':  { fontSize: '9px',  letterSpacing: '3px', marginTop: '8px'  },
    },
});

export const cardsArea = style({
    position:       'relative',
    zIndex:          2,
    flex:            1,
    width:          '100%',
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'center',
    paddingTop:     '20px',
    paddingBottom:  '160px',
    overflow:       'visible',


});

