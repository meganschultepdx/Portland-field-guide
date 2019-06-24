import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { NativesComponent } from './natives/natives.component';
import { InvasivesComponent } from './invasives/invasives.component';
import { PlantOfDayComponent } from './plant-of-day/plant-of-day.component';
import { IdGuideComponent } from './id-guide/id-guide.component';
import { MissionComponent } from './mission/mission.component';
import { NavigationLinksComponent } from './navigation-links/navigation-links.component';

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
        path: 'natives',
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
        path: 'mission',
        component: MissionComponent
      },
      {
        path: 'navigation-links',
        component: NavigationLinksComponent
      }
    ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);