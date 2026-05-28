import React from 'react';
import * as styles from './GridBackground.css';

export const GridBackground: React.FC = () => {
    return (
        <div className={styles.gridWrapper}>
            <div className={styles.gridPlane} />
            <div className={styles.gridEdgeFade} />
        </div>
    );
};