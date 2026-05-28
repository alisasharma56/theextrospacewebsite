import { style } from '@vanilla-extract/css';
export const headline = style({
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 900,
    fontSize: 'clamp(48px, 10vw, 120px)',
    letterSpacing: '-0.02em',
    color: '#ffffff',
    textTransform: 'uppercase',
});

export const tagline = style({
    fontFamily: "'Space Mono', monospace",
    letterSpacing: '0.3em',
    fontSize: '12px',
    color: '#00e5cc',
    textTransform: 'uppercase',
});