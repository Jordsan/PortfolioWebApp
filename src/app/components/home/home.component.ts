import { Component, OnInit } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    animations: [
        // trigger('slideIn', [
        //     state('in', style({ transform: 'translateX(0)' })),
        //     transition('void => *', [
        //         style({ transform: 'translateX(-100%)' }),
        //         animate(250)
        //     ]),
        //     transition('* => void', [
        //         animate(250, style({ transform: 'translateX(-100%)' }))
        //     ])
        // ]),
        trigger('fadeIn', [
            state('in', style({ opacity: 1 })),
            transition('void => *', [
                style({ opacity: 0 }),
                animate('150ms 150ms')
            ]),
            transition('* => void', [
                animate(100, style({ opacity: 0 }))
            ])
            // state('icon-hovered', style({
            //     opacity: 1
            // })),
            // state('icon-not-hovered', style({
            //     opacity: 0
            // })),
            // transition('icon-not-hovered => icon-hovered', animate('250ms ease-in')),
            // transition('icon-hovered => icon-not-hovered', animate('250ms ease-out'))
        ]),
        trigger('hoverIcon', [
            state('icon-hovered', style({
                transform: 'scale(3.6)', opacity: 0.05
            })),
            state('icon-not-hovered', style({
                transform: 'scale(1)', opacity: 1
            })),
            transition('icon-not-hovered => icon-hovered', animate('250ms ease-in')),
            transition('icon-hovered => icon-not-hovered', animate('250ms ease-out'))
        ])
    ]
})
export class HomeComponent implements OnInit {

    hoverHomeVal: boolean;
    hoverPhoneVal: boolean;
    hoverEmailVal: boolean;
    hoverResumeVal: boolean;
    hoverLinkedInVal: boolean;
    hoverGithubVal: boolean;

    hoverVal: boolean;

    constructor() { }

    ngOnInit() {
        this.hoverHomeVal = false;
        this.hoverPhoneVal = false;
        this.hoverEmailVal = false;
        this.hoverResumeVal = false;
        this.hoverLinkedInVal = false;
        this.hoverGithubVal = false;
    }

    isHovered(input: string): string {
        switch (input) {
            case 'home': {
                const val = this.hoverHomeVal ? 'icon-hovered' : 'icon-not-hovered';
                return val;
            }
            case 'phone': {
                const val = this.hoverPhoneVal ? 'icon-hovered' : 'icon-not-hovered';
                return val;
            }
            case 'email': {
                const val = this.hoverEmailVal ? 'icon-hovered' : 'icon-not-hovered';
                return val;
            }
            case 'resume': {
                const val = this.hoverResumeVal ? 'icon-hovered' : 'icon-not-hovered';
                return val;
            }
            case 'linkedin': {
                const val = this.hoverLinkedInVal ? 'icon-hovered' : 'icon-not-hovered';
                return val;
            }
            case 'github': {
                const val = this.hoverGithubVal ? 'icon-hovered' : 'icon-not-hovered';
                return val;
            }
        }
    }

    hoverHome(): void {
        this.hoverHomeVal = !this.hoverHomeVal;
    }

    hoverPhone(): void {
        this.hoverPhoneVal = !this.hoverPhoneVal;
    }

    hoverEmail(): void {
        this.hoverEmailVal = !this.hoverEmailVal;
    }

    hoverResume(): void {
        this.hoverResumeVal = !this.hoverResumeVal;
    }

    hoverLinkedIn(): void {
        this.hoverLinkedInVal = !this.hoverLinkedInVal;
    }

    hoverGithub(): void {
        this.hoverGithubVal = !this.hoverGithubVal;
    }
}
