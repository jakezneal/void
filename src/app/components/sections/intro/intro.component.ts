import { Component } from '@angular/core';

@Component({
    selector: 'app-intro',
    standalone: true,
    imports: [],
    template: `
        <section class="intro">
            <ng-content />
        </section>
    `,
    styleUrl: './intro.component.scss',
})
export class IntroComponent {}
