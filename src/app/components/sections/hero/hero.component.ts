import { Component } from '@angular/core';

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [],
    template: `
        <section class="hero wrapper">
            <h1 class="title">
                <span class="outline clear-after flex">I'm a</span>
                front-end
                <span class="brand-tertiary clear-before">&</span>
                full-stack developer
                <span class="outline clear-before flex available">
                    <a href="#">
                        available for hire
                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2_26)">
                                <path d="M44 46L44 0" stroke="currentColor" stroke-width="4" stroke-miterlimit="10" />
                                <path d="M46 2L2.28882e-05 2" stroke="currentColor" stroke-width="4" stroke-miterlimit="10" />
                                <path d="M1.5 44.5L44 2" stroke="currentColor" stroke-width="4" stroke-miterlimit="10" />
                            </g>
                        </svg>
                    </a>
                </span>
            </h1>
            <img src="/images/me.jpg" alt="Photo of Jake Neal" class="photo" width="300" height="300" />
        </section>
    `,
    styleUrl: './hero.component.scss',
})
export class HeroComponent {}
