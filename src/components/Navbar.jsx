import { Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/logo.svg'
import {useState, useEffect} from 'react'
import { navigationItems, handleNavigation } from '../utils/navigation'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

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
        <Disclosure as="nav" className="bg-gray-50 fixed top-0 left-0 w-full z-50 shadow-sm">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex max-h-22 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-evenly">
                        <div className="flex shrink-0 items-center">
                            <button 
                                onClick={() => handleNavigation('#hero', setCurrentNav)}
                                className="focus:outline-none hover:opacity-80 transition-opacity"
                                aria-label="Go to top"
                            >
                                <object data={logo} height={140} className={"py-8"} type="image/svg+xml">
                                </object>
                            </button>
                        </div>
                        <div className="hidden sm:ml-6 sm:block left-2">
                            <div className="flex space-x-4">
                                {navigationItems.map((item) => (
                                    <button
                                        key={item.name}
                                        onClick={() => handleNavClick(item)}
                                        className={classNames(
                                            currentNav === item.href ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-700 hover:text-white',
                                            'rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200',
                                        )}
                                    >
                                        {item.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigationItems.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="button"
                            onClick={() => handleNavClick(item)}
                            className={classNames(
                                currentNav === item.href ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200',
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
