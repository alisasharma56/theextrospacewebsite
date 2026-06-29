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
//     textAlign:    'center',
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
// export const card = style({
//     cursor: 'pointer',
//     position:             'relative',
//     width:                '100%',
//     height:               '360px',
//     display:              'flex',
//     flexDirection:        'column',
//     background:           'rgba(255,255,255,0.04)',
//     backdropFilter:       'blur(10px) saturate(1.5) brightness(1.05)',
//     WebkitBackdropFilter: 'blur(10px) saturate(1.5) brightness(1.05)',
//     overflow:             'hidden',
//
//     '@media': {
//         'screen and (max-width: 768px)': { height: '300px' },
//     },
// });
//
// export const imageWrapper = style({
//     flex:     1,
//     overflow: 'hidden',
//     margin:   '20px 20px 0',
// });
//
// export const image = style({
//     width:      '100%',
//     height:     '100%',
//     objectFit:  'cover',
//     display:    'block',
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
//     display:  'flex',
//     flexWrap: 'wrap',
//     gap:      '6px',
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
    marginBottom: '32px',
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
    cursor:     'pointer',
    transition: 'color 0.2s',
    ':hover':   { color: 'rgba(255,255,255,0.8)' },
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
    fontSize:      '36px',
    fontWeight:     700,
    color:         '#ffffff',
    margin:         0,
    letterSpacing: '-0.5px',

    '@media': {
        'screen and (max-width: 768px)': { fontSize: '26px' },
    },
});

// 2-column grid matching screenshot
export const grid = style({
    display:             'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap:                 '24px',

    '@media': {
        'screen and (max-width: 640px)': { gridTemplateColumns: '1fr' },
    },
});

export const card = style({
    position:             'relative',
    width:                '100%',
    display:              'flex',
    flexDirection:        'column',
    background:           'rgba(255,255,255,0.04)',
    backdropFilter:       'blur(10px) saturate(1.5) brightness(1.05)',
    WebkitBackdropFilter: 'blur(10px) saturate(1.5) brightness(1.05)',
    overflow:             'hidden',
    cursor:               'pointer',
    transition:           'background 0.2s',
    ':hover':             { background: 'rgba(255,255,255,0.07)' },
});

export const imageWrapper = style({
    width:       '100%',
    aspectRatio: '16 / 9',
    overflow:    'hidden',
    background:  'rgba(255,255,255,0.04)',
    flexShrink:   0,
});

export const image = style({
    width:     '100%',
    height:    '100%',
    objectFit: 'cover',
    display:   'block',
});

export const info = style({
    padding: '20px 20px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap:     '8px',
});

export const name = style({
    fontFamily:    '"Space Grotesk", sans-serif',
    fontSize:      '14px',
    fontWeight:     700,
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color:         '#ffffff',
    margin:         0,
});

export const desc = style({
    fontFamily: '"Space Grotesk", sans-serif',
    fontSize:   '11px',
    fontWeight:  300,
    lineHeight:  1.6,
    color:      'rgba(255,255,255,0.45)',
    margin:      0,
});

export const tags = style({
    display:   'flex',
    flexWrap:  'wrap',
    gap:       '6px',
    marginTop: '4px',
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

export const tagline = style({
    fontFamily: '"Space Grotesk", sans-serif',
    fontSize:   '12px',
    fontStyle:  'italic',
    color:      'rgba(255,255,255,0.55)',
    margin:      0,
});

export const intro = style({
    fontFamily:  '"Space Grotesk", sans-serif',
    fontSize:    '13px',
    lineHeight:   1.7,
    color:       'rgba(255,255,255,0.45)',
    textAlign:   'center',
    maxWidth:    '500px',
    margin:      '0 auto 32px',
});

export const eyebrow = style({
    fontFamily:    '"Space Grotesk", sans-serif',
    fontSize:      '11px',
    letterSpacing: '5px',
    textTransform: 'uppercase',
    color:         '#8FF5FF',
    opacity:        0.6,
    marginBottom:  '8px',
});