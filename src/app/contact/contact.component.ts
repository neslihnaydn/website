import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: `./contact.component.html`,
  styles: [
  ]
})
export class ContactComponent implements OnInit {
  name: string | undefined;
  email: string | undefined;
  message: string | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    const message = `My name is ${this.name}`;
    alert(message);
    //api call 
  }

}
