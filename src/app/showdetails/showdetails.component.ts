import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.component.html',
  styleUrls: ['./showdetails.component.css']
})
export class ShowdetailsComponent implements OnInit {

  constructor(private passed:DataserviceService) { }

  ngOnInit(): void {
    this.showdata()
    
  }
  x:any
  data:any
 
  showdata()
  {
 this.passed.getdata().subscribe(res=>{
   this.data=res
   console.log(this.data);
 })
  
   
  }
  deleted(i:any){
  this.passed.deletedata(i).subscribe(res=>{
    this.data.res;
  })
  }
  update(x:any,i:any){
    console.log(x)
    // this.regs.f_name=x.f_name
  }

}
