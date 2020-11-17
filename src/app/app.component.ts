import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  minutes = 0;
  person = 'mark';
  message = '';

  ngOnInit(): void {
    this.message = $localize`:@@tsMsg:Hello World!`;
  }

  inc(i: number) {
    this.minutes = Math.min(5, Math.max(0, this.minutes + i));
  }
  mark() { this.person = 'mark'; }
  mary() { this.person = 'mary'; }
  other() { this.person = 'other'; }
}

