import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DatabaseService } from '../database.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Location } from '@angular/common';

@Component({
  selector: 'app-natives-list',
  templateUrl: './natives-list.component.html',
  styleUrls: ['./natives-list.component.css'],
  providers: [DatabaseService]
})
export class NativesListComponent implements OnInit {

  communityId: string = null;
  plants: FirebaseListObservable<any[]>;

  selectedCommunity;
  communityName;
  communityPlants: any[] = [];

  constructor(private databaseService: DatabaseService, private route: ActivatedRoute, private database: AngularFireDatabase) {
    this.plants = database.list('native_plants/')
   }

  ngOnInit() {

    this.route.params.forEach((urlParameters) => {
      this.communityId = urlParameters['communityId'];
    })

    this.selectedCommunity = this.databaseService.getCommunityById(this.communityId);

    this.selectedCommunity.subscribe( x => {
      this.communityName = x.name; 
      this.communityId = x.id;  
      console.log(this.communityName);
      this.databaseService.getNativeList().subscribe(values=> {
        for (var i = 0; i < values.length; i ++) {
          if (values[i].plant_community.includes(this.communityName) === true) {
            this.communityPlants.push(values[i]);
          }
        }
      });
    });
  }
}