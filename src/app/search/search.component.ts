import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { log } from 'util';
declare var $: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [DatabaseService]
})
export class SearchComponent implements OnInit {
  result_list: FirebaseListObservable<any[]>;
  searchOps: string = null;
  results: string = null;
  constructor(private router: Router, private databaseService: DatabaseService) { }

  ngOnInit() {
    // this.invasive_list = this.databaseService.getInvasiveList();
    // this.native_list = this.databaseService.getNativeList();
    // this.community_list = this.databaseService.getCommunityList();
    $(document).ready(function(){
      $('select').formSelect();
    });
  }

  onChange(value: string) {
    $(document).ready(function(){
      $('select').formSelect();
    });
    if (value === 'native') {
      this.searchOps = 'native';
    } if (value === 'invasive') {
      this.searchOps = 'invasive';
    }
    console.log(this.searchOps);
  }

  searchNative(nativeOrInvasive: string, byType: string, byCommunity: string, hasFlowers: string){
    console.log("you clicked this button");
    if (nativeOrInvasive === 'native') {
      this.results = 'native';
      this.result_list = this.databaseService.getNativeList();
    }
  }

  searchInvasive(nativeOrInvasive: string, erradicate: string, byInvasiveRank: string) {
    console.log("you clicked this button");
    if (nativeOrInvasive === 'invasive') {
      this.results = 'invasive';
      this.result_list = this.databaseService.getInvasiveList();
    }
  }

}
