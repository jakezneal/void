import { Component } from '@angular/core';

@Component({
    selector: 'app-marquee',
    standalone: true,
    imports: [],
    template: `
        <div class="marquee">
            <h2 class="title">Technologies I use</h2>
            <ul class="list" role="list">
                @for (item of technologies; track $index) {
                    <li class="item">{{ item }}</li>
                }
            </ul>
            <ul class="list" role="list" aria-hidden="true">
                @for (item of technologies; track $index) {
                    <li class="item">{{ item }}</li>
                }
            </ul>
        </div>
    `,
    styleUrl: './marquee.component.scss',
})
export class MarqueeComponent {
    technologies = [
        'JavaScript',
        'TypeScript',
        'Vue.js',
        'React',
        'Nuxt',
        'Next.js',
        'React Native',
        'Tailwind',
        'Vitest',
        'Storybook',
        'Terraform',
        'AWS',
        'GraphQL',
        'Shopify',
    ];
}
