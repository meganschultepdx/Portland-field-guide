import { Component, OnInit } from '@angular/core';
// import { NativeList } from '../native_list.model';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
declare let $: any;

@Component({
  selector: 'app-plant-of-day',
  templateUrl: './plant-of-day.component.html',
  styleUrls: ['./plant-of-day.component.css'],
  providers: [DatabaseService]
})
export class PlantOfDayComponent implements OnInit {

  ngOnInit() {
    $(document).ready(function(){
      $('.collapsible').collapsible();
    });
  }
  
}

// native_list: FirebaseListObservable<any[]>;
// currentRoute: string = this.router.url;

// constructor(private router: Router, private databaseService: DatabaseService) { }

// ngOnInit() {
//   this.native_list = this.databaseService.getNativeList();
// }