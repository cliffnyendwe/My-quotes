import { Component } from '@angular/core';
import {QUOTES} from './quotes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    QUOTES = [
        new QUOTES(1,'Writing can be hard,but it doesnt have to be lonely','Learn from master of the craft'),
        new QUOTES(2,'One day i will find the right words, and they will be simple','Learn from the Dharma Bums'),
        new QUOTES(3, 'If there is a book that you want to read,but it hasnt been written yet,then you must write','Learn how to be creative'),
    

    ]
    constructor() { }
    ngOnInit() {
    }
  
  }
  