import { Component } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { injectContentFiles } from '@analogjs/content';
import { RouterLink } from '@angular/router';

interface WorkPost {
    title: string;
}

@Component({
    standalone: true,
    imports: [NgFor, RouterLink, AsyncPipe],
    template: `
        <h2>Work</h2>

        <ul>
            @for (post of posts; track $index) {
                <li>
                    <a [routerLink]="['/work', post.slug]">{{ post.attributes.title }}</a>
                </li>
            }
        </ul>
    `,
})
export default class IndexPage {
    posts = injectContentFiles<WorkPost>();
}
