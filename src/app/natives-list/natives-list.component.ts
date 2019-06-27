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

  constructor(private databaseService: DatabaseService, private route: ActivatedRoute, private database: AngularFireDatabase) {
    this.plants = database.list('native_plants/')
   }

  ngOnInit() {
    // this.communityId = this.route.snapshot.paramMap.get('communityId');
    this.route.params.forEach((urlParameters) => {
      this.communityId = urlParameters['communityId'];
    })

    this.database.list('/native_plants', { preserveSnapshot: true}).subscribe(snapshots=>{snapshots.forEach (snapshot=>{console.log(snapshot.key, snapshot.val())
      });
    })
    // this.native_list = this.databaseService.getNativeList();
    // this.community_list = this.databaseService.getCommunityList();
    this.communityName = this.databaseService.getCommunityName(this.communityId);
    this.selectedCommunity = this.databaseService.getCommunityById(this.communityId);
    this.databaseService.getPlantsOfCommunity();
    // this.plants = this.databaseService.plants;
    this.communityName = this.selectedCommunity.name;
    console.log(this.communityName);
    console.log(this.selectedCommunity);
    console.log(this.communityId);
    console.log(this.plants);
  }
  // setTimeout(() => (console.log(this.communityName)), 3000);
  // console.log(this.communityName);
  // console.log(this.selectedCommunity);
  // console.log(this.communityId);
  // console.log(this.plants);
}