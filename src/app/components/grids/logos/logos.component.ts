import { Component } from '@angular/core';

interface Client {
    logo: string;
    name: string;
}

@Component({
    selector: 'app-logos',
    standalone: true,
    imports: [],
    template: `
        <div class="" role="image">
            <ul class="list" role="list">
                @for (item of clients; track $index) {
                    <li class="item">
                        <img [src]="item.logo" [alt]="item.name" />
                    </li>
                }
            </ul>
        </div>
    `,
    styleUrl: './logos.component.scss',
})
export class LogosComponent {
    clients = [
        {
            logo: '/images/logos/zermatt-matterhorn.png',
            name: 'Zermatt Matterhorn',
        },
        {
            logo: '/images/logos/astound-digital.svg',
            name: 'Astound Digital',
        },
        {
            logo: '/images/logos/yourparkingspace.svg',
            name: 'YourParkingSpace',
        },
        {
            logo: '/images/logos/mainline-menswear.svg',
            name: 'Mainline Menswear',
        },
        {
            logo: '/images/logos/duke-and-dexter.svg',
            name: 'Duke + Dexter',
        },
        {
            logo: '/images/logos/burylco-logo.png',
            name: 'BuryLCO',
        },
        {
            logo: '/images/logos/denovo-digital.png',
            name: 'Denovo Digital',
        },
        {
            logo: '/images/logos/lemon-zest.png',
            name: 'Lemon Zest',
        },
        {
            logo: '/images/logos/trunkbbi.svg',
            name: 'TrunkBBI',
        },
        {
            logo: '/images/logos/the-garden.svg',
            name: 'The Garden',
        },
        {
            logo: '/images/logos/buyassociation.svg',
            name: 'BuyAssociation',
        },
    ] satisfies Client[];
}
