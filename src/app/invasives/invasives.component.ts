import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-invasives',
  templateUrl: './invasives.component.html',
  styleUrls: ['./invasives.component.css'],
  providers: [DatabaseService]
})
export class InvasivesComponent implements OnInit {
  invasive_list: FirebaseListObservable<any[]>;

  constructor(private router: Router, private databaseService: DatabaseService) { }

  ngOnInit() {
    this.invasive_list = this.databaseService.getInvasiveList();
  }

  // goToDetailPage(clickedFlower: Flower) {
  //   this.router.navigate(['details', clickedFlower.$key])
  // }

}
