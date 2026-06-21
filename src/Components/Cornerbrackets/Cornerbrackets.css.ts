import { style, styleVariants } from '@vanilla-extract/css';

const baseBracket = style({
    position:    'absolute',
    width:       '9px',
    height:      '9px',
    aspectRatio: '1/1',
});

export const brackets = {
    topLeft:     style([baseBracket, { top: 0,    left:  0, borderTop:    '3px solid', borderLeft:   '3px solid' }]),
    topRight:    style([baseBracket, { top: 0,    right: 0, borderTop:    '3px solid', borderRight:  '3px solid' }]),
    bottomLeft:  style([baseBracket, { bottom: 0, left:  0, borderBottom: '3px solid', borderLeft:   '3px solid' }]),
    bottomRight: style([baseBracket, { bottom: 0, right: 0, borderBottom: '3px solid', borderRight:  '3px solid' }]),
};

export const bracketColors = styleVariants({
    cyan:   { borderColor: '#8FF5FF' },
    green:  { borderColor: '#8EFF71' },
    pink:   { borderColor: '#FF6B9B' },
    purple: { borderColor: '#A78BFA' },
    white:  { borderColor: 'rgba(255,255,255,0.45)' },
});