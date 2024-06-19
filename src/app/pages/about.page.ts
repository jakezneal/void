import { Component } from '@angular/core';
import { IntroComponent } from '../components/sections/intro/intro.component';
import { SkillsComponent } from '../components/sections/skills/skills.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [IntroComponent, SkillsComponent],
    template: `
        <div class="wrapper">
            <h2 class="section-heading">About</h2>
            <app-intro>
                <p>👋 Hello! My name is Jake Neal, and I'm a freelance front-end & full-stack developer based in Manchester, UK.</p>
            </app-intro>

            <h3 class="section-heading">Skills</h3>
            <app-skills />
        </div>
    `,
})
export default class AboutComponent {}
