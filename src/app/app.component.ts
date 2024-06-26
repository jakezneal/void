import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { gsap } from 'gsap';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, FooterComponent],
    template: `
        <app-header></app-header>
        <main>
            <router-outlet></router-outlet>
        </main>
        <app-footer />
        <div class="cursor"></div>
    `,
    styles: [
        `
            .cursor {
                display: none;
                position: fixed;
                left: 0;
                border-radius: 50%;
                pointer-events: none;
                transition: transform 0.1s;
                background: var(--brand-colour-tertiary);
                top: 0;
                width: 15px;
                height: 15px;
                z-index: 999;

                @media (min-width: 992px) {
                    display: block;
                }
            }
        `,
    ],
})
export class AppComponent implements OnInit {
    ngOnInit() {
        gsap.set('.cursor', {
            xPercent: -50,
            yPercent: -50,
        });

        const cursor = document.querySelector('.cursor');

        let xTo = gsap.quickTo(cursor, 'x', {
            duration: 0.3,
            ease: 'power3',
        });

        let yTo = gsap.quickTo(cursor, 'y', {
            duration: 0.3,
            ease: 'power3',
        });

        // Initialise the follow along cursor on mousemove.
        window.addEventListener('mousemove', (e) => {
            xTo(e.clientX);
            yTo(e.clientY);
        });
    }
}
