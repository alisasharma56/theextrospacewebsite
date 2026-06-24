import { style, globalStyle } from '@vanilla-extract/css';

globalStyle('body', {
    background: '#0a0a0a !important',
    margin:     '0 !important',
    padding:    '0 !important',
});

export const page = style({
    width:      '100vw',
    minHeight:  '100vh',
    background: '#0a0a0a',
    padding:    '0 60px 80px',
    boxSizing:  'border-box',
    marginLeft: 'calc(-50vw + 50%)',

    '@media': {
        'screen and (max-width: 1024px)': { padding: '0 32px 60px' },
        'screen and (max-width: 768px)':  { padding: '0 20px 48px' },
    },
});

export const header = style({
    paddingTop:   '48px',
    marginBottom: '40px',
    textAlign:    'center',
});

export const breadcrumb = style({
    fontFamily:    '"Space Grotesk", sans-serif',
    fontSize:      '11px',
    letterSpacing: '3px',
    marginBottom:  '12px',
    display:       'block',
});

export const breadLink = style({
    color:      'rgba(255,255,255,0.35)',
    cursor:     'pointer',
    transition: 'color 0.2s',
    ':hover':   { color: 'rgba(255,255,255,0.8)' },
});

export const breadSep = style({
    color:  'rgba(255,255,255,0.2)',
    margin: '0 6px',
});

export const breadCurrent = style({
    color:      'rgba(255,255,255,0.8)',
    fontWeight:  600,
});

export const heading = style({
    fontFamily:  '"Space Grotesk", sans-serif',
    fontSize:    '40px',
    fontWeight:   700,
    color:       '#ffffff',
    margin:       0,
    letterSpacing: '-0.5px',
});

export const body = style({
    display:             'grid',
    gridTemplateColumns: '200px 1fr',
    gap:                 '60px',
    alignItems:          'flex-start',

    '@media': {
        'screen and (max-width: 768px)': { gridTemplateColumns: '1fr', gap: '32px' },
    },
});

export const sidebar = style({
    display:       'flex',
    flexDirection: 'column',
    gap:           '2px',
    position:      'sticky',
    top:           '40px',
});

export const sidebarLabel = style({
    fontFamily:    '"Space Grotesk", sans-serif',
    fontSize:      '10px',
    letterSpacing: '3px',
    color:         'rgba(255,255,255,0.30)',
    marginBottom:  '10px',
    textTransform: 'uppercase',
});

export const projectBtn = style({
    background:    'transparent',
    border:        'none',
    outline:       'none',
    textAlign:     'left',
    fontFamily:    '"Space Grotesk", sans-serif',
    fontSize:      '12px',
    fontWeight:     500,
    letterSpacing: '1px',
    color:         'rgba(255,255,255,0.45)',
    padding:       '10px 12px',
    cursor:        'pointer',
    transition:    'color 0.2s, background 0.2s',
    ':hover':      { color: 'rgba(255,255,255,0.85)' },
});

export const projectBtnActive = style({
    fontWeight: 700,
});

export const detail = style({
    display:       'flex',
    flexDirection: 'column',
});

// ── Empty state ───────────────────────────────────────────────────────────────
export const emptyState = style({
    display:       'flex',
    flexDirection: 'column',
    gap:           '20px',
});

export const thumbnail = style({
    position:       'relative',
    width:          '72px',
    height:         '72px',
    background:     'rgba(255,255,255,0.04)',
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'center',
    overflow:       'hidden',
    flexShrink:      0,
});

export const thumbPlaceholder = style({
    fontSize: '22px',
    color:    'rgba(255,255,255,0.20)',
});

export const noSelection = style({
    fontFamily:    '"Space Grotesk", sans-serif',
    fontSize:      '16px',
    fontWeight:     700,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color:         '#ffffff',
    margin:         0,
});

// ── Selected project ──────────────────────────────────────────────────────────
export const projectDetail = style({
    display:       'flex',
    flexDirection: 'column',
    gap:           '16px',
});

export const projectName = style({
    fontFamily:    '"Space Grotesk", sans-serif',
    fontSize:      '22px',
    fontWeight:     700,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color:         '#ffffff',
    margin:         0,
});

export const tags = style({
    display:  'flex',
    flexWrap: 'wrap',
    gap:      '6px',
});

export const tag = style({
    fontFamily:    '"Space Grotesk", sans-serif',
    fontSize:      '9px',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color:         'rgba(255,255,255,0.55)',
    border:        '1px solid rgba(255,255,255,0.18)',
    padding:       '3px 10px',
    borderRadius:  '2px',
});

export const liveBtn = style({
    display:       'block',
    width:         'fit-content',
    fontFamily:    '"Space Grotesk", sans-serif',
    fontSize:      '11px',
    fontWeight:     600,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color:         '#ffffff',
    background:    'rgba(255,255,255,0.06)',
    border:        '1px solid rgba(255,255,255,0.18)',
    padding:       '10px 24px',
    textDecoration: 'none',
    cursor:        'pointer',
    transition:    'background 0.2s',
    ':hover':      { background: 'rgba(255,255,255,0.12)' },
});

export const sections = style({
    display:       'flex',
    flexDirection: 'column',
    gap:           '40px',
    marginTop:     '8px',
});

export const section = style({
    display:       'flex',
    flexDirection: 'column',
    gap:           '10px',
});

export const sectionTitle = style({
    fontFamily:    '"Space Grotesk", sans-serif',
    fontSize:      '13px',
    fontWeight:     700,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color:         '#ffffff',
    margin:         0,
});

export const detailText = style({
    fontFamily: '"Space Grotesk", sans-serif',
    fontSize:   '12px',
    fontWeight:  300,
    lineHeight:  1.8,
    color:      'rgba(255,255,255,0.55)',
    margin:      0,
});

export const sectionImage = style({
    width:       '100%',
    aspectRatio: '16 / 9',
    background:  'rgba(255,255,255,0.06)',
    overflow:    'hidden',
    marginTop:   '4px',
});

export const sectionImg = style({
    width:     '100%',
    height:    '100%',
    objectFit: 'cover',
    display:   'block',
});