import { Component } from '@angular/core';
import { Aboutus } from "./aboutus/aboutus";

@Component({
  selector: 'app-home',
  imports: [Aboutus],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
