import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterTeacherComponent } from './components/registerTeacher/registerTeacher.component';
import { DashboardPresencesComponent } from './components/dashboardPresences/dashboardPresences.component';
import { HomeComponent } from './components/home/home.component';
import { WellcomeComponent } from './components/wellcome/wellcome.component';
import { NewChildComponent } from './components/new-child/new-child.component';
import { HomeParentComponent } from './components/home-parent/home-parent.component';

const routes: Routes = [
  { path: '', component: WellcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterTeacherComponent },
  { path: 'registerChild', component: NewChildComponent },
  { path: 'home', component: HomeComponent,children:[
    { path: '', component: DashboardPresencesComponent },
    { path: 'dashboard-presences', component: DashboardPresencesComponent },
  ] },
  { path: 'homeParent', component: HomeParentComponent }
  
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
