import { Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {useState, useEffect} from 'react'
import { navigationItems, handleNavigation } from '../utils/navigation'
import { componentStyles, cn } from '../theme'

export default function Navbar() {
    const [currentNav, setCurrentNav] = useState('#hero');

    // Track scroll position to update active nav item
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'about', 'work-experience', 'projects', 'skills', 'contact'];
            const scrollPosition = window.scrollY + 150; // Offset for navbar height

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setCurrentNav(`#${sections[i]}`);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (item) => {
        handleNavigation(item.href, setCurrentNav);
    };

    return (
        <Disclosure as="nav" className="fixed top-0 left-0 w-full z-50 bg-slate-950/75 backdrop-blur-md border-b border-white/[0.08]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <button
                        onClick={() => handleNavigation('#hero', setCurrentNav)}
                        className="font-mono text-base font-bold text-slate-100 focus:outline-none hover:opacity-80 transition-opacity shrink-0"
                        aria-label="Go to top"
                    >
                        wael<span className="text-emerald-400">.</span>
                    </button>

                    <div className="hidden sm:flex items-center space-x-6">
                        {navigationItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => handleNavClick(item)}
                                className={currentNav === item.href ? componentStyles.nav.linkActive : componentStyles.nav.link}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 -mr-2 text-slate-400 hover:bg-white/5 hover:text-slate-100 focus:ring-2 focus:ring-cyan-400 focus:outline-hidden focus:ring-inset sm:hidden">
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                        <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                    </DisclosureButton>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden border-t border-white/[0.08]">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigationItems.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="button"
                            onClick={() => handleNavClick(item)}
                            className={cn(
                                currentNav === item.href ? 'bg-white/5 text-slate-100' : 'text-slate-400 hover:bg-white/5 hover:text-slate-100',
                                'block rounded-md px-3 py-2 font-mono text-sm w-full text-left transition-colors duration-200',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
