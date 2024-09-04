import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ChildComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  SuperAdmin = false
  Admin = true
  color='red'
  message = 'From Parent code'
  itemList = ['Item1','Item2','Item3','Item4']

  selectedItem:string = '';

  OnItemSelected(item:string){
    this.selectedItem = item
  }

}
