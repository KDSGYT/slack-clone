import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FeaturesComponent } from './components/features/features.component';
import { FeatureComponent } from './components/features/feature/feature.component';
import { ReliableComponent } from './components/reliable/reliable.component';
import { TalkToSalesButtonComponent } from './components/talk-to-sales-button/talk-to-sales-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroComponent,
    NavbarComponent,
    FeaturesComponent,
    FeatureComponent,
    ReliableComponent,
    TalkToSalesButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
