export interface NavItem {
    link: string;
    label: string;
}

export const navItems = [
    {
        link: '/about',
        label: 'About',
    },
    {
        link: '/work',
        label: 'Work',
    },
    {
        link: '/',
        label: 'Services',
    },
    {
        link: '/',
        label: 'Contact',
    },
] satisfies NavItem[];
