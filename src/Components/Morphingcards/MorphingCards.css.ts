// import { style,  } from '@vanilla-extract/css';
// import { vars } from '../../styles/theme.css.ts';
//
//
//
// // ── Scene wrapper ─────────────────────────────────────────────────────────────
// export const sceneWrapper = style({
//     display:        'flex',
//     alignItems:     'center',
//     justifyContent: 'center',
//     width:          '100%',
//     minHeight:      '520px',
//     position:       'relative',
//     overflow:       'visible',
// });
//
// // ── ISO 3D scene container ────────────────────────────────────────────────────
// export const isoScene = style({
//     position:       'relative',
//     width:          '275px',
//     height:         '366px',
//     display:        'flex',
//     alignItems:     'center',
//     justifyContent: 'center',
//     transformStyle: 'preserve-3d',
// });
//
// // ── Fan scene — full width so cards spread from screen centre ─────────────────
// export const fanScene = style({
//     position:       'relative',
//     width:          '100%',
//     height:         '366px',
//     display:        'flex',
//     alignItems:     'center',
//     justifyContent: 'center',
//     gap:            '20px',
//     transformStyle: 'preserve-3d',
// });
//
// // ── Each card in the stack / spread ──────────────────────────────────────────
// export const isoCard = style({
//     position:       'absolute',
//     width:          '275px',
//     height:         '366px',
//     display:        'flex',
//     flexDirection:  'column',
//     justifyContent: 'center',
//     alignItems:     'center',
//     flexShrink:      0,
//     willChange:     'transform, opacity',
// });
//
// // ── Glass card surface — exact Figma CSS ─────────────────────────────────────
// export const cardGlass = style({
//     position:             'absolute',
//     inset:                 0,
//     background:           'rgba(255,255,255,0.05)',
//     boxShadow:            '0 0 30px 1px rgba(143,245,255,0.05) inset, 0 10px 40px 0 rgba(0,0,0,0.50)',
//     backdropFilter:       'blur(4px)',
//     WebkitBackdropFilter: 'blur(4px)',
//     display:              'flex',
//     flexDirection:        'column',
//     justifyContent:       'center',
//     alignItems:           'center',
//     padding:              '24px',
//     overflow:             'hidden',
// });
//
// // ── Stacked label — exact Figma CSS ──────────────────────────────────────────
// export const isoLabel = style({
//     fontFamily:    '"Space Grotesk", sans-serif',
//     fontWeight:     700,
//     fontSize:      '40px',
//     fontStyle:     'normal',
//     lineHeight:    'normal',
//     letterSpacing: '-0.9px',
//     textTransform: 'uppercase',
//     color:         'rgba(255,255,255,0.90)',
//     position:      'relative',
//     zIndex:         2,
//     // filter (blur) applied inline per card
// });
//
// // ── Spread row ────────────────────────────────────────────────────────────────
// export const spreadRow = style({
//     display:        'flex',
//     flexDirection:  'row',
//     alignItems:     'center',
//     justifyContent: 'center',
//     width:          '100%',
//     gap:            '20px',
//     padding:        '0 40px',
// });
//
// export const spreadSlot = style({
//     position:       'relative',
//     width:          '275px',
//     height:         '366px',
//     display:        'flex',
//     flexDirection:  'column',
//     justifyContent: 'center',
//     alignItems:     'center',
//     flexShrink:      0,
// });
//
// // ── Flip container ────────────────────────────────────────────────────────────
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
//     background:               '#0c0c0c',
//     overflow:                 'hidden',
//     display:                  'flex',
//     flexDirection:            'column',
//     backfaceVisibility:       'hidden',
//     WebkitBackfaceVisibility: 'hidden',
// });
//
// export const cardFront = style([baseFace]);
// export const cardBack  = style([baseFace, { transform: 'rotateY(180deg)' }]);
//
// // ── Front face ────────────────────────────────────────────────────────────────
// export const frontContent = style({
//     position: 'absolute',
//     bottom: 0, left: 0, right: 0,
//     padding: '24px',
// });
//
// export const frontLabel = style({
//     fontFamily:    vars.font.display,
//     fontWeight:     800,
//     fontSize:      'clamp(20px, 2.2vw, 34px)',
//     letterSpacing: '0.04em',
//     textTransform: 'uppercase',
//     color:         '#ffffff',
//     lineHeight:     1,
//     margin:         0,
// });
//
// // ── Back face ─────────────────────────────────────────────────────────────────
// export const backContent = style({
//     display:        'flex',
//     flexDirection:  'column',
//     justifyContent: 'flex-end',
//     height:         '100%',
//     padding:        '28px 24px 32px',
//     gap:            '14px',
// });
//
// export const backCategory = style({
//     fontFamily:    vars.font.mono,
//     fontSize:      '10px',
//     letterSpacing: '0.35em',
//     textTransform: 'uppercase',
// });
//
// export const backDetail = style({
//     fontFamily: vars.font.display,
//     fontWeight:  700,
//     fontSize:   'clamp(15px, 1.6vw, 20px)',
//     lineHeight:  1.35,
//     color:      '#ffffff',
//     margin:      0,
// });
//
// export const backStat = style({
//     fontFamily:    vars.font.display,
//     fontWeight:     900,
//     fontSize:      'clamp(32px, 3.5vw, 48px)',
//     lineHeight:     1,
//     display:       'flex',
//     flexDirection: 'column',
//     gap:           '4px',
// });
//
// export const backStatLabel = style({
//     fontFamily:    vars.font.mono,
//     fontSize:      '9px',
//     letterSpacing: '0.2em',
//     textTransform: 'uppercase',
//     color:         'rgba(255,255,255,0.38)',
//     fontWeight:     400,
// });
//
// export const cardNoise = style({
//     position:        'absolute',
//     inset:            0,
//     backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
//     backgroundSize:  '160px 160px',
//     opacity:          0.03,
//     pointerEvents:   'none',
//     mixBlendMode:    'overlay',
//     zIndex:           0,
// });

import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css.ts';

export const sceneWrapper = style({
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'center',
    width:          '100%',
    minHeight:      '300px',
    position:       'relative',
    overflow:       'visible',
});

export const isoScene = style({
    position:       'relative',
    width:          '275px',
    height:         '366px',
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'center',
    transformStyle: 'preserve-3d',
    marginTop:      '-150px',
});

export const fanScene = style({
    position:       'relative',
    width:          '100%',
    height:         '366px',
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'center',
    gap:            '32px',
    transformStyle: 'preserve-3d',
});

export const isoCard = style({
    position:       'absolute',
    width:          '275px',
    height:         '366px',
    display:        'flex',
    flexDirection:  'column',
    justifyContent: 'center',
    alignItems:     'center',
    flexShrink:      0,
    willChange:     'transform, opacity',
});

// Stacked card glass — exact Figma CSS, NO border
export const cardGlass = style({
    position:             'absolute',
    inset:                 0,
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
    // NO border
});

export const isoLabel = style({
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

export const spreadRow = style({
    display:        'flex',
    flexDirection:  'row',
    alignItems:     'center',
    justifyContent: 'center',
    width:          '100%',
    gap:            '20px',
    padding:        '0 40px',
});

export const spreadSlot = style({
    position:       'relative',
    width:          '275px',
    height:         '366px',
    display:        'flex',
    flexDirection:  'column',
    justifyContent: 'center',
    alignItems:     'center',
    flexShrink:      0,
});

export const flipInner = style({
    width:           '100%',
    height:          '100%',
    position:        'relative',
    transformStyle:  'preserve-3d',
    transformOrigin: 'center center',
});

const baseFace = style({
    position:                 'absolute',
    inset:                     0,
    background:               'rgba(255,255,255,0.05)',
    boxShadow:                '0 0 30px 1px rgba(143,245,255,0.05) inset, 0 10px 40px 0 rgba(0,0,0,0.50)',
    backdropFilter:           'blur(4px)',
    WebkitBackdropFilter:     'blur(4px)',
    overflow:                 'hidden',
    display:                  'flex',
    flexDirection:            'column',
    // Centre content
    justifyContent:           'center',
    alignItems:               'center',
    backfaceVisibility:       'hidden',
    WebkitBackfaceVisibility: 'hidden',
    // NO border
});

export const cardFront = style([baseFace]);
export const cardBack  = style([baseFace, {
    transform: 'rotateY(180deg)',
    // back face has different layout — content at bottom
    justifyContent: 'flex-end',
    alignItems:     'flex-start',
}]);

// Front — text centred in middle
export const frontContent = style({
    display:        'flex',
    flexDirection:  'column',
    justifyContent: 'center',
    alignItems:     'center',
    textAlign:      'center',
    width:          '100%',
    padding:        '0 24px',
});

export const frontLabel = style({
    fontFamily:    '"Space Grotesk", sans-serif',
    fontWeight:     700,
    fontSize:      '40px',
    fontStyle:     'normal',
    lineHeight:    'normal',
    letterSpacing: '-0.9px',
    textTransform: 'uppercase',
    color:         'rgba(255,255,255,0.90)',
    textAlign:     'center',
    margin:         0,
});

// Back face
export const backContent = style({
    display:        'flex',
    flexDirection:  'column',
    justifyContent: 'flex-end',
    height:         '100%',
    padding:        '28px 24px 32px',
    gap:            '14px',
    width:          '100%',
});

export const backCategory = style({
    fontFamily:    '"Space Grotesk", sans-serif',
    fontSize:      '10px',
    letterSpacing: '0.35em',
    textTransform: 'uppercase',
});

export const backDetail = style({
    fontWeight:  700,
    fontSize:   'clamp(15px, 1.6vw, 20px)',
    lineHeight:  1.35,
    color:      '#ffffff',
    margin:      0,
});

export const backStat = style({
    fontFamily:    vars.font.display,
    fontWeight:     900,
    fontSize:      'clamp(32px, 3.5vw, 48px)',
    lineHeight:     1,
    display:       'flex',
    flexDirection: 'column',
    gap:           '4px',
});

export const backStatLabel = style({
    // fontFamily:    vars.font.mono,
    fontSize:      '9px',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color:         'rgba(255,255,255,0.38)',
    fontWeight:     400,
});