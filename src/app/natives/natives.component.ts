import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-natives',
  templateUrl: './natives.component.html',
  styleUrls: ['./natives.component.css']
})
export class NativesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.collapsible').collapsible();
    });
  }

}
