import { Component,OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { DataService } from '../services/data-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ChildComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  SuperAdmin = false
  Admin = true
  color='red'
  message = 'From Parent code'
  itemList:any[] = []

  selectedItem:string = '';

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.itemList = this.dataService.getData();
  }

  OnItemSelected(item:string){
    this.selectedItem = item
  }

  addNewItem(){
    const newItem = {id:this.itemList.length+1, name:`Item ${this.itemList.length + 1}`};
    this.dataService.addData(newItem);
    
  }

}
