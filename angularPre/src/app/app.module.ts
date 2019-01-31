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
import { MatToolbarModule,MatStepperModule, MatButtonModule, MatCardModule, MatInputModule, MatDialogModule, MatTableModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatSidenavModule, MatListModule, MatCheckboxModule, MatRadioModule } from '@angular/material';
import { RegisterTeacherComponent } from './components/registerTeacher/registerTeacher.component';
import { TeacherService } from './shared/services/teacher.service';
import { HellperService } from './shared/services/hellper.service';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,LoginComponent,RegisterTeacherComponent
  ],
  imports: [
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
    ,FormsModule
  ],
  providers: [TeacherService,HellperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
