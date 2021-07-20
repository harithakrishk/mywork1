import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  username:any
  password:any
  result=""
  login()
  {
    if(this.username=='harithakrish'&& this.password=='krish12345')
       {
          this.result="login successfully....."
       }
       else{
         
        this.result="Incorrect username and password login failed...!"
       }
  }

}
