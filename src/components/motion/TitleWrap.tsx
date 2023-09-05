'use client';

import { LayoutProps } from '@/types/interface';
import { motion } from 'framer-motion';
import classes from './TitleWrap.module.css';

/** cildren - h1, p 태그 사용 */
export default function TitleWrap({children}: LayoutProps) {
    return (
        <motion.section className={classes.titleWrap}
            initial={{opacity:0, y: -100}}
            animate={{opacity:1, y: 0}}
            exit={{opacity:0, y:-100}}
        >
            {children}
        </motion.section>
    )
}