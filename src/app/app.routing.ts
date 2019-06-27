import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { NativesComponent } from './natives/natives.component';
import { InvasivesComponent } from './invasives/invasives.component';
import { IdGuideComponent } from './id-guide/id-guide.component';
import { AboutComponent } from './about/about.component';
import { GlossaryComponent } from './glossary/glossary.component';
import { PlantDetailComponent } from './plant-detail/plant-detail.component';
import { NativesListComponent } from './natives-list/natives-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'glossary',
    component: GlossaryComponent
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
  },
  {
    path: 'idGuide/glossary',
    component: GlossaryComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
