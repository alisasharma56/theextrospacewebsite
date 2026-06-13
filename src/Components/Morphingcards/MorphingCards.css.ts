// import { style } from '@vanilla-extract/css';
// import { vars } from '../../styles/theme.css.ts';
// import { screens } from '../../styles/breakpoints.css.ts';
//
// export const sceneWrapper = style({
//     display:        'flex',
//     alignItems:     'center',
//     justifyContent: 'center',
//     width:          '100%',
//     minHeight:      '300px',
//     position:       'relative',
//     overflow:       'visible',
// });
//
// export const isoScene = style({
//     position:       'relative',
//     width:          '275px',
//     height:         '366px',
//     display:        'flex',
//     alignItems:     'center',
//     justifyContent: 'center',
//     transformStyle: 'preserve-3d',
//     marginTop:      '-350px',
//
//     '@media': {
//         [screens.belowTablet]: { marginTop: '-80px', transform: 'scale(0.8)', transformOrigin: 'center center' },
//     },
// });
//
// export const fanScene = style({
//     position:       'relative',
//     width:          '100%',
//     height:         '366px',
//     display:        'flex',
//     alignItems:     'center',
//     justifyContent: 'center',
//     gap:            '32px',
//     transformStyle: 'preserve-3d',
//
//     '@media': {
//         [screens.belowLaptop]: { gap: '16px' },
//         [screens.belowTablet]: { gap: '8px', transform: 'scale(0.75)', transformOrigin: 'center center' },
//     },
// });
//
// export const isoCard = style({
//     position:   'absolute',
//     width:      '275px',
//     height:     '366px',
//     display:    'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexShrink:  0,
//     willChange: 'transform, opacity',
// });
//
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
// export const isoLabel = style({
//     fontFamily:    '"Space Grotesk", sans-serif',
//     fontWeight:     700,
//     fontSize:      '40px',
//     lineHeight:    'normal',
//     letterSpacing: '-0.9px',
//     textTransform: 'uppercase',
//     color:         'rgba(255,255,255,0.90)',
//     position:      'relative',
//     zIndex:         2,
//
//     '@media': {
//         [screens.belowTablet]: { fontSize: '28px' },
//     },
// });
//
// export const spreadRow = style({
//     display: 'flex', flexDirection: 'row',
//     alignItems: 'center', justifyContent: 'center',
//     width: '100%', gap: '20px', padding: '0 40px',
// });
//
// export const spreadSlot = style({
//     position: 'relative', width: '275px', height: '366px',
//     display: 'flex', flexDirection: 'column',
//     justifyContent: 'center', alignItems: 'center', flexShrink: 0,
// });
//
// export const flipInner = style({
//     width: '100%', height: '100%', position: 'relative',
//     transformStyle: 'preserve-3d', transformOrigin: 'center center',
// });
//
// const baseFace = style({
//     position: 'absolute', inset: 0,
//     background: 'rgba(255,255,255,0.05)',
//     boxShadow: '0 0 30px 1px rgba(143,245,255,0.05) inset, 0 10px 40px 0 rgba(0,0,0,0.50)',
//     backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)',
//     overflow: 'hidden', display: 'flex', flexDirection: 'column',
//     justifyContent: 'center', alignItems: 'center',
//     backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
// });
//
// export const cardFront = style([baseFace]);
// export const cardBack  = style([baseFace, { transform: 'rotateY(180deg)', justifyContent: 'flex-end', alignItems: 'flex-start' }]);
//
// export const frontContent = style({
//     display: 'flex', flexDirection: 'column',
//     justifyContent: 'center', alignItems: 'center',
//     textAlign: 'center', width: '100%', padding: '0 24px',
// });
//
// export const frontLabel = style({
//     fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700,
//     fontSize: '40px', lineHeight: 'normal', letterSpacing: '-0.9px',
//     textTransform: 'uppercase', color: 'rgba(255,255,255,0.90)',
//     textAlign: 'center', margin: 0,
//
//     '@media': {
//         [screens.belowTablet]: { fontSize: '28px' },
//     },
// });
//
// export const backContent = style({
//     display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
//     height: '100%', padding: '28px 24px 32px', gap: '14px', width: '100%',
// });
//
// export const backCategory = style({
//     fontFamily: '"Space Grotesk", sans-serif',
//     fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase',
// });
//
// export const backDetail = style({
//     fontWeight: 700, fontSize: 'clamp(15px, 1.6vw, 20px)',
//     lineHeight: 1.35, color: '#ffffff', margin: 0,
// });
//
// export const backStat = style({
//     fontFamily: vars.font.display, fontWeight: 900,
//     fontSize: 'clamp(32px, 3.5vw, 48px)', lineHeight: 1,
//     display: 'flex', flexDirection: 'column', gap: '4px',
// });
//
// export const backStatLabel = style({
//     fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase',
//     color: 'rgba(255,255,255,0.38)', fontWeight: 400,
// });

// import { style } from '@vanilla-extract/css';
// import { vars } from '../../styles/theme.css.ts';
// import { screens } from '../../styles/breakpoints.css.ts';
//
// export const sceneWrapper = style({
//     display:        'flex',
//     alignItems:     'center',
//     justifyContent: 'center',
//     width:          '100%',
//     minHeight:      '300px',
//     position:       'relative',
//     overflow:       'visible',
// });
//
// export const isoScene = style({
//     position:       'relative',
//     width:          '275px',
//     height:         '366px',
//     display:        'flex',
//     alignItems:     'center',
//     justifyContent: 'center',
//     transformStyle: 'preserve-3d',
//     marginTop:      '-350px',
//
//     '@media': {
//         [screens.belowTablet]: { marginTop: '-80px', transform: 'scale(0.8)', transformOrigin: 'center center' },
//     },
// });
//
// export const fanScene = style({
//     position:       'relative',
//     width:          '100%',
//     height:         '366px',
//     display:        'flex',
//     alignItems:     'center',
//     justifyContent: 'center',
//     gap:            '32px',
//     transformStyle: 'preserve-3d',
//
//     '@media': {
//         [screens.belowLaptop]: { gap: '16px' },
//         [screens.belowTablet]: { gap: '8px', transform: 'scale(0.75)', transformOrigin: 'center center' },
//     },
// });
//
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
// export const cardGlass = style({
//     position:             'absolute',
//     inset:                 0,
//     // Darker, richer base so the frosted glass reads strongly
//     background:           'rgba(18, 18, 18, 0.60)',
//     boxShadow:            [
//         // subtle 1px border
//         '0 0 40px 2px rgba(143,245,255,0.06) inset',  // inner glow
//         '0 20px 60px 0 rgba(0,0,0,0.70)',              // deep drop shadow
//     ].join(', '),
//     backdropFilter:       'blur(120px) saturate(2)',
//     WebkitBackdropFilter: 'blur(120px) saturate(2)',
//     display:              'flex',
//     flexDirection:        'column',
//     justifyContent:       'center',
//     alignItems:           'center',
//     padding:              '24px',
//     overflow:             'hidden',
// });
//
// export const isoLabel = style({
//     fontFamily:    '"Space Grotesk", sans-serif',
//     fontWeight:     700,
//     fontSize:      '40px',
//     lineHeight:    'normal',
//     letterSpacing: '-0.9px',
//     textTransform: 'uppercase',
//     color:         'rgba(255,255,255,0.90)',
//     position:      'relative',
//     zIndex:         2,
//
//     '@media': {
//         [screens.belowTablet]: { fontSize: '28px' },
//     },
// });
//
// export const spreadRow = style({
//     display: 'flex', flexDirection: 'row',
//     alignItems: 'center', justifyContent: 'center',
//     width: '100%', gap: '20px', padding: '0 40px',
// });
//
// export const spreadSlot = style({
//     position: 'relative', width: '275px', height: '366px',
//     display: 'flex', flexDirection: 'column',
//     justifyContent: 'center', alignItems: 'center', flexShrink: 0,
// });
//
// export const flipInner = style({
//     width: '100%', height: '100%', position: 'relative',
//     transformStyle: 'preserve-3d', transformOrigin: 'center center',
// });
//
// const baseFace = style({
//     position:             'absolute',
//     inset:                 0,
//     // Matches the reference: very dark frosted glass, almost opaque
//     background:           'rgba(18, 18, 18, 0.60)',
//     boxShadow:            [
//
//         '0 0 40px 2px rgba(143,245,255,0.06) inset',
//         '0 20px 60px 0 rgba(0,0,0,0.70)',
//     ].join(', '),
//     backdropFilter:       'blur(120px) saturate(2)',
//     WebkitBackdropFilter: 'blur(120px) saturate(2)',
//     overflow:             'hidden',
//     display:              'flex',
//     flexDirection:        'column',
//     justifyContent:       'center',
//     alignItems:           'center',
//     backfaceVisibility:         'hidden',
//     WebkitBackfaceVisibility:   'hidden',
// });
//
// export const cardFront = style([baseFace]);
// export const cardBack  = style([baseFace, { transform: 'rotateY(180deg)', justifyContent: 'flex-end', alignItems: 'flex-start' }]);
//
// export const frontContent = style({
//     display:        'flex',
//     flexDirection:  'column',
//     justifyContent: 'center',
//     alignItems:     'center',
//     textAlign:      'center',
//     width:          '100%',
//     padding:        '0 24px',
// });
//
// export const frontLabel = style({
//     fontFamily:    '"Space Grotesk", sans-serif',
//     fontWeight:     700,
//     fontSize:      '40px',
//     lineHeight:    'normal',
//     letterSpacing: '-0.9px',
//     textTransform: 'uppercase',
//     color:         'rgba(255,255,255,0.90)',
//     textAlign:     'center',
//     margin:         0,
//
//     '@media': {
//         [screens.belowTablet]: { fontSize: '28px' },
//     },
// });
//
// export const backContent = style({
//     display:        'flex',
//     flexDirection:  'column',
//     justifyContent: 'flex-end',
//     height:         '100%',
//     padding:        '28px 24px 32px',
//     gap:            '14px',
//     width:          '100%',
// });
//
// export const backCategory = style({
//     fontFamily:    '"Space Grotesk", sans-serif',
//     fontSize:      '10px',
//     letterSpacing: '0.35em',
//     textTransform: 'uppercase',
// });
//
// export const backDetail = style({
//     fontWeight: 700,
//     fontSize:   'clamp(15px, 1.6vw, 20px)',
//     lineHeight:  1.35,
//     color:      '#ffffff',
//     margin:      0,
// });
//
// export const backStat = style({
//     fontFamily:  vars.font.display,
//     fontWeight:  900,
//     fontSize:   'clamp(32px, 3.5vw, 48px)',
//     lineHeight:  1,
//     display:    'flex',
//     flexDirection: 'column',
//     gap:        '4px',
// });
//
// export const backStatLabel = style({
//     fontSize:      '9px',
//     letterSpacing: '0.2em',
//     textTransform: 'uppercase',
//     color:         'rgba(255,255,255,0.38)',
//     fontWeight:     400,
// });


import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css.ts';
import { screens } from '../../styles/breakpoints.css.ts';

export const sceneWrapper = style({
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'center',
    width:          '100%',
    minHeight:      '300px',
    position:       'relative',
    overflow:       'visible',
    background:     'transparent',


});

export const isoScene = style({
    position:       'relative',
    width:          '275px',
    height:         '366px',
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'center',
    transformStyle: 'preserve-3d',
    marginTop:      '-350px',

    '@media': {
        [screens.belowTablet]: { marginTop: '-80px', transform: 'scale(0.8)', transformOrigin: 'center center' },
    },
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

    '@media': {
        [screens.belowLaptop]: {
            transform:       'scale(0.82)',
            transformOrigin: 'center center',
        },
    },
});

// Vertical layout for mobile — taller container, centred
export const fanSceneVertical = style({
    position:       'relative',
    width:          '100%',
    height:         '100%',
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'center',
    transformStyle: 'preserve-3d',
    background:     'transparent',
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

export const cardGlass = style({
    position:             'absolute',
    inset:                 0,
    background:           'rgba(255,255,255,0.07)',
    boxShadow:            '0 0 30px 1px rgba(143,245,255,0.05) inset, 0 10px 40px 0 rgba(0,0,0,0.50)',
    backdropFilter:       'blur(32px) brightness(0.85)',
    WebkitBackdropFilter: 'blur(32px) brightness(0.85)',
    display:              'flex',
    flexDirection:        'column',
    justifyContent:       'center',
    alignItems:           'center',
    padding:              '24px',
    overflow:             'hidden',
});

export const isoLabel = style({
    fontFamily:    '"Space Grotesk", sans-serif',
    fontWeight:     700,
    fontSize:      '40px',
    lineHeight:    'normal',
    letterSpacing: '-0.9px',
    textTransform: 'uppercase',
    color:         'rgba(255,255,255,0.90)',
    position:      'relative',
    zIndex:         2,

    '@media': {
        [screens.belowTablet]: { fontSize: '28px' },
    },
});

export const spreadRow = style({
    display: 'flex', flexDirection: 'row',
    alignItems: 'center', justifyContent: 'center',
    width: '100%', gap: '20px', padding: '0 40px',
});

export const spreadSlot = style({
    position: 'relative', width: '275px', height: '366px',
    display: 'flex', flexDirection: 'column',
    justifyContent: 'center', alignItems: 'center', flexShrink: 0,
});

export const flipInner = style({
    width: '100%', height: '100%', position: 'relative',
    transformStyle: 'preserve-3d', transformOrigin: 'center center',
});

const baseFace = style({
    position:                 'absolute',
    inset:                     0,
    background:               'rgba(255,255,255,0.07)',
    boxShadow:                '0 0 30px 1px rgba(143,245,255,0.05) inset, 0 10px 40px 0 rgba(0,0,0,0.50)',
    backdropFilter:           'blur(32px) brightness(0.85)',
    WebkitBackdropFilter:     'blur(32px) brightness(0.85)',
    overflow:                 'hidden',
    display:                  'flex',
    flexDirection:            'column',
    justifyContent:           'center',
    alignItems:               'center',
    backfaceVisibility:       'hidden',
    WebkitBackfaceVisibility: 'hidden',
});

export const cardFront = style([baseFace]);
export const cardBack  = style([baseFace, { transform: 'rotateY(180deg)', justifyContent: 'flex-end', alignItems: 'flex-start' }]);

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
    lineHeight:    'normal',
    letterSpacing: '-0.9px',
    textTransform: 'uppercase',
    color:         'rgba(255,255,255,0.90)',
    textAlign:     'center',
    margin:         0,

    '@media': {
        [screens.belowTablet]: { fontSize: '28px' },
    },
});

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
    fontWeight: 700,
    fontSize:   'clamp(15px, 1.6vw, 20px)',
    lineHeight:  1.35,
    color:      '#ffffff',
    margin:      0,
});

export const backStat = style({
    fontFamily:    vars.font.display,
    fontWeight:    900,
    fontSize:     'clamp(32px, 3.5vw, 48px)',
    lineHeight:    1,
    display:      'flex',
    flexDirection: 'column',
    gap:          '4px',
});

export const backStatLabel = style({
    fontSize:      '9px',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color:         'rgba(255,255,255,0.38)',
    fontWeight:     400,
});