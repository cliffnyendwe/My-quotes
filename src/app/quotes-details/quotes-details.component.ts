import { Component, OnInit,Input } from '@angular/core';
import{QUOTES} from '../quotes'

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QUOTESDetailsComponent implements OnInit {
  public QuoteComplete;
  goalDelete(complete:boolean){
    this.QuoteComplete.emit(complete);
  }
  constructor() { }

  @Input() QUOTES:QUOTES;
  ngOnInit() {
  }

}
