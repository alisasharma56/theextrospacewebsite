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
// export const heroWrapper = style({
//     position:      'relative',
//     minHeight:     '100vh',
//     display:       'flex',
//     flexDirection: 'column',
//     alignItems:    'center',
//     // clip horizontal scroll but allow 3D stack to overflow vertically
//     overflowX:     'hidden',
//     overflowY:     'visible',
//     background:     vars.color.bg,
// });
//
// export const headerBlock = style({
//     position:  'relative',
//     zIndex:     2,
//     textAlign: 'center',
//     paddingTop: '44px',
//     width:      '100%',
//     flexShrink:  0,
// });
//
// export const meetLabel = style({
//     fontFamily:     vars.font.mono,
//     fontSize:       '10px',
//     letterSpacing:  '0.44em',
//     textTransform:  'uppercase',
//     color:          'rgba(255,255,255,0.28)',
//     marginBottom:   '10px',
//     display:        'block',
//     animation:      `${fadeDown} 0.7s cubic-bezier(0.22,1,0.36,1) both`,
// });
//
// export const mainTitle = style({
//     fontFamily:     vars.font.display,
//     fontWeight:      900,
//     fontSize:       'clamp(30px, 3.8vw, 58px)',
//     lineHeight:      1,
//     letterSpacing:  '0.015em',
//     textTransform:  'uppercase',
//     color:           vars.color.text,
//     display:        'block',
//     animation:      `${fadeDown} 0.75s cubic-bezier(0.22,1,0.36,1) both`,
//     animationDelay: '0.07s',
// });
//
// export const tagline = style({
//     fontFamily:     vars.font.mono,
//     fontSize:       '9px',
//     letterSpacing:  '0.34em',
//     textTransform:  'uppercase',
//     color:          '#8FF5FF',
//     opacity:         0.55,
//     marginTop:      '10px',
//     display:        'block',
//     animation:      `${fadeUp} 0.7s cubic-bezier(0.22,1,0.36,1) both`,
//     animationDelay: '0.15s',
// });
//
// export const cardsArea = style({
//     position:       'relative',
//     zIndex:          2,
//     flex:            1,
//     width:          '100%',
//     display:        'flex',
//     alignItems:     'center',
//     justifyContent: 'center',
//     paddingTop:     '20px',
//     paddingBottom:  '40px',
//     // overflow MUST be visible — rotateX(52deg) shifts the 3D stack
//     // outside its CSS box, overflow:hidden clips it making it invisible
//     overflow:       'visible',
// });
import { style, globalStyle, keyframes } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css.ts';

globalStyle('*, *::before, *::after', {
    boxSizing: 'border-box', margin: 0, padding: 0, border: 'none', outline: 'none',
});
globalStyle('html, body, #root', {
    background: vars.color.bg, color: vars.color.text,
    overflowX: 'hidden', width: '100%', minHeight: '100vh',
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
    minHeight:     '100vh',
    display:       'flex',
    flexDirection: 'column',
    alignItems:    'center',
    overflowX:     'hidden',
    overflowY:     'visible',
    background:     vars.color.bg,
});

export const headerBlock = style({
    position:       'relative',
    zIndex:          2,
    display:        'flex',
    flexDirection:  'column',
    justifyContent: 'center',
    alignItems:     'center',
    textAlign:      'center',
    paddingTop:     '56px',
    width:          '100%',
    flexShrink:      0,
});

// MEET and THE FUTURE IS HERE
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
});

// Title row: line — THEEXTROSPACE — line
export const titleRow = style({
    display:        'flex',
    justifyContent: 'center',
    alignItems:     'center',
    gap:            '32px',
    alignSelf:      'stretch',
    width:          '100%',
    animation:      `${fadeDown} 0.75s cubic-bezier(0.22,1,0.36,1) both`,
    animationDelay: '0.07s',
});

// The two side lines
export const titleLine = style({
    width:           '64px',
    height:          '1px',
    backgroundColor: '#8FF5FF',
    opacity:          0.3,
    flexShrink:       0,
});

// THEEXTROSPACE
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
});

// THE FUTURE IS HERE
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
});

export const cardsArea = style({
    position:       'relative',
    zIndex:          2,
    flex:            1,
    width:          '100%',
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'center',
    paddingTop:     '130px',
    paddingBottom:  '40px',
    overflow:       'visible',
});