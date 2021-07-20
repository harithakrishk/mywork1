import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';
import {register} from './user-reg.model';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent implements OnInit {

  constructor( private serve:DataserviceService) { }

  ngOnInit(): void {
  }
  regs=new register()
  message:any
  insertdata(){
    // console.log(this.regs)
    this.serve.datainsert(this.regs).subscribe(result=>{
      this.message=result
    })
   
  }
}
