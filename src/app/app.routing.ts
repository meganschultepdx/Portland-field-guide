import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { NativesComponent } from './natives/natives.component';
import { InvasivesComponent } from './invasives/invasives.component';
import { IdGuideComponent } from './id-guide/id-guide.component';
import { AboutComponent } from './about/about.component';
import { GlossaryComponent } from './glossary/glossary.component';

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
        path: 'idGuide',
        component: IdGuideComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'glossary',
        component: GlossaryComponent
      },
    ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
