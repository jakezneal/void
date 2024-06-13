import { Component } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { MarkdownComponent, injectContent } from '@analogjs/content';

interface WorkPost {
    title: string;
}

@Component({
    standalone: true,
    imports: [MarkdownComponent, NgIf, AsyncPipe],
    template: `
        <div *ngIf="post$ | async as post">
            <h2>{{ post.attributes.title }}</h2>

            <analog-markdown [content]="post.content" />
        </div>
    `,
})
export default class WorkPostPage {
    post$ = injectContent<WorkPost>();
}
