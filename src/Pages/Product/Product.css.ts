// import { style, globalStyle } from '@vanilla-extract/css';
//
// globalStyle('body', {
//     background: '#0a0a0a !important',
//     margin:     '0 !important',
//     padding:    '0 !important',
// });
//
// export const section = style({
//     width:      '100vw',
//     minHeight:  '100vh',
//     background: '#0a0a0a',
//     padding:    '0 60px 120px',
//     boxSizing:  'border-box',
//     marginLeft: 'calc(-50vw + 50%)',
//
//     '@media': {
//         'screen and (max-width: 1024px)': { padding: '0 32px 80px' },
//         'screen and (max-width: 768px)':  { padding: '0 16px 60px' },
//     },
// });
//
// export const header = style({
//     paddingTop:   '48px',
//     marginBottom: '40px',
// });
//
// export const breadcrumb = style({
//     fontFamily:    '"Space Grotesk", sans-serif',
//     fontSize:      '11px',
//     letterSpacing: '3px',
//     marginBottom:  '12px',
//     display:       'block',
// });
//
// export const breadHome = style({
//     color:      'rgba(255,255,255,0.35)',
//     fontWeight:  400,
// });
//
// export const breadSep = style({
//     color:  'rgba(255,255,255,0.2)',
//     margin: '0 4px',
// });
//
// export const breadCurrent = style({
//     color:      'rgba(255,255,255,0.7)',
//     fontWeight:  600,
// });
//
// export const heading = style({
//     fontFamily:    '"Space Grotesk", sans-serif',
//     fontSize:      '40px',
//     fontWeight:     700,
//     color:         '#ffffff',
//     margin:         0,
//     letterSpacing: '-0.5px',
//
//     '@media': {
//         'screen and (max-width: 768px)': { fontSize: '28px' },
//     },
// });
//
// export const grid = style({
//     display:             'grid',
//     gridTemplateColumns: 'repeat(2, 1fr)',
//     gap:                 '24px',
//
//     '@media': {
//         'screen and (max-width: 640px)': { gridTemplateColumns: '1fr' },
//     },
// });
//
// export const cardWrapper = style({
//     position: 'relative',
//     width:    '100%',
//     height:   '360px',
//     cursor:   'pointer',
//
//     '@media': {
//         'screen and (max-width: 768px)': { height: '300px' },
//     },
// });
//
// export const flipInner = style({
//     width:           '100%',
//     height:          '100%',
//     position:        'relative',
//     transformStyle:  'preserve-3d',
//     transformOrigin: 'center center',
// });
//
// const baseFace = style({
//     position:                 'absolute',
//     inset:                     0,
//     background:               'rgba(255,255,255,0.04)',
//     backdropFilter:           'blur(10px) saturate(1.5) brightness(1.05)',
//     WebkitBackdropFilter:     'blur(10px) saturate(1.5) brightness(1.05)',
//     overflow:                 'hidden',
//     display:                  'flex',
//     flexDirection:            'column',
//     backfaceVisibility:       'hidden',
//     WebkitBackfaceVisibility: 'hidden',
// });
//
// export const cardFront = style([baseFace]);
// export const cardBack  = style([baseFace, {
//     transform:      'rotateY(180deg)',
//     justifyContent: 'flex-end',
//     padding:        '28px 24px 32px',
// }]);
//
// export const imageWrapper = style({
//     flex:       1,
//     overflow:   'hidden',
//     margin:     '20px 20px 0',
// });
//
// export const image = style({
//     width:     '100%',
//     height:    '100%',
//     objectFit: 'cover',
//     display:   'block',
//     background: 'rgba(255,255,255,0.06)',
// });
//
// export const info = style({
//     padding:   '14px 20px 20px',
//     flexShrink: 0,
// });
//
// export const name = style({
//     fontFamily:    '"Space Grotesk", sans-serif',
//     fontSize:      '14px',
//     fontWeight:     700,
//     letterSpacing: '1.5px',
//     textTransform: 'uppercase',
//     color:         '#ffffff',
//     margin:        '0 0 6px',
// });
//
// export const desc = style({
//     fontFamily: '"Space Grotesk", sans-serif',
//     fontSize:   '11px',
//     fontWeight:  300,
//     lineHeight:  1.6,
//     color:      'rgba(255,255,255,0.45)',
//     margin:     '0 0 10px',
// });
//
// export const tags = style({
//     display:    'flex',
//     flexWrap:   'wrap',
//     gap:        '6px',
// });
//
// export const tag = style({
//     fontFamily:    '"Space Grotesk", sans-serif',
//     fontSize:      '9px',
//     fontWeight:     500,
//     letterSpacing: '1px',
//     textTransform: 'uppercase',
//     color:         'rgba(255,255,255,0.50)',
//     border:        '1px solid rgba(255,255,255,0.15)',
//     padding:       '3px 8px',
//     borderRadius:  '2px',
// });
//
// export const backContent = style({
//     display:       'flex',
//     flexDirection: 'column',
//     gap:           '10px',
// });
//
// export const backCategory = style({
//     fontFamily:    '"Space Grotesk", sans-serif',
//     fontSize:      '10px',
//     letterSpacing: '3px',
//     textTransform: 'uppercase',
//     margin:         0,
// });
//
// export const backName = style({
//     fontFamily:    '"Space Grotesk", sans-serif',
//     fontSize:      '24px',
//     fontWeight:     700,
//     letterSpacing: '-0.3px',
//     color:         '#ffffff',
//     margin:         0,
// });
//
// export const backDesc = style({
//     fontFamily: '"Space Grotesk", sans-serif',
//     fontSize:   '12px',
//     fontWeight:  300,
//     lineHeight:  1.6,
//     color:      'rgba(255,255,255,0.50)',
//     margin:      0,
// });

import { style, globalStyle } from '@vanilla-extract/css';

globalStyle('body', {
    background: '#0a0a0a !important',
    margin:     '0 !important',
    padding:    '0 !important',
});

export const section = style({
    width:      '100vw',
    minHeight:  '100vh',
    background: '#0a0a0a',
    padding:    '0 60px 120px',
    boxSizing:  'border-box',
    marginLeft: 'calc(-50vw + 50%)',

    '@media': {
        'screen and (max-width: 1024px)': { padding: '0 32px 80px' },
        'screen and (max-width: 768px)':  { padding: '0 16px 60px' },
    },
});

export const header = style({
    paddingTop:   '48px',
    marginBottom: '40px',
    textAlign:    'center',
});

export const breadcrumb = style({
    fontFamily:    '"Space Grotesk", sans-serif',
    fontSize:      '11px',
    letterSpacing: '3px',
    marginBottom:  '12px',
    display:       'block',
});

export const breadHome = style({
    color:      'rgba(255,255,255,0.35)',
    fontWeight:  400,
});

export const breadSep = style({
    color:  'rgba(255,255,255,0.2)',
    margin: '0 4px',
});

export const breadCurrent = style({
    color:      'rgba(255,255,255,0.7)',
    fontWeight:  600,
});

export const heading = style({
    fontFamily:    '"Space Grotesk", sans-serif',
    fontSize:      '40px',
    fontWeight:     700,
    color:         '#ffffff',
    margin:         0,
    letterSpacing: '-0.5px',

    '@media': {
        'screen and (max-width: 768px)': { fontSize: '28px' },
    },
});

export const grid = style({
    display:             'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap:                 '24px',

    '@media': {
        'screen and (max-width: 640px)': { gridTemplateColumns: '1fr' },
    },
});

export const card = style({
    cursor: 'pointer',
    position:             'relative',
    width:                '100%',
    height:               '360px',
    display:              'flex',
    flexDirection:        'column',
    background:           'rgba(255,255,255,0.04)',
    backdropFilter:       'blur(10px) saturate(1.5) brightness(1.05)',
    WebkitBackdropFilter: 'blur(10px) saturate(1.5) brightness(1.05)',
    overflow:             'hidden',

    '@media': {
        'screen and (max-width: 768px)': { height: '300px' },
    },
});

export const imageWrapper = style({
    flex:     1,
    overflow: 'hidden',
    margin:   '20px 20px 0',
});

export const image = style({
    width:      '100%',
    height:     '100%',
    objectFit:  'cover',
    display:    'block',
    background: 'rgba(255,255,255,0.06)',
});

export const info = style({
    padding:   '14px 20px 20px',
    flexShrink: 0,
});

export const name = style({
    fontFamily:    '"Space Grotesk", sans-serif',
    fontSize:      '14px',
    fontWeight:     700,
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color:         '#ffffff',
    margin:        '0 0 6px',
});

export const desc = style({
    fontFamily: '"Space Grotesk", sans-serif',
    fontSize:   '11px',
    fontWeight:  300,
    lineHeight:  1.6,
    color:      'rgba(255,255,255,0.45)',
    margin:     '0 0 10px',
});

export const tags = style({
    display:  'flex',
    flexWrap: 'wrap',
    gap:      '6px',
});

export const tag = style({
    fontFamily:    '"Space Grotesk", sans-serif',
    fontSize:      '9px',
    fontWeight:     500,
    letterSpacing: '1px',
    textTransform: 'uppercase',
    color:         'rgba(255,255,255,0.50)',
    border:        '1px solid rgba(255,255,255,0.15)',
    padding:       '3px 8px',
    borderRadius:  '2px',
});