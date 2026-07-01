import { style, globalStyle } from '@vanilla-extract/css';

// ── Kill white borders/backgrounds from page and library ─────────────────────
globalStyle('body', {
    margin:     '0 !important',
    padding:    '0 !important',
    background: '#0a0a0a !important',
});

// ── Library overrides ─────────────────────────────────────────────────────────
globalStyle('.vertical-timeline', {
    background: 'transparent !important',
    width:      '100% !important',
    maxWidth:   '800px !important',
    padding:    '0 !important',
    margin:     '0 auto !important',
});

globalStyle('.vertical-timeline::before', {
    width:      '1px !important',
    background: 'rgba(255,255,255,0.10) !important',
});

globalStyle('.vertical-timeline-element-content', {
    background:   'transparent !important',
    boxShadow:    'none !important',
    borderRadius: '0 !important',
    padding:      '0 24px 40px !important',
});

globalStyle('.vertical-timeline-element-content-arrow', {
    display: 'none !important',
});

globalStyle('.vertical-timeline-element-icon', {
    border: 'none !important',
});

globalStyle('.vertical-timeline-element', {
    margin: '0 !important',
});

// ── Component styles ──────────────────────────────────────────────────────────
export const section = style({
    width:          '100vw',
    minHeight:      '100vh',
    background:     '#0a0a0a',
    padding:        '80px 0 120px',
    display:        'flex',
    flexDirection:  'column',
    alignItems:     'center',
    marginLeft:     'calc(-50vw + 50%)',
    boxSizing:      'border-box',
});

export const eyebrow = style({
    fontFamily:    '"Space Grotesk", sans-serif',
    fontSize:      '11px',
    fontWeight:     400,
    letterSpacing: '6px',
    textTransform: 'uppercase',
    color:         '#8FF5FF',
    opacity:        0.6,
    marginBottom:  '12px',
    textAlign:     'center',
});

export const heading = style({
    fontFamily:    '"Asap Condensed", sans-serif',
    fontSize:      '36px',
    fontWeight:     400,
    letterSpacing: '4px',
    textTransform: 'uppercase',
    color:         '#ffffff',
    textAlign:     'center',
    margin:        '0 0 60px',

    '@media': {
        'screen and (max-width: 768px)': { fontSize: '24px', letterSpacing: '2px' },
    },
});

export const number = style({
    fontFamily:    '"Space Grotesk", sans-serif',
    fontSize:      '11px',
    fontWeight:     400,
    letterSpacing: '3px',
    margin:        '0 0 4px',
    display:       'flex',
    alignItems:    'center',
    flexWrap:      'nowrap',
    gap:           '6px',
    whiteSpace:    'nowrap',
});

export const title = style({
    fontFamily:    '"Space Grotesk", sans-serif',
    fontWeight:     700,
    fontSize:      '20px',
    lineHeight:    '100%',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    color:         '#ffffff',
    margin:        '0 0 14px',
});

export const desc = style({
    fontFamily: '"Space Grotesk", sans-serif',
    fontSize:   '12px',
    fontWeight:  300,
    lineHeight:  1.7,
    color:      'rgba(255,255,255,0.45)',
    margin:      0,
});

export const breadcrumb = style({
    fontFamily:    '"Space Grotesk", sans-serif',
    fontSize:      '11px',
    letterSpacing: '3px',
    marginBottom:  '8px',
    display:       'block',
});

export const breadHome = style({
    color:      'rgba(255,255,255,0.35)',
    fontWeight:  400,
    cursor:     'pointer',
    transition: 'color 0.2s',
    ':hover':   { color: 'rgba(255,255,255,0.8)' },
});

export const intro = style({
    fontFamily:  '"Space Grotesk", sans-serif',
    fontSize:    '14px',
    fontWeight:   300,
    lineHeight:   1.8,
    color:       'rgba(255,255,255,0.50)',
    maxWidth:    '600px',
    textAlign:   'center',
    margin:      '0 auto 48px',

    '@media': {
        'screen and (max-width: 768px)': { fontSize: '13px' },
    },
});

export const sub = style({
    fontFamily:    '"Space Grotesk", sans-serif',
    fontSize:      '10px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    margin:        '2px 0 6px',
    opacity:        0.9,
});

export const titleInline = style({
    fontFamily:    '"Space Grotesk", sans-serif',
    fontWeight:     700,
    fontSize:      '24px',
    lineHeight:    '100%',
    letterSpacing: '0',
    textTransform: 'uppercase',
    color:         '#ffffff',
});

export const numberLine = style({
    fontFamily:    '"Space Grotesk", sans-serif',
    fontSize:      '13px',
    fontWeight:     500,
    letterSpacing: '3px',
    textTransform: 'uppercase',
    margin:        '0 0 8px',
    display:       'block',
});