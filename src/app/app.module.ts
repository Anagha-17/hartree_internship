import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcomComponent } from './addcom/addcom.component';
import { HomeComponent } from './home/home.component';
import { DisplayComponent } from './display/display.component';
import { IndividualComponent } from './individual/individual.component';

const routes: Routes = [{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'app', component: AppComponent },
  { path: 'addcom', component: AddcomComponent },
  { path: 'home', component: HomeComponent }];
 
@NgModule({
  declarations: [
    AppComponent,
    AddcomComponent,
    HomeComponent,
    DisplayComponent,
    IndividualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
