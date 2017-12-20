import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    hoverHomeVal: boolean;
    hoverPhoneVal: boolean;
    hoverEmailVal: boolean;
    hoverLinkedInVal: boolean;
    hoverGithubVal: boolean;

    constructor() { }

    ngOnInit() {
        this.hoverHomeVal = false;
        this.hoverPhoneVal = false;
        this.hoverEmailVal = false;
        this.hoverLinkedInVal = false;
        this.hoverGithubVal = false;
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

    hoverLinkedIn(): void {
        this.hoverLinkedInVal = !this.hoverLinkedInVal;
    }

    hoverGithub(): void {
        this.hoverGithubVal = !this.hoverGithubVal;
    }
}
