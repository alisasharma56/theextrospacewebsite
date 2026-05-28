import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css.ts';

// Exact Figma container CSS
export const flatGrid = style({
    display:        'flex',
    width:          '100%',
    maxWidth:       '1196px',
    height:         '700px',
    padding:        '167px 0',
    justifyContent: 'center',
    alignItems:     'flex-start',
    gap:            '32px',
    margin:         '0 auto',

    '@media': {
        '(max-width: 900px)': {
            flexWrap:  'wrap',
            height:    'auto',
            padding:   '60px 20px',
        },
    },
});

// Exact Figma card CSS
export const flatCard = style({
    position:             'relative',
    width:                '275px',
    height:               '366px',
    display:              'flex',
    flexDirection:        'column',
    justifyContent:       'center',
    alignItems:           'center',
    flexShrink:            0,
    background:           'rgba(255,255,255,0.05)',
    boxShadow:            '0 0 30px 1px rgba(143,245,255,0.05) inset, 0 10px 40px 0 rgba(0,0,0,0.50)',
    backdropFilter:       'blur(4px)',
    WebkitBackdropFilter: 'blur(4px)',
    overflow:             'hidden',
    cursor:               'pointer',
    // NO border
});

export const flatCardTitle = style({
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

export const flatCardDescription = style({
    fontFamily: '"Space Grotesk", sans-serif',
    fontSize:   '14px',
    lineHeight:  1.6,
    color:       vars.color.textMuted,
    maxWidth:   '220px',
    textAlign:  'center',
    margin:      0,
});