import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-natives-list',
  templateUrl: './natives-list.component.html',
  styleUrls: ['./natives-list.component.css'],
  providers: [DatabaseService]
})
export class NativesListComponent implements OnInit {
  native_list: FirebaseListObservable<any[]>;

  selectedCommunity = null;

  constructor(private router: Router, private databaseService: DatabaseService) { }

  ngOnInit() {
    this.native_list = this.databaseService.getNativeList();

    this.community_list = this.databaseService.getCommunityList();
  }

}
