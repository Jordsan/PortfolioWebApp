import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    currTab = 0;

    setCurrTab(input: number): void {
        this.currTab = input;
    }

    getHighlightClass(input: number): string {
        if (input === this.currTab) {
            return 'selected';
        }
        else {
            return 'not-selected';
        }
    }
}
