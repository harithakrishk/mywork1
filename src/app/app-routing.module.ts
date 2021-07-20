import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrpasswordComponent} from './frpassword/frpassword.component'
import {  FbComponent } from './fb/fb.component'

const routes: Routes = [
  {path:'',component:FbComponent},
  {path:'paswrd',component:FrpasswordComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
