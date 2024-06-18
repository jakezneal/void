import { Component } from '@angular/core';
import { HeroComponent } from '../components/sections/hero/hero.component';
import { MarqueeComponent } from '../components/ui/marquee/marquee.component';
import { IntroComponent } from '../components/sections/intro/intro.component';
import { FeaturedProjectsComponent } from '../components/sections/featured-projects/featured-projects.component';
import { LogosComponent } from '../components/grids/logos/logos.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [HeroComponent, MarqueeComponent, IntroComponent, FeaturedProjectsComponent, LogosComponent],
    template: `
        <app-hero />
        <app-marquee />
        <app-intro>
            <div class="wrapper">
                <p>
                    👋 I've been working as a front-end & full-stack developer for over 12 years. I have a passion for technology, an eye for detail, and an
                    unwavering commitment to excellence.
                </p>
                <p>I help companies build mobile-first, scalable websites and web apps that are performant and accessible.</p>
                <p>I've worked on projects of all shapes and sizes for a variety of clients including:</p>
                <app-logos />
            </div>
        </app-intro>
        <app-featured-projects />
        <!-- <section>
            <p>[pricing]</p>
        </section> -->
        <!-- <section>
            <p>[book a chat]</p>
        </section> -->
    `,
})
export default class HomeComponent {}
