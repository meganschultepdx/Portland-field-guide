import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';
import { FirebaseListObservable } from 'angularfire2/database';
// declare var $: any;

@Component({
  selector: 'app-natives',
  templateUrl: './natives.component.html',
  styleUrls: ['./natives.component.css'],
  providers: [DatabaseService]
})
export class NativesComponent implements OnInit {
  native_list: FirebaseListObservable<any[]>;

  constructor(private router: Router, private databaseService: DatabaseService) { }

  ngOnInit() {
    this.native_list = this.databaseService.getNativeList();
    // $(document).ready(function(){
    //   $('.collapsible').collapsible();
    // });
  }

}

