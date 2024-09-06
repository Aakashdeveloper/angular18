import { Component } from '@angular/core';
import { UpperCasePipe,CurrencyPipe} from '@angular/common';
import { MyupperPipe } from '../myupper.pipe';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [UpperCasePipe,CurrencyPipe,MyupperPipe,
    RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  heading="angular 1"
  price = 10
  isVisible = true
  isVisible2 = true
  color='blue'
}
