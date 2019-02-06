import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './components/my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule,MatSelectModule,MatDialogRef,
  MatStepperModule, MatButtonModule,MatAutocompleteModule, MatCardModule, MatInputModule, MatDialogModule, MatTableModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatSidenavModule, MatListModule, MatCheckboxModule, MatRadioModule } from '@angular/material';
import { RegisterTeacherComponent } from './components/registerTeacher/registerTeacher.component';
import { TeacherService } from './shared/services/teacher.service';
import { HellperService } from './shared/services/hellper.service';
import { HttpClientModule } from  '@angular/common/http';
import { NewKindergardenComponent } from './components/new-kindergarden/new-kindergarden.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DashboardPresencesComponent } from './components/dashboardPresences/dashboardPresences.component';
import { PrecencesImageChildComponent } from './components/precencesImageChild/precencesImageChild.component';
import { HomeComponent } from './components/home/home.component';
import { NewChildComponent } from './components/new-child/new-child.component';
import { KindergardenChildrenComponent } from './components/kindergarden-children/kindergarden-children.component';
import { RequestParentComponent } from './components/request-parent/request-parent.component';
import { ShowPrecencesComponent } from './components/show-precences/show-precences.component';
import { SatisticComponent } from './components/satistic/satistic.component';
import { AlertParentComponent } from './components/alert-parent/alert-parent.component';
import { RegisterParentComponent } from './components/register-parent/register-parent.component';

@NgModule({
  declarations: [
    AppComponent,DashboardPresencesComponent,PrecencesImageChildComponent,HomeComponent,ShowPrecencesComponent,
    MyNavComponent,LoginComponent,RegisterTeacherComponent,NewKindergardenComponent,NewChildComponent,KindergardenChildrenComponent,RequestParentComponent,
    SatisticComponent,AlertParentComponent,RegisterParentComponent
  ],
  imports: [
    MatSelectModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatIconModule,MatStepperModule,
    MatProgressSpinnerModule, MatSidenavModule, MatListModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FlexLayoutModule
    ,FormsModule,HttpClientModule, DropDownsModule
  ],
  providers: [TeacherService,HellperService,{provide: MatDialogRef, useValue: {}}],
  bootstrap: [AppComponent],
  entryComponents: [NewKindergardenComponent]
})
export class AppModule { }
