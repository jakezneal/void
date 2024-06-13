import { Component } from '@angular/core';
import { HeroComponent } from '../components/sections/hero/hero.component';
import { MarqueeComponent } from '../components/ui/marquee/marquee.component';
import { IntroComponent } from '../components/sections/intro/intro.component';
import { FeaturedProjectsComponent } from '../components/sections/featured-projects/featured-projects.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [HeroComponent, MarqueeComponent, IntroComponent, FeaturedProjectsComponent],
    template: `
        <app-hero />
        <app-marquee />
        <app-intro />
        <app-featured-projects />
    `,
})
export default class HomeComponent {}
