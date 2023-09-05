'use client';

import { LayoutProps } from '@/types/interface';
import { motion } from 'framer-motion';

export function ReviewMotionList({children}: LayoutProps) {
    
    const list = {
        hidden: {
          opacity: 0
        },
        visible: {
          opacity: 1,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.1
          }
        }
      };
    
    return (
        <motion.ul
            variants={list} initial='hidden' animate="visible"
            className='grid grid-cols-1 gap-y-[50px] max-w-[700px] w-full mx-auto mb-[50px]'
        >
            {children}
        </motion.ul>
    )
}

export function ReviewMotionListItem({children}: LayoutProps) {

    const item = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      };

    return (
        <motion.li
            variants={item}
        >
            {children}
        </motion.li>
    )
}