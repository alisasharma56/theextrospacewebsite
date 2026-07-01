// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { CornerBrackets } from '../../Components/Cornerbrackets';
// import * as styles from './Project.css.ts';
//
// interface Section {
//     title: string;
//     text:  string;
//     image?: string;
// }
//
// interface Project {
//     id:       string;
//     name:     string;
//     tags:     string[];
//     liveUrl:  string;
//     color:    'cyan' | 'green' | 'pink' | 'purple';
//     hexColor: string;
//     sections: Section[];
// }
//
// const ACCENT: Record<string, string> = {
//     cyan: '#8FF5FF', green: '#8EFF71', pink: '#FF6B9B', purple: '#A78BFA',
// };
//
// const LOREM = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset\'s Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum';
// const LOREM_SHORT = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry\'s standard dummy text eve';
//
// const PROJECTS: Project[] = [
//     {
//         id: 'project-1', name: 'PROJECT 1', tags: ['REACT', 'NODE.JS', 'AWS'],
//         liveUrl: '#', color: 'cyan', hexColor: '#22d3ee',
//         sections: [
//             { title: 'OVERVIEW',        text: LOREM, image: '/images/projects/p1-overview.jpg' },
//             { title: 'CHALLENGES',      text: LOREM },
//             { title: 'MISSION AND GOALS', text: LOREM },
//             { title: 'PROCESS',         text: LOREM_SHORT, image: '/images/projects/p1-process.jpg' },
//             { title: 'APP FEATURES',    text: LOREM_SHORT, image: '/images/projects/p1-features.jpg' },
//         ],
//     },
//     {
//         id: 'project-2', name: 'PROJECT 2', tags: ['VUE', 'PYTHON', 'GCP'],
//         liveUrl: '#', color: 'green', hexColor: '#4ade80',
//         sections: [
//             { title: 'OVERVIEW',        text: LOREM, image: '/images/projects/p2-overview.jpg' },
//             { title: 'CHALLENGES',      text: LOREM },
//             { title: 'MISSION AND GOALS', text: LOREM },
//             { title: 'PROCESS',         text: LOREM_SHORT, image: '/images/projects/p2-process.jpg' },
//             { title: 'APP FEATURES',    text: LOREM_SHORT, image: '/images/projects/p2-features.jpg' },
//         ],
//     },
//     {
//         id: 'project-3', name: 'PROJECT 3', tags: ['REACT NATIVE', 'GRAPHQL'],
//         liveUrl: '#', color: 'pink', hexColor: '#f472b6',
//         sections: [
//             { title: 'OVERVIEW',        text: LOREM, image: '/images/projects/p3-overview.jpg' },
//             { title: 'CHALLENGES',      text: LOREM },
//             { title: 'MISSION AND GOALS', text: LOREM },
//             { title: 'PROCESS',         text: LOREM_SHORT, image: '/images/projects/p3-process.jpg' },
//             { title: 'APP FEATURES',    text: LOREM_SHORT, image: '/images/projects/p3-features.jpg' },
//         ],
//     },
//     {
//         id: 'project-4', name: 'PROJECT 4', tags: ['NEXT.JS', 'POSTGRES'],
//         liveUrl: '#', color: 'purple', hexColor: '#a855f7',
//         sections: [
//             { title: 'OVERVIEW',        text: LOREM, image: '/images/projects/p4-overview.jpg' },
//             { title: 'CHALLENGES',      text: LOREM },
//             { title: 'MISSION AND GOALS', text: LOREM },
//             { title: 'PROCESS',         text: LOREM_SHORT, image: '/images/projects/p4-process.jpg' },
//             { title: 'APP FEATURES',    text: LOREM_SHORT, image: '/images/projects/p4-features.jpg' },
//         ],
//     },
//     {
//         id: 'project-5', name: 'PROJECT 5', tags: ['REACT', 'TYPESCRIPT', 'AWS'],
//         liveUrl: '#', color: 'cyan', hexColor: '#22d3ee',
//         sections: [
//             { title: 'OVERVIEW',        text: LOREM, image: '/images/projects/p5-overview.jpg' },
//             { title: 'CHALLENGES',      text: LOREM },
//             { title: 'MISSION AND GOALS', text: LOREM },
//             { title: 'PROCESS',         text: LOREM_SHORT, image: '/images/projects/p5-process.jpg' },
//             { title: 'APP FEATURES',    text: LOREM_SHORT, image: '/images/projects/p5-features.jpg' },
//         ],
//     },
// ];
//
// export const Project: React.FC = () => {
//     const navigate  = useNavigate();
//     const [selected, setSelected] = useState<Project | null>(null);
//
//     return (
//         <section className={styles.page}>
//             {/* Header */}
//             <div className={styles.header}>
//                 <p className={styles.breadcrumb}>
//                     <span className={styles.breadLink} onClick={() => navigate('/')}>HOME</span>
//                     <span className={styles.breadSep}> / </span>
//                     <span className={styles.breadCurrent}>PROJECT</span>
//                 </p>
//                 <h1 className={styles.heading}>Our Project</h1>
//             </div>
//
//             {/* Body */}
//             <div className={styles.body}>
//                 {/* Left sidebar */}
//                 <div className={styles.sidebar}>
//                     <p className={styles.sidebarLabel}>PROJECTS</p>
//                     {PROJECTS.map(project => (
//                         <button
//                             key={project.id}
//                             className={`${styles.projectBtn} ${selected?.id === project.id ? styles.projectBtnActive : ''}`}
//                             onClick={() => setSelected(project)}
//                             style={selected?.id === project.id ? { color: ACCENT[project.color], background: 'rgba(255,255,255,0.05)' } : {}}
//                         >
//                             {project.name}
//                         </button>
//                     ))}
//                 </div>
//
//                 {/* Right detail */}
//                 <div className={styles.detail}>
//                     {!selected ? (
//                         /* No selection state */
//                         <div className={styles.emptyState}>
//                             <div className={styles.thumbnail}>
//                                 <CornerBrackets color='white' />
//                                 <span className={styles.thumbPlaceholder}>⊘</span>
//                             </div>
//                             <h2 className={styles.noSelection}>NO PROJECT SELECTED</h2>
//                             <p className={styles.detailText}>
//                                 Most studios tell you what they built, then separately tell you how it sold, like two different teams wrote two different press releases. We don't have that problem, because we don't run it that way. Every project on the left has been developed, marketed, and deployed as one continuous motion — the same people, the same sprints, the same arguments, happening in parallel instead of in sequence.
//                             </p>
//                             <p className={styles.detailText}>
//                                 Pick a project. What you'll find on the other side isn't a feature list and a separate launch recap. It's the actual journey — where engineering and go-to-market collided, what changed because of it, and what real people said once it was in their hands.
//                             </p>
//                         </div>
//                     ) : (
//                         /* Selected project */
//                         <div className={styles.projectDetail}>
//                             {/* Title + tags + button */}
//                             <h2 className={styles.projectName}>{selected.name}</h2>
//                             <div className={styles.tags}>
//                                 {selected.tags.map(tag => (
//                                     <span key={tag} className={styles.tag}>{tag}</span>
//                                 ))}
//                             </div>
//                             <a href={selected.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.liveBtn}>
//                                 VIEW LIVE PROJECT
//                             </a>
//
//                             {/* Sections */}
//                             <div className={styles.sections}>
//                                 {selected.sections.map(section => (
//                                     <div key={section.title} className={styles.section}>
//                                         <h3 className={styles.sectionTitle}>{section.title}</h3>
//                                         <p className={styles.detailText}>{section.text}</p>
//                                         {section.image && (
//                                             <div className={styles.sectionImage}>
//                                                 <img src={section.image} alt={section.title} className={styles.sectionImg} />
//                                             </div>
//                                         )}
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </section>
//     );
// };

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CornerBrackets } from '../../Components/Cornerbrackets';
import * as styles from './Project.css.ts';

interface Project {
    id:       string;
    name:     string;
    color:    'cyan' | 'green' | 'pink' | 'purple';
    sections: { title: string; text: string }[];
}

const ACCENT: Record<string, string> = {
    cyan: '#8FF5FF', green: '#8EFF71', pink: '#FF6B9B', purple: '#A78BFA',
};

const PROJECTS: Project[] = [
    {
        id:    'mr-rizzrock',
        name:  'MR. RIZZROCK',
        color: 'cyan',
        sections: [
            {
                title: 'THE JOURNEY',
                text:  'There\'s a version of this story that\'s easy to tell and mostly false: build the app, polish it, hand it to marketing, flip a switch and launch. That\'s not what happened here, and it\'s not what was ever going to work for a product like this. Confidence coaching lives or dies on feeling current, feeling alive, feeling like it\'s actually paying attention to how people talk right now — and that kind of product can\'t be built in a vacuum and unveiled later. So from the earliest planning conversations, three tracks ran at once: the engine that generates the actual coaching experience, the public-facing identity that would get strangers to care, and a deployment rhythm built to never really stop.',
            },
            {
                title: 'THE MOMENT THE TRACKS COLLIDED FOR THE FIRST TIME',
                text:  'The first real collision happened before a single screen was finalized. The engineering side had drafted a fairly standard onboarding flow — the kind every app has, age, preferences, what are you looking for. Standard, safe, forgettable. At the same time, the growth side was war-gaming what a TikTok clip of someone using the app would actually look like, and the honest answer was: nobody films themselves filling out a preference form. That single, almost embarrassing realization — that the "correct" product decision was actively hostile to the marketing strategy — killed the original onboarding flow entirely.',
            },
            {
                title: 'BUILDING THE ENGINE WHILE FEEDING THE CONTENT MACHINE',
                text:  'Once that decision was locked, the actual conversation engine moved through repeated tuning cycles — adjusting for platform, tone, the difference between a three-day-old match and a month-long conversation. Every meaningful change to how the AI responded got tested not just for quality, but for whether it produced a moment worth filming. When the aura score went through its multiple redesigns, that wasn\'t purely a design decision made in isolation. It was shaped directly by which version of the feature actually made people want to screenshot it and send it to a friend.',
            },
            {
                title: 'THE REFERRAL SYSTEM AS THE CLEAREST EXAMPLE',
                text:  'Nowhere does the build-market-deploy blur show up more clearly than the referral mechanic. Five free generations to start, twenty more per successful referral — that\'s not just a growth tactic, it\'s a piece of product architecture that had to be engineered into the core usage loop from day one. The number itself — twenty, not five, not fifty — went through real iteration once the product was live, because early real-world usage showed the referral reward wasn\'t quite generous enough to motivate genuine sharing behavior.',
            },
            {
                title: 'DEPLOYMENT AS A LOOP, NOT A LAUNCH DAY',
                text:  'The release approach itself was built around small, frequent shipments rather than one big launch moment — partly an engineering choice for stability, but just as much a marketing one. Each release got watched closely against real usage patterns, and what came back from that data didn\'t go into a quarterly review deck — it went straight into the next sprint, sometimes within days.',
            },
            {
                title: 'WHERE IT STANDS',
                text:  'The product is live, the content machine is still running daily across its seven formats, and the build hasn\'t slowed into maintenance mode just because there was a launch date on a calendar once. The honest way to describe Mr. RizzRock\'s development isn\'t "built, then launched, then marketed." It\'s that all three have been the same continuous argument since sprint zero.',
            },
        ],
    },
    {
        id:    'tiny-talks',
        name:  'TINY TALKS',
        color: 'green',
        sections: [
            {
                title: 'THE JOURNEY',
                text:  'Tiny Talks is being built under a constraint that Mr. RizzRock never had to deal with: it\'s entering a category where the competitors aren\'t scrappy upstarts, they\'re entrenched, well-funded, and trusted by millions of people during one of the most emotionally vulnerable windows of their lives. You cannot build quietly in a corner for a year and then surprise-launch into a trust-based category — the story has to start moving before the product is finished.',
            },
            {
                title: 'THE TEARDOWN THAT BECAME THE STRATEGY',
                text:  'The competitive analysis of five major pregnancy apps wasn\'t handed to a marketing team after the product roadmap was already locked. It happened first, and it happened with product people and positioning people looking at the exact same screens. Both questions kept landing on the same answer: an enormous amount of clinical competence, almost zero emotional texture. That gap became the single idea that shaped everything downstream — the jelly baby wasn\'t a cute mascot bolted onto a finished app. It\'s the literal embodiment of the gap the teardown found.',
            },
            {
                title: 'DESIGNING THREE HOME SCREENS WHILE WRITING THE LAUNCH STORY',
                text:  'Three genuinely different home screen concepts were built, and they weren\'t evaluated purely on visual or UX merit in a design review room. They were evaluated against an open go-to-market question: which version of this screen, shown in a fifteen-second clip with no context, makes a stranger feel something before they\'ve read a single word. At least one major shift in the jelly baby\'s animation pacing came directly from watching how it played in an early, rough video cut meant for the go-to-market deck.',
            },
            {
                title: 'SHIPPING THE STORY BEFORE THE PRODUCT',
                text:  'The marketing website went live before the app itself. That\'s deliberate, not a delay-driven accident. In a trust-heavy category, putting the story into the world early — even an incomplete one — lets real positioning get tested against real reactions while there\'s still time to adjust the product based on what lands and what doesn\'t.',
            },
            {
                title: 'DEPLOYMENT THINKING, BUILT IN BEFORE THERE\'S ANYTHING TO DEPLOY',
                text:  'Even with the product still pre-launch, the deployment approach isn\'t something parked for later. Decisions about how the eventual rollout will be staged are being made now, while the screens are still being finished — specifically so that launch day doesn\'t become the first time anyone thinks about what happens after launch day.',
            },
            {
                title: 'WHERE IT STANDS',
                text:  'This is a product still in motion, deliberately, with no clean line separating "the build phase" from "the marketing phase" from "the eventual launch." The story has already started moving in public. The product is still being shaped partly by how that story lands. In a category this trust-dependent, treating development, positioning, and deployment as one continuous conversation is the only way a new entrant gets a real shot against competitors who\'ve had a decade\'s head start.',
            },
        ],
    },
    {
        id:    'project-3',
        name:  'PROJECT 3',
        color: 'pink',
        sections: [
            { title: 'THE JOURNEY', text: 'Details coming soon.' },
        ],
    },
    {
        id:    'project-4',
        name:  'PROJECT 4',
        color: 'purple',
        sections: [
            { title: 'THE JOURNEY', text: 'Details coming soon.' },
        ],
    },
    {
        id:    'project-5',
        name:  'PROJECT 5',
        color: 'cyan',
        sections: [
            { title: 'THE JOURNEY', text: 'Details coming soon.' },
        ],
    },
];

export const Project: React.FC = () => {
    const navigate  = useNavigate();
    const [selected, setSelected] = useState<Project | null>(null);

    return (
        <section className={styles.page}>
            <div className={styles.header}>
                <p className={styles.breadcrumb}>
                    <span className={styles.breadLink} onClick={() => navigate('/')}>HOME</span>
                    <span className={styles.breadSep}> / </span>
                    <span className={styles.breadCurrent}>PROJECT</span>
                </p>
                <h1 className={styles.heading}>Our Project</h1>
            </div>

            <div className={styles.body}>
                {/* Sidebar */}
                <div className={styles.sidebar}>
                    <p className={styles.sidebarLabel}>PROJECTS</p>
                    {PROJECTS.map(project => (
                        <button
                            key={project.id}
                            className={`${styles.projectBtn} ${selected?.id === project.id ? styles.projectBtnActive : ''}`}
                            onClick={() => setSelected(project)}
                            style={selected?.id === project.id ? { color: ACCENT[project.color], background: 'rgba(255,255,255,0.05)' } : {}}
                        >
                            {project.name}
                        </button>
                    ))}
                </div>

                {/* Detail */}
                <div className={styles.detail}>
                    {!selected ? (
                        <div className={styles.emptyState}>
                            <div className={styles.thumbnail}>
                                <CornerBrackets color='white' />
                                <span className={styles.thumbPlaceholder}>⊘</span>
                            </div>
                            <h2 className={styles.noSelection}>NO PROJECT SELECTED</h2>
                            <p className={styles.detailText}>Most studios tell you what they built, then separately tell you how it sold, like two different teams wrote two different press releases. We don't have that problem, because we don't run it that way. Every project on the left has been developed, marketed, and deployed as one continuous motion — the same people, the same sprints, the same arguments, happening in parallel instead of in sequence.</p>
                            <p className={styles.detailText}>Pick a project. What you'll find on the other side isn't a feature list and a separate launch recap. It's the actual journey — where engineering and go-to-market collided, what changed because of it, and what real people said once it was in their hands.</p>
                            <p className={styles.hint}>← Select a project to begin.</p>
                        </div>
                    ) : (
                        <div className={styles.projectDetail}>
                            <p className={styles.detailEyebrow} style={{ color: ACCENT[selected.color] }}>
                                {selected.name}
                            </p>
                            {selected.sections.map(section => (
                                <div key={section.title} className={styles.section}>
                                    <h3 className={styles.sectionTitle}>{section.title}</h3>
                                    <p className={styles.detailText}>{section.text}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};