import { Component } from '@angular/core';
import { TaurixAPIService } from './taurix-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Home';

  constructor(private taurixapieservice:TaurixAPIService){
      
  }

  
}
