import { Component,OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


import { HeaderComponent } from './header/header.component';
import {FooterComponent } from './footer/footer.component';
import {HomeComponent} from './home/home.component';



@Component({
  selector:'app-root',
  standalone:true,
  imports:[
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FormsModule,
    CommonModule,
    RouterOutlet, RouterLink, RouterLinkActive 
  ],
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css'
})

export class AppComponent implements OnInit{
  title='Edureka'
  imgUrl="https://b.zmtcdn.com/data/pictures/4/307374/b2b03be3aba61b0f173aa23e1abdb42b.jpg"
  name=''

  constructor(){
    console.log("Constructor called")
  }

  ngOnInit():void{
    console.log('NgOninit called')

    this.title="Change Title"
  }

  changeMessage(){
    this.title="Change After Click"
  }

}