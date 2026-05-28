import React from 'react';
import { flatGrid, flatCard, flatCardTitle, flatCardDescription } from './Flatcard.css.ts';
import { CornerBrackets } from '../Cornerbrackets';
import type { BracketColor } from '../Cornerbrackets';

interface FlatCardData {
    label: string;
    description: string;
    color: BracketColor;
}

const CARDS: FlatCardData[] = [
    { label: 'PEOPLE',  color: 'cyan',   description: 'The humans behind every breakthrough. Talent, culture, and community.'     },
    { label: 'PRODUCT', color: 'green',  description: 'High-Fidelity Artifacts Designed For The Digital Frontier.'                      },
    { label: 'PROCESS', color: 'pink',   description: 'Mission-Critical Deployment of Futuristic Solutions'                },
    { label: 'PROJECT', color: 'purple', description: 'End-to-end execution. From concept to launch, nothing left behind.'         },
];

export const FlatCards: React.FC = () => {
    return (
        <div className={flatGrid}>
            {CARDS.map((card) => (
                <div key={card.label} className={flatCard}>
                    <CornerBrackets color={card.color} />
                    {/* Inner wrapper centred — no absolute positioning */}
                    <div style={{
                        display:        'flex',
                        flexDirection:  'column',
                        alignItems:     'center',
                        justifyContent: 'center',
                        textAlign:      'center',
                        width:          '100%',
                        padding:        '0 24px',
                        gap:            '10px',
                    }}>
                        <h3 className={flatCardTitle}>{card.label}</h3>
                        <p className={flatCardDescription}>{card.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};