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
    padding:    '0 84px 120px',
    boxSizing:  'border-box',
    marginLeft: 'calc(-50vw + 50%)',

    '@media': {
        'screen and (max-width: 1024px)': { padding: '0 32px 80px' },
        'screen and (max-width: 768px)':  { padding: '0 16px 60px' },
    },
});

export const header = style({
    paddingTop:   '48px',
    marginBottom: '44px',  // gap: 44px from spec
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
});

// Full component: width 1197, gap 44px
export const grid = style({
    display:             'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap:                 '32px',   // gap between cards: 32px
    maxWidth:            '1197px',
    margin:              '0 auto',

    '@media': {
        'screen and (max-width: 640px)': { gridTemplateColumns: '1fr' },
    },
});

// Card: width 582.5, height 423, padding 24px, gap 24px
export const card = style({
    position:             'relative',
    width:                '100%',
    height:               '423px',
    display:              'flex',
    flexDirection:        'column',
    gap:                  '24px',
    padding:              '24px',
    boxSizing:            'border-box',
    // background: #FFFFFF0D
    background:           'rgba(255,255,255,0.05)',
    // box-shadow spec
    boxShadow:            '0px 10px 40px 0px rgba(0,0,0,0.50), 0px 0px 30px 1px rgba(143,245,255,0.05) inset',
    backdropFilter:       'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    cursor:               'pointer',
    overflow:             'hidden',
    transition:           'background 0.2s',
    ':hover':             { background: 'rgba(255,255,255,0.08)' },

    '@media': {
        'screen and (max-width: 768px)': { height: 'auto', minHeight: '320px' },
    },
});

export const imageWrapper = style({
    flex:       1,
    overflow:   'hidden',
    background: 'rgba(255,255,255,0.04)',
    minHeight:  '0',
});

export const image = style({
    width:     '100%',
    height:    '100%',
    objectFit: 'cover',
    display:   'block',
});

export const info = style({
    flexShrink: 0,
    display:    'flex',
    flexDirection: 'column',
    gap:        '8px',
});

// Title: Space Grotesk 700, 24px, uppercase
export const name = style({
    fontFamily:    '"Space Grotesk", sans-serif',
    fontWeight:     600,
    fontSize:      '24px',
    lineHeight:    '100%',
    letterSpacing: '0px',
    textTransform: 'uppercase',
    color:         '#ffffff',
    margin:         0,
});

// Paragraph: Asap Condensed 400, 16px, 24px line-height
// export const desc = style({
//     fontFamily:    '"Space Grotesk", sans-serif',
//     fontWeight:   300,
//     fontSize:    '14px',
//     lineHeight:  '24px',
//     letterSpacing: '0',
//     color:       '#8E95A2',
//     margin:       0,
// });
export const desc = style({
    // fontFamily: '"Space Grotesk", sans-serif',
    fontFamily:  '"Asap Condensed", sans-serif',
    fontSize:   '12px',
    fontWeight:  400,
    lineHeight:  '24px',
    color:      '#8E95A2',
    margin:      0,
});



export const tags = style({
    display:   'flex',
    flexWrap:  'wrap',
    gap:       '10px',
    marginTop: '4px',
});

// Button: width 59, height 24, padding 3 8, border 1px #40444C, bg #25272C
export const tag = style({
    fontFamily:    '"Space Grotesk", sans-serif',
    fontSize:      '14px',
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

export const eyebrow = style({
    fontFamily:    '"Space Grotesk", sans-serif',
    fontSize:      '11px',
    letterSpacing: '5px',
    textTransform: 'uppercase',
    color:         '#8FF5FF',
    opacity:        0.6,
    marginBottom:  '8px',
});

export const intro = style({
    fontFamily:    '"Space Grotesk", sans-serif',
    fontSize:    '16px',
    lineHeight:  '24px',
    color:       '#8E95A2',
    textAlign:   'center',
    maxWidth:    '500px',
    margin:      '0 auto 32px',
});

export const tagline = style({
    fontFamily:  '"Asap Condensed", sans-serif',
    fontSize:    '14px',
    color:       '#FFFFFFE5',
    fontWeight:   500,
    margin:       0,
});