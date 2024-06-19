import { Component } from '@angular/core';

interface Skills {
    heading: string;
    items: string[];
}

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [],
    template: `
        <section class="skills">
            @for (item of skills; track $index) {
                <div>
                    <h4 class="heading">{{ item.heading }}</h4>
                    <ul class="list" role="list">
                        @for (skill of item.items; track $index) {
                            <li class="item">{{ skill }}</li>
                        }
                    </ul>
                </div>
            }
        </section>
    `,
    styleUrl: './skills.component.scss',
})
export class SkillsComponent {
    skills = [
        {
            heading: 'Languages',
            items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'PHP', 'GraphQL', 'Python', 'Golang'],
        },
        {
            heading: 'Libraries',
            items: ['Vue.js', 'Nuxt', 'React', 'Next.js', 'React Native', 'Angular', 'Bootstrap', 'Tailwind CSS'],
        },
        {
            heading: 'Testing',
            items: ['Vitest', 'Jest', 'Vue Test Utils', 'Testing Library', 'VRT', 'Mocha', 'Chai', 'Sinon'],
        },
        {
            heading: 'Build tools',
            items: ['Vite', 'Webpack', 'Rollup', 'Gulp', 'NPM Scripts'],
        },
        {
            heading: 'Design',
            items: ['Figma', 'Sketch', 'Adobe CS', 'Zeplin', 'InVision'],
        },
        {
            heading: 'Misc.',
            items: ['Git', 'Accessibility', 'Performance', 'AWS', 'Terraform', 'Monorepo', 'Storybook'],
        },
    ] satisfies Skills[];
}
