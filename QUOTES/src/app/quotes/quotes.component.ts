import { Component, OnInit } from '@angular/core';
import{QUOTES} from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QUOTESComponent implements OnInit {
  ngOnInit(){

  }
  QUOTES = [
    new QUOTES(1,'Writing can be hard,but it doesnt have to be lonely','Learn from master of the craft',new Date(2018,3,14),0,0,'Steve Harvey'),
    new QUOTES(2,'One day i will find the right words, and they will be simple','Learn from the Dharma Bums',new Date(2018,2,18),0,0,'Robert Kiyosaki'),
    new QUOTES(3, 'If there is a book that you want to read,but it hasnt been written yet,then you must write','Learn how to be creative',new Date(2018,10,15),0,0,'Thomas Linar'),
]
new(newQuotes){
  this.QUOTES.push(newQuotes);
}
del(i){
  this.QUOTES.splice(i,1);
}
upVote(i){
  this.QUOTES[i].upVote+=1;
}
downVote(i){
  this.QUOTES[i].downVote+=1
}
}

