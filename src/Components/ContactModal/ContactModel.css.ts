import { style } from '@vanilla-extract/css';

export const overlay = style({
    position:        'fixed',
    inset:            0,
    background:      'rgba(0,0,0,0.70)',
    backdropFilter:  'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)',
    display:         'flex',
    alignItems:      'center',
    justifyContent:  'center',
    zIndex:           100,
    padding:         '24px',
});

export const modal = style({
    position:       'relative',
    width:          '100%',
    maxWidth:       '520px',
    background:     'rgba(18,18,18,0.92)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    padding:        '48px 40px 40px',
    boxSizing:      'border-box',

    '@media': {
        'screen and (max-width: 480px)': { padding: '40px 24px 32px' },
    },
});

export const closeBtn = style({
    position:   'absolute',
    top:        '30px',
    right:      '30px',
    background: 'transparent',
    border:     'none',
    color:      'rgba(255,255,255,0.50)',
    fontSize:   '18px',
    cursor:     'pointer',
    lineHeight:  1,
    padding:    '4px',
    transition: 'color 0.2s',
    ':hover':   { color: '#ffffff' },
});

export const title = style({
    fontFamily:    '"Space Grotesk", sans-serif',
    fontSize:      '24px',
    fontWeight:     600,
    letterSpacing: '3px',
    textTransform: 'uppercase',
    color:         '#FFFFFFE5',
    textAlign:     'center',
    margin:        '0 0 8px',
});

export const subtitle = style({
    fontFamily:    '"Space Grotesk", sans-serif',
    fontSize:      '12px',
    fontWeight:     300,
    letterSpacing: '5px',
    textTransform: 'uppercase',
    color:         '#8E95A2',
    textAlign:     'center',
    margin:        '0 0 36px',
});

export const form = style({
    display:       'flex',
    flexDirection: 'column',
    gap:           '20px',
});

export const field = style({
    display:       'flex',
    flexDirection: 'column',
    gap:           '8px',
});

export const label = style({
    fontFamily:  '"Asap Condensed", sans-serif',
    fontSize:      '14px',
    fontWeight:     400,
    color:         'rgba(255,255,255,0.60)',
    letterSpacing: '0.5px',
});

export const input = style({
    background:   'rgba(255,255,255,0.05)',
    border:       '1px solid rgba(255,255,255,0.10)',
    outline:      'none',
    color:        '#ffffff',
    fontFamily:  '"Asap Condensed", sans-serif',
    fontSize:     '14px',
    padding:      '14px 16px',
    width:        '100%',
    boxSizing:    'border-box',
    transition:   'border-color 0.2s',

    '::placeholder': { color: 'rgba(255,255,255,0.25)' },
    ':focus':        { borderColor: 'rgba(255,255,255,0.30)' },
});

export const textarea = style({
    background:   'rgba(255,255,255,0.05)',
    border:       '1px solid rgba(255,255,255,0.10)',
    outline:      'none',
    color:        '#ffffff',
    fontFamily:  '"Asap Condensed", sans-serif',
    fontSize:     '14px',
    padding:      '14px 16px',
    width:        '100%',
    boxSizing:    'border-box',
    minHeight:    '130px',
    resize:       'vertical',
    transition:   'border-color 0.2s',

    '::placeholder': { color: 'rgba(255,255,255,0.25)' },
    ':focus':        { borderColor: 'rgba(255,255,255,0.30)' },
});

export const submitBtn = style({
    display:       'block',
    width:         'fit-content',
    margin:        '0 auto 48px',
    fontFamily:    '"Space Grotesk", sans-serif',
    fontSize:      '14px',
    fontWeight:     700,
    textTransform: 'uppercase',
    color:         '#25272C',
    background:    '#F7F8F8',
    border:        '1px solid rgba(255,255,255,0.20)',
    padding:       '12px 32px',
    textDecoration: 'none',
    cursor:        'pointer',
});