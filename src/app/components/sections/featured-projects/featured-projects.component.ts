import { Component } from '@angular/core';

interface WorkItem {
    client: string;
    technologies: string[];
}

@Component({
    selector: 'app-featured-projects',
    standalone: true,
    imports: [],
    template: `
        <section class="wrapper featured-projects">
            <h2 class="section-heading">Featured work</h2>
            <ol class="list">
                @for (item of work; track $index) {
                    <li class="item">
                        <article class="article">
                            <div class="meta">
                                <p class="client">{{ item.client }}</p>
                                <p class="technologies">{{ item.technologies.join(' / ') }}</p>
                            </div>
                            <a href="#" class="link">
                                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_15_213)">
                                        <path d="M44 46L44 0" stroke="#735CDD" stroke-width="4" stroke-miterlimit="10" />
                                        <path d="M46 2L0 2" stroke="#735CDD" stroke-width="4" stroke-miterlimit="10" />
                                        <path d="M1.5 44.5L44 2" stroke="#735CDD" stroke-width="4" stroke-miterlimit="10" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_15_213">
                                            <rect width="46" height="46" fill="white" transform="translate(0 46) rotate(-90)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </article>
                    </li>
                }
            </ol>
        </section>
    `,
    styleUrl: './featured-projects.component.scss',
})
export class FeaturedProjectsComponent {
    work = [
        {
            client: 'Zermatt Matterhorn',
            technologies: ['Vue.js', 'Nuxt'],
        },
        {
            client: 'YourParkingSpace',
            technologies: ['Vue.js', 'Nuxt'],
        },
        {
            client: 'Mainline Menswear',
            technologies: ['Vue.js', 'Nuxt'],
        },
        {
            client: 'Duke + Dexter',
            technologies: ['Shopify'],
        },
        {
            client: 'BuryLCO',
            technologies: ['Vue.js', 'Nuxt', 'Laravel'],
        },
    ] satisfies WorkItem[];
}
