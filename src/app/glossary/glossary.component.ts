import { Component, OnInit, Input } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.css'],
  // selector: 'ng-if-simple',
})

export class GlossaryComponent implements OnInit {

  constructor() { }

  alphabetLetter = null;

  showDiv(input: string) {
    this.alphabetLetter = input;
  }

  ngOnInit() {
    $(document).ready(function(){
      $('.collapsible').collapsible();
    });


}
}
