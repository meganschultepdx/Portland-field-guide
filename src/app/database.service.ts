import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// import { log } from 'util';

@Injectable()
export class DatabaseService {
  native_list: FirebaseListObservable<any[]>;
  invasive_list: FirebaseListObservable<any[]>;
  community_list: FirebaseListObservable<any[]>;
  plants: any[] = [];

  constructor(private database: AngularFireDatabase) {
    this.native_list = database.list('native_plants/');
    this.invasive_list = database.list('invasive_plants/');
    this.community_list = database.list('communities/');
  }

  getNativeList() {
    return this.native_list;
  }

  getInvasiveList() {
    return this.invasive_list;
  }
  
  getCommunityList() {
    return this.community_list;
  }

  getMustErradicate() {
    this.plants = [];
    this.getInvasiveList().subscribe(values=> {
      for (var i = 0; i < values.length; i ++) {
        if (values[i].is_erradication_req === true) {
          
          this.plants.push(values[i]);
        }
      }
    });
  }

  getByRank(rank: string) {
    this.plants = [];
    this.getInvasiveList().subscribe(values=> {
      for (var i = 0; i < values.length; i ++) {
        if (values[i].invasive_rank === rank) {
          this.plants.push(values[i]);
        }
      }
    });
  }

  getByRankAndErradicate(rank: string) {
    this.plants = [];
    this.getInvasiveList().subscribe(values=> {
      for (var i = 0; i < values.length; i ++) {
        if (values[i].invasive_rank === rank && values[i].is_erradication_req === true) {
          this.plants.push(values[i]);
        }
      }
    });
  }
}
