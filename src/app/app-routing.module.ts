import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcomComponent } from './addcom/addcom.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DisplayComponent } from './display/display.component';
import { IndividualComponent } from './individual/individual.component';

const routes: Routes = [//{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'app', component: AppComponent },
  { path: 'addcom', component: AddcomComponent },
  { path: 'home', component: HomeComponent },
  { path: 'display', component: DisplayComponent },
  { path: 'individual', component: IndividualComponent }];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {}
