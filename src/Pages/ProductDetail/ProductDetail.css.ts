import { style, globalStyle } from '@vanilla-extract/css';

globalStyle('body', {
    background: '#0a0a0a !important',
    margin:     '0 !important',
    padding:    '0 !important',
});

export const page = style({
    width:      '100%',
    maxWidth:   '680px',
    margin:     '0 auto',
    padding:    '40px 24px 120px',
    background: '#0a0a0a',
    minHeight:  '100vh',
    boxSizing:  'border-box',
});

export const breadcrumb = style({
    fontFamily:    '"Space Grotesk", sans-serif',
    fontSize:      '11px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    marginBottom:  '20px',
    display:       'block',
});

export const breadLink = style({
    color:      'rgba(255,255,255,0.40)',
    cursor:     'pointer',
    transition: 'color 0.2s',
    ':hover':   { color: 'rgba(255,255,255,0.8)' },
});

export const breadSep = style({
    color:  'rgba(255,255,255,0.2)',
    margin: '0 6px',
});

export const breadCurrent = style({
    color:      'rgba(255,255,255,0.80)',
    fontWeight:  600,
});

export const title = style({
    fontFamily:    '"Space Grotesk", sans-serif',
    fontSize:      '32px',
    fontWeight:     700,
    letterSpacing: '3px',
    textTransform: 'uppercase',
    color:         '#ffffff',
    margin:        '0 0 16px',
    textAlign:     'center',
});

export const tags = style({
    display:        'flex',
    justifyContent: 'center',
    gap:            '8px',
    marginBottom:   '24px',
});

export const tag = style({
    fontFamily:    '"Space Grotesk", sans-serif',
    fontSize:      '12px',
    fontWeight:     300,
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    color:         'rgba(255,255,255,0.60)',
    background:    '#25272C',
    border:        '1px solid #40444C',
    padding:       '3px 8px',
    height:        '24px',
    display:       'flex',
    alignItems:    'center',
    boxSizing:     'border-box',
    gap:           '10px',
});
export const liveBtn = style({
    display:       'block',
    width:         'fit-content',
    margin:        '0 auto 48px',
    fontFamily:    '"Space Grotesk", sans-serif',
    fontSize:      '14px',
    fontWeight:     700,
    textTransform: 'uppercase',
    color:         '#25272C',
    background:    '#F7F8F8',
    border:        '1px solid rgba(255,255,255,0.20)',
    padding:       '12px 32px',
    textDecoration: 'none',
    cursor:        'pointer',


});

export const sections = style({
    display:       'flex',
    flexDirection: 'column',
    gap:           '48px',
});

export const section = style({
    display:       'flex',
    flexDirection: 'column',
    gap:           '12px',
});

export const sectionTitle = style({
    fontFamily:    '"Space Grotesk", sans-serif',
    fontSize:      '20px',
    fontWeight:     600,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color:         '#ffffff',
    margin:         0,
});

// export const sectionText = style({
//     fontFamily: '"Space Grotesk", sans-serif',
//     fontSize:   '13px',
//     fontWeight:  300,
//     lineHeight:  1.8,
//     color:      'rgba(255,255,255,0.55)',
//     margin:      0,
// });
export const  sectionText = style({
    // fontFamily: '"Space Grotesk", sans-serif',
    fontFamily:  '"Asap Condensed", sans-serif',
    fontSize:   '12px',
    fontWeight:  400,
    lineHeight:  '24px',
    color:      '#8E95A2',
    margin:      0,
});


export const sectionImage = style({
    width:        '100%',
    aspectRatio:  '16 / 9',
    background:   'rgba(255,255,255,0.06)',
    overflow:     'hidden',
    marginTop:    '8px',
});

export const img = style({
    width:     '100%',
    height:    '100%',
    objectFit: 'cover',
    display:   'block',
});