// //stackedCards.css
//
// import { style } from '@vanilla-extract/css';
// import { vars } from '../../styles/theme.css.ts';
//
// export const stackContainer = style({
//     position:       'relative',
//     width:          '275px',
//     height:         '460px',
//     margin:         '0 auto',
//     transformStyle: 'preserve-3d',
//     transform:      'perspective(1400px) rotateX(68deg) rotateZ(28deg)',
// });
//
// export const stackCard = style({
//     position:             'absolute',
//     left:                  0,
//     right:                 0,
//     width:                '275px',
//     height:               '366px',
//     background:           'rgba(255,255,255,0.05)',
//     border:               `1px solid ${vars.color.border}`,
//     backdropFilter:       'blur(10px)',
//     WebkitBackdropFilter: 'blur(10px)',
//     display:              'flex',
//     alignItems:           'center',
//     justifyContent:       'center',
//     overflow:             'hidden',
//     boxShadow:            '0 0 30px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)',
// });
//
// export const stackCardLabel = style({
//     fontFamily:    vars.font.display,
//     fontWeight:     800,
//     fontSize:      '22px',
//     letterSpacing: '0.12em',
//     textTransform: 'uppercase',
//     color:          vars.color.text,
//     position:      'relative',
//     zIndex:         2,
// });
//
// export const layerOpacities = [1, 0.7, 0.48, 0.3] as const;

import { style } from '@vanilla-extract/css';

export const stackContainer = style({
    position:       'relative',
    width:          '275px',
    height:         '420px',
    margin:         '0 auto',
    // Pull the stack up so it sits closer to the header
    marginTop:      '-120px',
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'center',
    transformStyle: 'preserve-3d',
    transform:      'perspective(2200px) rotateX(72deg) rotateZ(-36deg)',
});

export const stackCard = style({
    position:             'absolute',
    width:                '275px',
    height:               '366px',
    background:           'rgba(255,255,255,0.05)',
    boxShadow:            '0 0 30px 1px rgba(143,245,255,0.05) inset, 0 10px 40px 0 rgba(0,0,0,0.50)',
    backdropFilter:       'blur(4px)',
    WebkitBackdropFilter: 'blur(4px)',
    display:              'flex',
    flexDirection:        'column',
    justifyContent:       'center',
    alignItems:           'center',
    padding:              '24px',
    overflow:             'hidden',
    transformStyle:       'preserve-3d',
});

export const stackCardLabel = style({
    fontFamily:    '"Space Grotesk", sans-serif',
    fontWeight:     700,
    fontSize:      '40px',
    fontStyle:     'normal',
    lineHeight:    'normal',
    letterSpacing: '-0.9px',
    textTransform: 'uppercase',
    color:         'rgba(255,255,255,0.90)',
    position:      'relative',
    zIndex:         2,
});

export const layerOpacities = [1, 0.72, 0.5, 0.3] as const;