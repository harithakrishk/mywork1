import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FrpasswordComponent } from './frpassword/frpassword.component';
import { FbComponent } from './fb/fb.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { LoopstmtComponent } from './loopstmt/loopstmt.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AssigncolorComponent } from './assigncolor/assigncolor.component';
import { StudentsComponent } from './students/students.component';
import { UserRegComponent } from './user-reg/user-reg.component';

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ShowdetailsComponent } from './showdetails/showdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FrpasswordComponent,
    FbComponent,
    LoginComponent,
    LoopstmtComponent,
    AssigncolorComponent,
    StudentsComponent,
    UserRegComponent,
    ShowdetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,

    HttpClientModule,
    
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
