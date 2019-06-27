import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()

export class DatabaseService {
  native_list: FirebaseListObservable<any[]>;
  invasive_list: FirebaseListObservable<any[]>;
  community_list: FirebaseListObservable<any[]>;
  glossary_list: FirebaseListObservable<any[]>;
  plants: any[] = [];
  // words: any[] = [];
  community;

  constructor(private database: AngularFireDatabase) {
    this.native_list = database.list('native_plants/');
    this.invasive_list = database.list('invasive_plants/');
    this.community_list = database.list('communities/');
    this.glossary_list = database.list('glossary/');
    // console.log(this.glossary_list);
  }

  getGlossary() {
    return this.glossary_list;
  }

  getGlossaryByLetter(glossaryId: string) {
    return this.database.object('glossary/' + glossaryId);
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

  getCommunityById(communityId: string) {
    return this.database.object('communities/' + communityId);
  }

  getPlantsOfCommunity(communityName: string) {
    this.plants = [];
    this.getNativeList().subscribe(values=> {
      for (var i = 0; i < values.length; i ++) {
        if (values[i].plant_community.includes(communityName) === true) {
          this.plants.push(values[i]);
        }
      }
    });
    console.log(this.plants);
  }

  getByType(type: string) {
    this.plants = [];
    this.getNativeList().subscribe(values=> {
      for (var i = 0; i < values.length; i ++) {
        if (values[i].plant_type === type) {
          this.plants.push(values[i]);
        }
      }
    });
  }

  getByFlower() {
    this.plants = [];
    this.getNativeList().subscribe(values=> {
      for (var i = 0; i < values.length; i ++) {
        if (values[i].has_flowers === true) {
          this.plants.push(values[i]);
        }
      }
    });
  }

  getByCommunityTypeFlower(community: string, type: string) {
    this.plants = [];
    this.getNativeList().subscribe(values=> {
      for (var i = 0; i < values.length; i ++) {
        if (values[i].has_flowers === true && values[i].plant_community.includes(community) && values[i].plant_type === type) {
          this.plants.push(values[i]);
        }
      }
    });
  }

  getByCommunityType(community: string, type: string) {
    this.plants = [];
    this.getNativeList().subscribe(values=> {
      for (var i = 0; i < values.length; i ++) {
        if (values[i].plant_type === type && values[i].plant_community.includes(community)) {
          this.plants.push(values[i]);
        }
      }
    });
  }

  getByCommunityFlower(community: string) {
    this.plants = [];
    this.getNativeList().subscribe(values=> {
      for (var i = 0; i < values.length; i ++) {
        if (values[i].has_flowers === true && values[i].plant_community.includes(community)) {
          this.plants.push(values[i]);
        }
      }
    });
  }

  getByTypeFlower(type: string) {
    this.plants = [];
    this.getNativeList().subscribe(values=> {
      for (var i = 0; i < values.length; i ++) {
        if (values[i].has_flowers === true && values[i].plant_type === type) {
          this.plants.push(values[i]);
        }
      }
    });
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
