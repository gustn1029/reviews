import Link from 'next/link';
import MainNavigationBar from './MainNavigationBar';

export default function Header() {
    return (
        <header className='flex justify-between items-center py-6 px-12 bg-slate-900'>
            <Link href={'/'} className='text-white uppercase font-semibold text-xl'>Movie Review</Link>
            <nav>
                <MainNavigationBar />
            </nav>
        </header>
    )
}