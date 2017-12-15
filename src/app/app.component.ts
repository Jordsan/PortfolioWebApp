import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    currTab;

    constructor(private router: Router) {

    }

    setCurrTab(input: number): void {
        this.currTab = input;
    }

    getHighlightClass(input: number): string {
        switch (input) {
            case 0: {
                if (this.router.url.includes('home')) {
                    return 'selected';
                }
                else {
                    return 'not-selected';
                }
            }
            case 1: {
                if (this.router.url.includes('about')) {
                    return 'selected';
                }
                else {
                    return 'not-selected';
                }
            }
            case 2: {
                if (this.router.url.includes('projects')) {
                    return 'selected';
                }
                else {
                    return 'not-selected';
                }
            }
        }
        if (input === this.currTab) {
            return 'selected';
        }
        else {
            return 'not-selected';
        }
    }
}
