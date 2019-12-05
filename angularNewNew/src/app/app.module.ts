import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { AccountService } from './shared/services/account.service';
import { TeacherService } from './shared/services/teacher.service';
import { HellperService } from './shared/services/hellper.service';
import { ChildService } from './shared/services/child.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AccountService,TeacherService,HellperService,ChildService],
  bootstrap: [AppComponent]
})
export class AppModule { }
