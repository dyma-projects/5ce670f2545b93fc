import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/services/user.service';
import { BehaviorSubject } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit {
  title = 'projet5-service';
  constructor() { 


  }

  ngOnInit(){
	

  }
}
