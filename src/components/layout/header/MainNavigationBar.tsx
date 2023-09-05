'use client';

import Link from 'next/link';
import { MainNavigationTool } from "@/types/interface";
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const link_data: MainNavigationTool[] = [
    {title: 'All Reviews', path: "/"},
    {title: 'Add Reviews', path: "/reviews"}
]
export default function MainNavigationBar() {
    const path = usePathname();
    return (
        <ul className='flex'>
            {
                link_data.map((val, idx) => (
                    <li key={idx} className='ml-8'>
                        <Link href={val.path} className={`relative ${path===val.path? 'text-white': 'text-gray-400'}`}>
                            {val.title}
                            {path===val.path&& <motion.span 
                                    layoutId='underline'
                                    className='absolute left-0 top-full block w-full h-[1px] bg-white'
                                />
                            }
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}