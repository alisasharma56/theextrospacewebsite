// import { createGlobalTheme } from '@vanilla-extract/css';
//
// export const vars = createGlobalTheme(':root', {
//     color: {
//         bg:          '#060606',
//         surface:     '#111111',
//         border:      'rgba(255,255,255,0.06)',
//         text:        '#ffffff',
//         textMuted:   'rgba(255,255,255,0.4)',
//         accent:      '#8FF5FF',
//         // Brand palette
//         green:       '#8EFF71',
//         cyan:        '#8FF5FF',
//         purple:      '#A78BFA',
//         pink:        '#FF6B9B',
//     },
//     font: {
//         display: "'Barlow Condensed', sans-serif",
//         mono:    "'Space Mono', monospace",
//         body:    "'Barlow', sans-serif",
//     },
//     space: {
//         xs:  '4px',
//         sm:  '8px',
//         md:  '16px',
//         lg:  '24px',
//         xl:  '48px',
//         xxl: '96px',
//     },
// });

import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
    color: {
        bg:        '#060606',
        surface:   '#111111',
        border:    'rgba(255,255,255,0.06)',
        text:      '#ffffff',
        textMuted: 'rgba(255,255,255,0.4)',
        accent:    '#8FF5FF',
        grid:      'rgba(0,200,200,0.12)',
        green:     '#8EFF71',
        cyan:      '#8FF5FF',
        purple:    '#A78BFA',
        pink:      '#FF6B9B',
    },
    font: {
        display: "'Barlow Condensed', sans-serif",
        mono:    "'Space Mono', monospace",
        body:    "'Barlow', sans-serif",
    },
    space: {
        xs: '4px', sm: '8px', md: '16px',
        lg: '24px', xl: '48px', xxl: '96px',
    },
});