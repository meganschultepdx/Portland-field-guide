import { Component, OnInit, Input } from '@angular/core';
import { DatabaseService } from '../database.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
declare var $: any;

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.css'],
  providers: [DatabaseService]
})

export class GlossaryComponent implements OnInit {
  words: any[] = [];
  definition;
  glossary;

  constructor(private databaseService: DatabaseService) {
  }
  selectedLetter;
  alphabetLetter = null;

  ngOnInit() {
    this.glossary = this.databaseService.getGlossary();
    $(document).ready(function(){
      $('.collapsible').collapsible();
    });
  }

  showDiv(input: string) {
    this.words = [];
    this.alphabetLetter = input;
    this.selectedLetter = this.databaseService.getGlossaryByLetter(input);
    this.selectedLetter.subscribe( x => {
      this.definition = x.definition;
      console.log(this.definition);
      x.definition.forEach(function(element) {
        this.words.push(element);
        console.log(this.words);
      }
    });
  }
}
