import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterTeacherComponent } from './components/registerTeacher/registerTeacher.component';
import { DashboardPresencesComponent } from './components/dashboardPresences/dashboardPresences.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterTeacherComponent },
  { path: 'home', component: HomeComponent,children:[
    { path: '', component: DashboardPresencesComponent },
    { path: 'dashboard-presences', component: DashboardPresencesComponent },
  ] },
  
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
