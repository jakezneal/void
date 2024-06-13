import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface NavItem {
    link: string;
    label: string;
}

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink],
    template: `
        <header class="header wrapper">
            <!-- TODO: Fix gap between text and full stop -->
            <a href="/" class="brand">
                JZN
                <span>.</span>
            </a>
            <nav>
                <ul class="items" role="list">
                    @for (item of navItems; track $index) {
                        <li class="item">
                            <a [routerLink]="item.link" class="link">{{ item.label }}</a>
                        </li>
                    }
                </ul>
            </nav>
        </header>
    `,
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    navItems = [
        {
            link: '/',
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
}
