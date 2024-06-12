import { Component } from '@angular/core';
import { HeroComponent } from '../components/sections/hero/hero.component';
import { MarqueeComponent } from '../components/ui/marquee/marquee.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [HeroComponent, MarqueeComponent],
    template: `
        <app-hero />
        <app-marquee />
    `,
})
export default class HomeComponent {}
