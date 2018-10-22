import { QUOTES } from '../quotes';
import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuotes = new QUOTES(0,'','',new Date(),0,0,"",)
  
  @Output() addQuotes=new EventEmitter()

  submitQuote(){
    this.addQuotes.emit(this.newQuotes)
    this.newQuotes= new QUOTES(0,'','',new Date(),0,0,"",)
  }
  
  constructor() { }

  ngOnInit() {
  }

}