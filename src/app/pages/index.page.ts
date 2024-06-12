import { Component, signal } from '@angular/core';
import { HeroComponent } from '../components/sections/hero/hero.component';
import { MarqueeComponent } from '../components/ui/marquee/marquee.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [HeroComponent, MarqueeComponent],
    template: `
        <h1>Hello</h1>
        <app-hero />
    `,
})
export default class HomeComponent {}
