
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
    width:         '100%',
    maxWidth:      '1366px',
    height:        '1073px',
    margin:        '0 auto',
    display:       'flex',
    flexDirection: 'column',
    alignItems:    'center',
    overflow:      'hidden',
    background:     vars.color.bg,
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
});

export const titleLine = style({
    width:           '64px',
    height:          '1px',
    backgroundColor: '#8FF5FF',
    opacity:          0.3,
    flexShrink:       0,
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
});

export const cardsArea = style({
    position:       'relative',
    zIndex:          3,
    flex:            1,
    width:          '100%',
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'center',
    paddingTop:     '20px',
    paddingBottom:  '160px',
    overflow:       'visible',
});