import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CornerBrackets } from '../../Components/Cornerbrackets';
import * as styles from './Project.css.ts';

interface Section {
    title: string;
    text:  string;
    image?: string;
}

interface Project {
    id:       string;
    name:     string;
    tags:     string[];
    liveUrl:  string;
    color:    'cyan' | 'green' | 'pink' | 'purple';
    hexColor: string;
    sections: Section[];
}

const ACCENT: Record<string, string> = {
    cyan: '#8FF5FF', green: '#8EFF71', pink: '#FF6B9B', purple: '#A78BFA',
};

const LOREM = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset\'s Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum';
const LOREM_SHORT = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry\'s standard dummy text eve';

const PROJECTS: Project[] = [
    {
        id: 'project-1', name: 'PROJECT 1', tags: ['REACT', 'NODE.JS', 'AWS'],
        liveUrl: '#', color: 'cyan', hexColor: '#22d3ee',
        sections: [
            { title: 'OVERVIEW',        text: LOREM, image: '/images/projects/p1-overview.jpg' },
            { title: 'CHALLENGES',      text: LOREM },
            { title: 'MISSION AND GOALS', text: LOREM },
            { title: 'PROCESS',         text: LOREM_SHORT, image: '/images/projects/p1-process.jpg' },
            { title: 'APP FEATURES',    text: LOREM_SHORT, image: '/images/projects/p1-features.jpg' },
        ],
    },
    {
        id: 'project-2', name: 'PROJECT 2', tags: ['VUE', 'PYTHON', 'GCP'],
        liveUrl: '#', color: 'green', hexColor: '#4ade80',
        sections: [
            { title: 'OVERVIEW',        text: LOREM, image: '/images/projects/p2-overview.jpg' },
            { title: 'CHALLENGES',      text: LOREM },
            { title: 'MISSION AND GOALS', text: LOREM },
            { title: 'PROCESS',         text: LOREM_SHORT, image: '/images/projects/p2-process.jpg' },
            { title: 'APP FEATURES',    text: LOREM_SHORT, image: '/images/projects/p2-features.jpg' },
        ],
    },
    {
        id: 'project-3', name: 'PROJECT 3', tags: ['REACT NATIVE', 'GRAPHQL'],
        liveUrl: '#', color: 'pink', hexColor: '#f472b6',
        sections: [
            { title: 'OVERVIEW',        text: LOREM, image: '/images/projects/p3-overview.jpg' },
            { title: 'CHALLENGES',      text: LOREM },
            { title: 'MISSION AND GOALS', text: LOREM },
            { title: 'PROCESS',         text: LOREM_SHORT, image: '/images/projects/p3-process.jpg' },
            { title: 'APP FEATURES',    text: LOREM_SHORT, image: '/images/projects/p3-features.jpg' },
        ],
    },
    {
        id: 'project-4', name: 'PROJECT 4', tags: ['NEXT.JS', 'POSTGRES'],
        liveUrl: '#', color: 'purple', hexColor: '#a855f7',
        sections: [
            { title: 'OVERVIEW',        text: LOREM, image: '/images/projects/p4-overview.jpg' },
            { title: 'CHALLENGES',      text: LOREM },
            { title: 'MISSION AND GOALS', text: LOREM },
            { title: 'PROCESS',         text: LOREM_SHORT, image: '/images/projects/p4-process.jpg' },
            { title: 'APP FEATURES',    text: LOREM_SHORT, image: '/images/projects/p4-features.jpg' },
        ],
    },
    {
        id: 'project-5', name: 'PROJECT 5', tags: ['REACT', 'TYPESCRIPT', 'AWS'],
        liveUrl: '#', color: 'cyan', hexColor: '#22d3ee',
        sections: [
            { title: 'OVERVIEW',        text: LOREM, image: '/images/projects/p5-overview.jpg' },
            { title: 'CHALLENGES',      text: LOREM },
            { title: 'MISSION AND GOALS', text: LOREM },
            { title: 'PROCESS',         text: LOREM_SHORT, image: '/images/projects/p5-process.jpg' },
            { title: 'APP FEATURES',    text: LOREM_SHORT, image: '/images/projects/p5-features.jpg' },
        ],
    },
];

export const Project: React.FC = () => {
    const navigate  = useNavigate();
    const [selected, setSelected] = useState<Project | null>(null);

    return (
        <section className={styles.page}>
            {/* Header */}
            <div className={styles.header}>
                <p className={styles.breadcrumb}>
                    <span className={styles.breadLink} onClick={() => navigate('/')}>HOME</span>
                    <span className={styles.breadSep}> / </span>
                    <span className={styles.breadCurrent}>PROJECT</span>
                </p>
                <h1 className={styles.heading}>Our Project</h1>
            </div>

            {/* Body */}
            <div className={styles.body}>
                {/* Left sidebar */}
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

                {/* Right detail */}
                <div className={styles.detail}>
                    {!selected ? (
                        /* No selection state */
                        <div className={styles.emptyState}>
                            <div className={styles.thumbnail}>
                                <CornerBrackets color='white' />
                                <span className={styles.thumbPlaceholder}>⊘</span>
                            </div>
                            <h2 className={styles.noSelection}>NO PROJECT SELECTED</h2>
                            <p className={styles.detailText}>
                                Most studios tell you what they built, then separately tell you how it sold, like two different teams wrote two different press releases. We don't have that problem, because we don't run it that way. Every project on the left has been developed, marketed, and deployed as one continuous motion — the same people, the same sprints, the same arguments, happening in parallel instead of in sequence.
                            </p>
                            <p className={styles.detailText}>
                                Pick a project. What you'll find on the other side isn't a feature list and a separate launch recap. It's the actual journey — where engineering and go-to-market collided, what changed because of it, and what real people said once it was in their hands.
                            </p>
                        </div>
                    ) : (
                        /* Selected project */
                        <div className={styles.projectDetail}>
                            {/* Title + tags + button */}
                            <h2 className={styles.projectName}>{selected.name}</h2>
                            <div className={styles.tags}>
                                {selected.tags.map(tag => (
                                    <span key={tag} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                            <a href={selected.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.liveBtn}>
                                VIEW LIVE PROJECT
                            </a>

                            {/* Sections */}
                            <div className={styles.sections}>
                                {selected.sections.map(section => (
                                    <div key={section.title} className={styles.section}>
                                        <h3 className={styles.sectionTitle}>{section.title}</h3>
                                        <p className={styles.detailText}>{section.text}</p>
                                        {section.image && (
                                            <div className={styles.sectionImage}>
                                                <img src={section.image} alt={section.title} className={styles.sectionImg} />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};