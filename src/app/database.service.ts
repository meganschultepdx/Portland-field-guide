import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// import { NativeList} from './native_list.model';

@Injectable()

export class DatabaseService {
  native_list: FirebaseListObservable<any[]>;
  invasive_list: FirebaseListObservable<any[]>;
  community_list: FirebaseListObservable<any[]>;

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

  // getFlowerById(flowerId: number) {
  //   return this.database.object('flowers/' + flowerId);
  // }

}
