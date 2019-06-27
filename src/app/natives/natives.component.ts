import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from './../database.service';
// import { FirebaseListObservable } from 'angularfire2/database';

declare var $: any;

@Component({
  selector: 'app-natives',
  templateUrl: './natives.component.html',
  styleUrls: ['./natives.component.css'],
  providers: [DatabaseService]
})
export class NativesComponent implements OnInit {
  
  communityId;
  plantId;
  communityList;

  constructor(private dataService: DatabaseService, private router: Router) {
    // SAVE FOR LATER ------------------
    // 
    // private route: ActivatedRoute,
    // this.communityId = this.route.snapshot.paramMap.get('communityId');
    // this.plantId = this.route.snapshot.paramMap.get('plantId');
    // this.dataService = dataService;

    // SAVE FOR LATER -------------------
   }

  ngOnInit() {
    $(document).ready(function(){
      $('.collapsible').collapsible();
      });

      this.communityList = this.dataService.getCommunityList();
      console.log(this.dataService)
    }

    goToCommunityPage(communityId: string) {
      this.router.navigate(['native_communities', communityId])

    }

}