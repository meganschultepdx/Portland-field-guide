import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { NativesComponent } from './natives/natives.component';
import { InvasivesComponent } from './invasives/invasives.component';
import { PlantOfDayComponent } from './plant-of-day/plant-of-day.component';
import { IdGuideComponent } from './id-guide/id-guide.component';
import { AboutComponent } from './about/about.component';
import { MaterializeModule } from 'ng2-materialize';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    NativesComponent,
    InvasivesComponent,
    PlantOfDayComponent,
    IdGuideComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
