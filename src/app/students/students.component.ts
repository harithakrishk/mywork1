import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  student=[
    {"name":"Krish","age":"21","place":"calicut","contact":"9087461239"},
    {"name":"Sreehari","age":"21","place":"calicut","contact":"8568769870"},
    {"name":"Krishna","age":"23","place":"calicut","contact":"9087344423"},
    {"name":"Haritha","age":"21","place":"calicut","contact":"8563239887"},
    {"name":"Rameez","age":"21","place":"calicut","contact":"8568765987"},
    {"name":"Kichu","age":"23","place":"calicut","contact":"9087344423"},
    {"name":"Sree","age":"21","place":"calicut","contact":"8546323987"},
  ]
  
  delete(x: any)
  {
    this.student.splice(x,1)
  }
  
}
