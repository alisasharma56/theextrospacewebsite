// import { style } from '@vanilla-extract/css';
// import { vars } from '../../styles/theme.css.ts';
//
// export const gridWrapper = style({
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     height: '52%',
//     overflow: 'hidden',
//     pointerEvents: 'none',
// });
//
// export const gridPlane = style({
//     position: 'absolute',
//     inset: 0,
//     // Perspective grid via background-image lines
//     backgroundImage: [
//         `linear-gradient(${vars.color.grid} 1px, transparent 1px)`,
//         `linear-gradient(90deg, ${vars.color.grid} 1px, transparent 1px)`,
//     ].join(', '),
//     backgroundSize: '70px 70px',
//     // Apply 3D perspective tilt
//     transform: 'perspective(500px) rotateX(55deg) scaleX(1.6)',
//     transformOrigin: '50% 0%',
//     // Fade out at top and edges
//     maskImage: [
//         'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 25%, black 60%, black 80%, transparent 100%)',
//     ].join(', '),
//     WebkitMaskImage: [
//         'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 25%, black 60%, black 80%, transparent 100%)',
//     ].join(', '),
// });
//
// // Radial fade on edges
// export const gridEdgeFade = style({
//     position: 'absolute',
//     inset: 0,
//     background: `radial-gradient(ellipse 80% 60% at 50% 100%, transparent 40%, ${vars.color.bg} 75%)`,
//     pointerEvents: 'none',
// });
import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css.ts';

export const gridWrapper = style({
    position: 'absolute',
    bottom: 0, left: 0, right: 0,
    height: '50%',
    overflow: 'hidden',
    pointerEvents: 'none',
});

export const gridPlane = style({
    position: 'absolute',
    inset: 0,
    backgroundImage: [
        `linear-gradient(${vars.color.grid} 1px, transparent 1px)`,
        `linear-gradient(90deg, ${vars.color.grid} 1px, transparent 1px)`,
    ].join(', '),
    backgroundSize: '70px 70px',
    transform: 'perspective(500px) rotateX(55deg) scaleX(1.6)',
    transformOrigin: '50% 0%',
    maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 25%, black 60%, transparent 100%)',
    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 25%, black 60%, transparent 100%)',
});

export const gridEdgeFade = style({
    position: 'absolute',
    inset: 0,
    background: `radial-gradient(ellipse 80% 60% at 50% 100%, transparent 40%, ${vars.color.bg} 75%)`,
    pointerEvents: 'none',
});