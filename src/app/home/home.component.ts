import { Component,OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import {Router} from '@angular/router';
import {DataserviceService} from '../dataservice.service'
import { MyDirectiveDirective } from '../my-directive.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ChildComponent,
    MyDirectiveDirective
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  SuperAdmin = true
  Admin = false
  color='red'
  message = 'From Parent code'
  itemList:any[] = []

  selectedItem:string = '';

  constructor(private router:Router,
    private dataService:DataserviceService){}

  ngOnInit(): void {
    this.itemList = this.dataService.getData()
    
  }

  OnItemSelected(item:string){
    this.selectedItem = item
  }

  gotoCourse(){
    this.router.navigate(['/course'])
  }

  addNewItem(){
    const newItem = {id:this.itemList.length+1,name:`Item ${this.itemList.length +1}`}
    this.dataService.addData(newItem)
  }

}
