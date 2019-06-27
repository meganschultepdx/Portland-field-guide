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
  invasive_list: FirebaseListObservable<any[]>;
  searchOps: string = null;
  mustErradicate = false;
  plants;

  constructor(private router: Router, private databaseService: DatabaseService) { }

  ngOnInit() {
    this.invasive_list = this.databaseService.getInvasiveList();
    // this.native_list = this.databaseService.getNativeList();
    // this.community_list = this.databaseService.getCommunityList();
    this.plants = this.databaseService.getMustErradicate();
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
    if (nativeOrInvasive === 'native') {
      this.result_list = this.databaseService.getNativeList();
    } 
  }

  searchInvasive(nativeOrInvasive: string, erradicate: string, byInvasiveRank: string) {
    console.log(nativeOrInvasive);
    console.log(erradicate);
    console.log(byInvasiveRank);
    if (nativeOrInvasive === 'invasive' && erradicate === "true" && byInvasiveRank === "A" || byInvasiveRank === "B" || byInvasiveRank === "C" || byInvasiveRank === "D" || byInvasiveRank === "W") {
      this.result_list = null;
      this.plants = this.databaseService.getByRank(byInvasiveRank);
      console.log(this.plants);
    } else if (nativeOrInvasive === 'invasive' && byInvasiveRank === "A" || byInvasiveRank === "B" || byInvasiveRank === "C" || byInvasiveRank === "D" || byInvasiveRank === "W") {
      this.result_list = null;
      this.plants = this.databaseService.getByRankAndErradicate(byInvasiveRank);
      console.log(this.plants);
    } else if (nativeOrInvasive === 'invasive' && erradicate === "true") {
      this.result_list = null;
      this.mustErradicate = true;
      // this.databaseService.test();
      console.log(this.plants);
      console.log(this.invasive_list);
    } else if (nativeOrInvasive === 'invasive') {
      this.plants = null;
      this.result_list = this.databaseService.getInvasiveList();
    }
  }

}



// (value => {
//   console.log(value);
  
//   value.is_erradication_req === true;
// })