import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent implements OnInit {

  constructor(private Aroute:ActivatedRoute){}
  subject:string|undefined = ''

  ngOnInit(){
    this.Aroute.paramMap.subscribe(paramMap => {
      console.log(paramMap.get('name'))
      this.subject = paramMap.get('name')?.toString()
    })

  }

}
