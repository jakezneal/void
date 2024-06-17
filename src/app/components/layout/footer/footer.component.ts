import { Component } from '@angular/core';
import { NavItem, navItems } from '../../../models/links';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [],
    template: `
        <footer class="footer wrapper">
            <div class="links">
                <ul class="list" role="list">
                    @for (item of pageNavItems; track $index) {
                        <li class="item">
                            <a [href]="item.link">{{ item.label }}</a>
                        </li>
                    }
                </ul>
                <ul class="list social" role="list">
                    @for (item of socialNavItems; track $index) {
                        <li class="item">
                            <a [href]="item.link" target="_blank" rel="noopener">{{ item.label }}</a>
                        </li>
                    }
                </ul>
            </div>
            <p class="copyright">&copy; {{ currentYear }}. Hyperfocus Labs Limited</p>
        </footer>
    `,
    styleUrl: './footer.component.scss',
})
export class FooterComponent {
    pageNavItems = navItems;

    socialNavItems = [
        {
            link: 'https://www.linkedin.com/in/jakezneal',
            label: 'LinkedIn',
        },
        {
            link: 'https://github.com/jakezneal',
            label: 'GitHub',
        },
        {
            link: 'https://x.com/jakezneal',
            label: 'X',
        },
        {
            link: 'mailto:work@jakeneal.co.uk',
            label: 'Email',
        },
    ] satisfies NavItem[];

    currentYear = new Date().getFullYear();
}
