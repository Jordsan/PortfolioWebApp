import { Component, OnInit, TemplateRef } from '@angular/core';
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
        trigger('slideIn', [
            state('in', style({ opacity: 1 })),
            transition('void => *', [
                style({ opacity: 0, transform: 'translateX(-150%)' }),
                animate('400ms ease-in')
            ]),
            transition('* => void', [
                animate('300ms ease-out', style({ opacity: 0, transform: 'translateX(100%)' }))
            ])
        ]),
        trigger('slideDown', [
            state('0', style({ transform: 'translateY(0)' })),
            state('1', style({ transform: 'translateY(560px)' })),
            transition('0 => 1', [
                animate('200ms ease-in', style({ transform: 'translateY(560px)' }))
            ]),
            transition('1 => 0', [
                animate('200ms 200ms ease-in')
            ])
        ]),
        trigger('fadeIn', [
            state('in', style({ opacity: 1, transform: 'scale(1.0)' })),
            transition('void => *', [
                style({ opacity: 0, transform: 'scale(.1)' }),
                animate('200ms 50ms ease-in')
            ]),
            transition('* => void', [
                animate('250ms ease-out', style({ opacity: 0, transform: 'scale(.1)' }))
            ])
        ]),
        trigger('hoverIcon', [
            state('icon-hovered', style({
                transform: 'scale(3.0)', opacity: 0.35
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

    educationMoreDetails: boolean;
    experienceMoreDetails1: boolean;
    experienceMoreDetails2: boolean;

    constructor() { }

    ngOnInit() {
        this.hoverHomeVal = false;
        this.hoverPhoneVal = false;
        this.hoverEmailVal = false;
        this.hoverResumeVal = false;
        this.hoverLinkedInVal = false;
        this.hoverGithubVal = false;

        this.educationMoreDetails = false;
        this.experienceMoreDetails1 = false;
        this.experienceMoreDetails2 = false;
    }

    educationClick(): void {
        this.educationMoreDetails = !this.educationMoreDetails;
    }

    experienceClick1(): void {
        this.experienceMoreDetails1 = !this.experienceMoreDetails1;
    }

    experienceClick2(): void {
        this.experienceMoreDetails2 = !this.experienceMoreDetails2;
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
