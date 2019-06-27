import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { NativesComponent } from './natives/natives.component';
import { InvasivesComponent } from './invasives/invasives.component';
import { PlantOfDayComponent } from './plant-of-day/plant-of-day.component';
import { IdGuideComponent } from './id-guide/id-guide.component';
import { AboutComponent } from './about/about.component';
import { PlantDetailComponent } from './plant-detail/plant-detail.component';
import { NativesListComponent } from './natives-list/natives-list.component';

const appRoutes: Routes = [
  {
      path: '',
      component: HomeComponent
    },
    {
      path: 'search',
      component: SearchComponent
    },
    {
      path: 'native_communities',
      component: NativesComponent
    },
    {
      path: 'invasives',
      component: InvasivesComponent
    },
    {
      path: 'plantOfDay',
      component: PlantOfDayComponent
    },
    {
      path: 'idGuide',
      component: IdGuideComponent
    },
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: 'native_communities/:communityId',
      component: NativesListComponent
    },
    {
      path: 'native_communities/:communityId/plants/:plantId',
      component: PlantDetailComponent
    }
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
