// // GridBackground.css.ts
//  import { style } from '@vanilla-extract/css';
//  import { vars } from '../../styles/theme.css.ts';
//
//  export const gridWrapper = style({
//      position: 'absolute',
//      bottom: 0,
//      left: 0,
//      right: 0,
//      height: '70%',
//      zIndex: 1,
//      pointerEvents: 'none',
//      overflow: 'hidden',
//  });
//
//  export const gridPlane = style({
//      position: 'absolute',
//      inset: 0,
//      backgroundSize: '32% 32%',        // ← tiles 4×4, making cells much smaller
//      backgroundRepeat: 'repeat',
//      backgroundPosition: 'center center',
//      transform: 'perspective(600px) rotateX(45deg) scaleX(1.8) scaleY(2.2)',
//      transformOrigin: '50% 0%',
//      maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 25%, black 60%, transparent 100%)',
//      WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 25%, black 60%, transparent 100%)',
//  });
//
//  export const gridEdgeFade = style({
//      position: 'absolute',
//      inset: 0,
//      background: `radial-gradient(ellipse 80% 60% at 50% 100%, transparent 40%, ${vars.color.bg} 75%)`,
//      pointerEvents: 'none',
//  });

import { style } from '@vanilla-extract/css';

export const gridWrapper = style({
    position: 'absolute',
    bottom: -400,
    left: -100,
    right: 40,
    height: '75%',
    zIndex: 1,
    pointerEvents: 'none',
    overflow: 'hidden',

    '@media': {
        'screen and (max-width: 1280px)': {
            bottom: -320,
            left:20,
            right:-30,
            height: '75%',
        },
        'screen and (max-width: 1024px)': {
            bottom: -240,
            left: -60,
            right: 20,
            height: '75%',
        },
        'screen and (max-width: 768px)': {
            bottom: -160,
            left: -40,
            right: 10,
            height: '55%',
        },
        'screen and (max-width: 480px)': {
            bottom: -80,
            left: -20,
            right: 5,
            height: '45%',
        },
    },
});

export const gridSvg = style({
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '220%',

    '@media': {
        'screen and (max-width: 1024px)': {
            height: '180%',
        },
        'screen and (max-width: 768px)': {
            height: '150%',
        },
        'screen and (max-width: 480px)': {
            height: '120%',
        },
    },
});

export const gridFade = style({
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, #0a0a0a 0%, transparent 25%, transparent 80%, #0a0a0a 100%)',
    pointerEvents: 'none',
});