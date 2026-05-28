// import { style, styleVariants } from '@vanilla-extract/css';
//
// const baseBracket = style({
//     position: 'absolute',
//     width:    '12px',
//     height:   '12px',
// });
//
// export const brackets = {
//     topLeft: style([baseBracket, {
//         top: 0, left: 0,
//         borderTop:  '1.5px solid',
//         borderLeft: '1.5px solid',
//     }]),
//     topRight: style([baseBracket, {
//         top: 0, right: 0,
//         borderTop:   '1.5px solid',
//         borderRight: '1.5px solid',
//     }]),
//     bottomLeft: style([baseBracket, {
//         bottom: 0, left: 0,
//         borderBottom: '1.5px solid',
//         borderLeft:   '1.5px solid',
//     }]),
//     bottomRight: style([baseBracket, {
//         bottom: 0, right: 0,
//         borderBottom: '1.5px solid',
//         borderRight:  '1.5px solid',
//     }]),
// };
//
// // Exact brand colours from spec
// export const bracketColors = styleVariants({
//     green:  { borderColor: '#8EFF71' },
//     cyan:   { borderColor: '#8FF5FF' },
//     purple: { borderColor: '#A78BFA' },
//     pink:   { borderColor: '#FF6B9B' },
// });
//Coenerbarckets.css
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
});