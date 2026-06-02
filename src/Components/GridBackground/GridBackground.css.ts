// GridBackground.css.ts
 import { style } from '@vanilla-extract/css';
 import { vars } from '../../styles/theme.css.ts';

 export const gridWrapper = style({
     position: 'absolute',
     bottom: 0,
     left: 0,
     right: 0,
     height: '70%',
     zIndex: 1,
     pointerEvents: 'none',
     overflow: 'hidden',
 });

 export const gridPlane = style({
     position: 'absolute',
     inset: 0,
     backgroundSize: '32% 32%',        // ← tiles 4×4, making cells much smaller
     backgroundRepeat: 'repeat',
     backgroundPosition: 'center center',
     transform: 'perspective(600px) rotateX(45deg) scaleX(1.8) scaleY(2.2)',
     transformOrigin: '50% 0%',
     maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 25%, black 60%, transparent 100%)',
     WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 25%, black 60%, transparent 100%)',
 });

 export const gridEdgeFade = style({
     position: 'absolute',
     inset: 0,
     background: `radial-gradient(ellipse 80% 60% at 50% 100%, transparent 40%, ${vars.color.bg} 75%)`,
     pointerEvents: 'none',
 });
