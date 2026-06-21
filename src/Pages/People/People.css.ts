import { style } from '@vanilla-extract/css';

export const section = style({
    width:          '100vw',
    minHeight:      '100vh',
    background:     '#0a0a0a',
    padding:        '0 80px 120px',
    boxSizing:      'border-box',
    marginLeft:     'calc(-50vw + 50%)',

    '@media': {
        'screen and (max-width: 1024px)': { padding: '0 40px 80px' },
        'screen and (max-width: 768px)':  { padding: '0 20px 60px' },
    },
});

export const header = style({
    marginBottom: '60px',
    paddingTop:   '60px',
    textAlign: 'center',


});

export const breadcrumb = style({
    fontFamily:    '"Space Grotesk", sans-serif',
    fontSize:      '12px',
    letterSpacing: '3px',
    marginBottom:  '16px',
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
    color:      'rgba(255,255,255,0.8)',
    fontWeight:  600,
});

export const heading = style({
    fontFamily:    '"Space Grotesk", sans-serif',
    fontSize:      '36px',
    fontWeight:     600,
    color:         '#ffffff',
    margin:         0,
    letterSpacing: '-0.5px',

    '@media': {
        'screen and (max-width: 768px)': { fontSize: '32px' },
    },
});

export const grid = style({
    display:             'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap:                 '24px',

    '@media': {
        'screen and (max-width: 1024px)': { gridTemplateColumns: 'repeat(2, 1fr)' },
        'screen and (max-width: 480px)':  { gridTemplateColumns: '1fr' },
    },
});

// Card wrapper — same structure as isoCard in MorphingCards
export const cardWrapper = style({
    position:  'relative',
    width:     '100%',
    height:    '287px',
    cursor:    'pointer',
});

// Exact same flipInner as MorphingCards
export const flipInner = style({
    width:          '100%',
    height:         '100%',
    position:       'relative',
    transformStyle: 'preserve-3d',
    transformOrigin: 'center center',
    outline:        'none',
    border:         'none',
});

// Base face — exact same as MorphingCards baseFace
const baseFace = style({
    position:                 'absolute',
    inset:                     0,
    background:               'rgba(255,255,255,0.07)',
    backdropFilter:           'blur(10px) saturate(1.5) brightness(1.05)',
    WebkitBackdropFilter:     'blur(10px) saturate(1.5) brightness(1.05)',
    overflow:                 'hidden',
    display:                  'flex',
    flexDirection:            'column',
    backfaceVisibility:       'hidden',
    WebkitBackfaceVisibility: 'hidden',
});

export const cardFront = style([baseFace]);
export const cardBack  = style([baseFace, {
    transform:      'rotateY(180deg)',
    justifyContent: 'flex-end',
    alignItems:     'flex-start',
    padding:        '24px',
}]);

export const imageWrapper = style({
    flex:       1,
    overflow:   'hidden',
});

export const image = style({
    width:      '100%',
    height:     '100%',
    objectFit: 'cover',
    display:   'block',
});

export const info = style({
    padding:   '14px 20px 16px',
    flexShrink: 0,
    textAlign: 'center',
});

export const name = style({
    fontFamily:    '"Space Grotesk", sans-serif',
    fontSize:      '13px',
    fontWeight:     700,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color:         '#ffffff',
    margin:        '0 0 4px',
});

export const role = style({
    fontFamily:    '"Space Grotesk", sans-serif',
    fontSize:      '11px',
    fontWeight:     400,
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color:         'rgba(255,255,255,0.40)',
    margin:         0,
});

export const backContent = style({
    display:       'flex',
    flexDirection: 'column',
    gap:           '8px',
});

export const backRole = style({
    fontFamily:    '"Space Grotesk", sans-serif',
    fontSize:      '10px',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    margin:         0,
});

export const backName = style({
    fontFamily:    '"Space Grotesk", sans-serif',
    fontSize:      '20px',
    fontWeight:     700,
    letterSpacing: '-0.3px',
    color:         '#ffffff',
    margin:         0,
});