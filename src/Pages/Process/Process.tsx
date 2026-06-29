// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//     VerticalTimeline,
//     VerticalTimelineElement,
// } from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
// import * as styles from './Process.css.ts';
//
// const STEPS = [
//     { number: '01', title: 'DISCOVERY',   desc: 'Understanding requirements, market analysis, and defining the core problem space.',             color: '#8FF5FF' },
//     { number: '02', title: 'DESIGN',      desc: 'Crafting intuitive user interfaces and user experience maps focused on accessibility.',         color: '#8EFF71' },
//     { number: '03', title: 'DEVELOPMENT', desc: 'Writing clean, modular, and efficient code with a focus on performance and security.',          color: '#FF6B9B' },
//     { number: '04', title: 'TESTING',     desc: 'Rigorous automated and manual testing to ensure a bug-free experience for users.',              color: '#A78BFA' },
//     { number: '05', title: 'LAUNCH',      desc: 'Seamless deployment to production environments with zero-downtime strategies.',                 color: '#8FF5FF' },
//     { number: '06', title: 'SUPPORT',     desc: 'Ongoing maintenance, updates, and optimization based on real-world usage data.',                color: '#ffffff' },
// ];
//
// export const Process: React.FC = () => {
//     const navigate = useNavigate();
//     return (
//         <section className={styles.section}>
//             <p className={styles.breadcrumb}>
//                 <span className={styles.breadHome} onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>HOME</span>
//                 <span style={{ color: 'rgba(255,255,255,0.2)', margin: '0 4px' }}> / </span>
//                 <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>PROCESS</span>
//             </p>
//             <p className={styles.eyebrow}>OUR PROCESS</p>
//             <h2 className={styles.heading}>OUR PROCESS ARCHITETURE</h2>
//
//             <VerticalTimeline lineColor="rgba(255,255,255,0.10)">
//                 {STEPS.map((step, i) => (
//                     <VerticalTimelineElement
//                         key={step.number}
//                         position={i % 2 === 0 ? 'left' : 'right'}
//                         contentStyle={{
//                             background:  'transparent',
//                             boxShadow:   'none',
//                             border:      'none',
//                             padding:     '0 24px 40px',
//                         }}
//                         contentArrowStyle={{ display: 'none' }}
//                         iconStyle={{
//                             // Radial gradient: colored dot in center, dark ring around it
//                             background:  `radial-gradient(circle at center, ${step.color} 0%, ${step.color} 30%, #1c1c1c 31%, #1c1c1c 100%)`,
//                             boxShadow:   `0 0 0 1px #2a2a2a,
//                                       0 0 8px 3px ${step.color}33,
//                                       0 0 18px 6px ${step.color}18`,
//                             width:       '36px',
//                             height:      '36px',
//                             marginLeft:  '-18px',
//                             marginTop:   '-18px',
//                             top:         '50%',
//                             border:      'none',
//                         }}
//                         icon={<span />}
//                     >
//                         <p className={styles.number} style={{ color: step.color }}>{step.number}.</p>
//                         <h3 className={styles.title} style={{ color: step.color }}>{step.title}</h3>
//                         <p className={styles.desc}>{step.desc}</p>
//                     </VerticalTimelineElement>
//                 ))}
//             </VerticalTimeline>
//         </section>
//     );
// };

import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import * as styles from './Process.css.ts';

const STEPS = [
    {
        number: '01',
        title:  'THE PROBLEM, NOT THE BRIEF',
        sub:    'Discovery',
        desc:   'Clients bring us a brief. We go find the actual problem hiding underneath it — the frustration users feel but nobody has named yet. Market reality first. Assumptions never.',
        color:  '#8FF5FF',
    },
    {
        number: '02',
        title:  'DESIGN THE FEELING, THEN THE SCREEN',
        sub:    'Design',
        desc:   "Before a single pixel gets placed, we decide how the product should feel to use — calm, fast, fun, trustworthy. The interface is just the delivery mechanism for that feeling. Accessibility isn't a checklist item here; it's a design constraint from day one.",
        color:  '#8EFF71',
    },
    {
        number: '03',
        title:  'BUILD THE SKELETON BEFORE THE SKIN',
        sub:    'Architecture',
        desc:   "This is where many teams cut corners and pay for it eighteen months later. We don't. Data models, system boundaries, scaling decisions — all settled before development begins, so the product can grow without requiring a rebuild.",
        color:  '#FF6B9B',
},
{
    number: '04',
        title:  'CODE LIKE SOMEONE ELSE HAS TO READ IT',
        sub:    'Development',
        desc:   'Because someone always does — a teammate, a future hire, or us in six months having forgotten our own cleverness. Clean, modular, security-conscious code, written in increments small enough to test and ship with confidence.',
        color:  '#A78BFA',
},
{
    number: '05',
        title:  'BREAK IT BEFORE THE WORLD DOES',
        sub:    'Testing & QA',
       desc:   "Automated suites catch what's predictable. Our team catches what isn't. Every product gets stress-tested against the messy, irrational ways real humans actually use software — not the polite way it behaves in a demo.",
       color:  '#8FF5FF',
},
{
    number: '06',
        title:  'SHIP, WATCH, EVOLVE',
    sub:    'Launch & Iterate',
    desc:   'Launch day is the start of the data, not the end of the project. We watch how people actually use what we built, and continue shaping it around those behaviors — because the version that ships is never the final version.',
    color:  '#ffffff',
},
];

export const Process: React.FC = () => {
    const navigate = useNavigate();
    return (
        <section className={styles.section}>
            <p className={styles.breadcrumb}>
                <span className={styles.breadHome} onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>HOME</span>
                <span style={{ color: 'rgba(255,255,255,0.2)', margin: '0 4px' }}> / </span>
                <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>PROCESS</span>
            </p>
            <p className={styles.eyebrow}>OUR PROCESS</p>
            <h2 className={styles.heading}>OUR PROCESS ARCHITETURE</h2>

            <VerticalTimeline lineColor="rgba(255,255,255,0.10)">
                {STEPS.map((step, i) => (
                    <VerticalTimelineElement
                        key={step.number}
                        position={i % 2 === 0 ? 'left' : 'right'}
                        contentStyle={{
                            background:  'transparent',
                            boxShadow:   'none',
                            border:      'none',
                            padding:     '0 24px 40px',
                        }}
                        contentArrowStyle={{ display: 'none' }}
                        iconStyle={{
                            // Radial gradient: colored dot in center, dark ring around it
                            background:  `radial-gradient(circle at center, ${step.color} 0%, ${step.color} 30%, #1c1c1c 31%, #1c1c1c 100%)`,
                            boxShadow:   `0 0 0 1px #2a2a2a,
                                      0 0 8px 3px ${step.color}33,
                                      0 0 18px 6px ${step.color}18`,
                            width:       '36px',
                            height:      '36px',
                            marginLeft:  '-18px',
                            marginTop:   '-18px',
                            top:         '50%',
                            border:      'none',
                        }}
                        icon={<span />}
                    >
                        <p className={styles.number} style={{ color: step.color }}>{step.number} —</p>
                        <h3 className={styles.title}>{step.title}</h3>
                        <p className={styles.sub} style={{ color: step.color }}>{step.sub}</p>
                        <p className={styles.desc}>{step.desc}</p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </section>
    );
};