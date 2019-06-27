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
  plants = [];

  constructor(private router: Router, private databaseService: DatabaseService) { }

  ngOnInit() {
    this.invasive_list = this.databaseService.getInvasiveList();
    console.log(this.plants);
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
    if (nativeOrInvasive === 'invasive' && erradicate === 'true' && byInvasiveRank === 'A' || byInvasiveRank === 'B' || byInvasiveRank === 'C' || byInvasiveRank === 'D' || byInvasiveRank === 'W') {
      this.result_list = null;
      this.databaseService.getByRank(byInvasiveRank);
      this.plants = this.databaseService.plants;
      console.log('rank and erradicate');
      console.log(this.plants);
    } else if (nativeOrInvasive === 'invasive' && (erradicate === 'false' || erradicate === '') && byInvasiveRank === 'A' || byInvasiveRank === 'B' || byInvasiveRank === 'C' || byInvasiveRank === 'D' || byInvasiveRank === 'W') {
      this.result_list = null;
      this.databaseService.getByRankAndErradicate(byInvasiveRank);
      this.plants = this.databaseService.plants;
      console.log('rank');
      console.log(this.plants);
    } else if (nativeOrInvasive === 'invasive' && erradicate === 'true') {
      this.result_list = null;
      this.mustErradicate = true;
      console.log('erradicate');
      this.databaseService.getMustErradicate();
      this.plants = this.databaseService.plants;
      console.log(this.plants);
    } else if (nativeOrInvasive === 'invasive') {
      this.plants = null;
      this.result_list = this.databaseService.getInvasiveList();
      console.log('else');
    }
  }

}