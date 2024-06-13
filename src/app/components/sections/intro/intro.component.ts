import { Component } from '@angular/core';
import { LogosComponent } from '../../grids/logos/logos.component';

@Component({
    selector: 'app-intro',
    standalone: true,
    imports: [LogosComponent],
    template: `
        <section class="wrapper intro">
            <p>
                👋 I've been working as a front-end & full-stack developer for over 12 years. I have a passion for technology, an eye for detail, and an
                unwavering commitment to excellence.
            </p>
            <p>I help companies build mobile-first, scalable websites and web apps that are performant and accessible.</p>
            <p>I've worked on projects of all shapes and sizes for a variety of clients including:</p>
            <app-logos />
        </section>
    `,
    styleUrl: './intro.component.scss',
})
export class IntroComponent {}
