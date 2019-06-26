import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-id-guide',
  templateUrl: './id-guide.component.html',
  styleUrls: ['./id-guide.component.css']
})
export class IdGuideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.collapsible').collapsible();
    });
  }
}
