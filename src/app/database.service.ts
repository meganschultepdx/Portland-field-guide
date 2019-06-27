import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { log } from 'util';

@Injectable()
export class DatabaseService {
  native_list: FirebaseListObservable<any[]>;
  invasive_list: FirebaseListObservable<any[]>;
  community_list: FirebaseListObservable<any[]>;
  // erradicate_list: AngularFireList<any[]>;
  plants: any[] = [];

  constructor(private database: AngularFireDatabase) {
    this.native_list = database.list('native_plants/');
    this.invasive_list = database.list('invasive_plants/');
    this.community_list = database.list('communities/');
  }

  getNativeList() {
    return this.native_list;
  }

  getPlants() {
    this.getInvasiveList().subscribe(values=> {
      console.log(values);
    });
  }

  getMustErradicate() {
    this.getInvasiveList().subscribe(values=> {
      for (var i = 0; i < values.length; i ++) {
        if (values[i].is_erradication_req === true) {
          this.plants.push(values[i]);
        }
      }
      console.log(this.plants);
      return this.plants;
    });
  }

  getByRank(rank: string) {
    this.getInvasiveList().subscribe(values=> {
      for (var i = 0; i < values.length; i ++) {
        if (values[i].invasive_rank === rank) {
          this.plants.push(values[i]);
        }
      }
      console.log(this.plants);
      return this.plants;
    });
  }

  getByRankAndErradicate(rank: string) {
    this.getInvasiveList().subscribe(values=> {
      for (var i = 0; i < values.length; i ++) {
        if (values[i].invasive_rank === rank && values[i].is_erradication_req === true) {
          this.plants.push(values[i]);
        }
      }
      console.log(this.plants);
      return this.plants;
    });
  }



  getInvasiveList() {
    return this.invasive_list;
  }

  getCommunityList() {
    return this.community_list;
  }

  // getFlowerById(flowerId: number) {
  //   return this.database.object('flowers/' + flowerId);
  // }

  // test() {
  //   // return this.invasive_list;
  //   console.log(this.database.list('/invasive_plants').$ref.orderByChild('is_erradication_req').equalTo(true))

  // }
}

// this.invasive_list.orderByChild('is_erradication_req').equalTo(true);
// return this.database.list('/invasive_plants', ref => ref.orderByChild('is_erradication_req').equalTo(true));

// let ref = database.list("invasive_plants");
// ref("value", function(snapshot) {
//   console.log(snapshot.val());.child('invasive_plants').orderByChild('is_erradication_req').equalTo(true).on
//   snapshot.forEach(function(data) {
//       console.log(data.key);
//   });
// });