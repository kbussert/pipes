import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "";
  date: string = "";
  amount: number = 0;

  onNameChange(target: EventTarget) {
    this.name = (<HTMLInputElement>target).value;
  }

  onDateChange(target: EventTarget) {
    this.date = (<HTMLInputElement>target).value;
  }

  onAmountChange(target: EventTarget) {
    this.amount = parseFloat((<HTMLInputElement>target).value);
  }
}
