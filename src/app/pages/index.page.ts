import { Component } from '@angular/core';
import { HeroComponent } from '../components/sections/hero/hero.component';
import { MarqueeComponent } from '../components/ui/marquee/marquee.component';
import { IntroComponent } from '../components/sections/intro/intro.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [HeroComponent, MarqueeComponent, IntroComponent],
    template: `
        <app-hero />
        <app-marquee />
        <app-intro />
    `,
})
export default class HomeComponent {}
