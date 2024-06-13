import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/layout/header/header.component';
import { gsap } from 'gsap';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, HeaderComponent],
    template: `
        <app-header></app-header>
        <main>
            <router-outlet></router-outlet>
        </main>
        <!-- <footer>footer goes here</footer> -->
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
        const links = document.querySelectorAll('a');

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

        // Loop through each link and add a mouseenter/mouseleave event listener to scale up/down the cursor size.
        links.forEach((link) => {
            link.addEventListener('mouseenter', () => {
                gsap.to(cursor, 1, {
                    scale: 1.6,
                    duration: 0.1,
                });
            });

            link.addEventListener('mouseleave', () => {
                gsap.to(cursor, 1, {
                    scale: 1,
                    duration: 0.1,
                });
            });
        });
    }
}
