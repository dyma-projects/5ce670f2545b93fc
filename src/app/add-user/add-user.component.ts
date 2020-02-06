import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User} from '../shared/model/user.model';
import { UserService } from '../shared/services/user.service';
import { BehaviorSubject, Observable  } from "rxjs";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @ViewChild('input', {static: false}) public el: ElementRef;
 

  constructor(
    private userService : UserService
  ) {}

  ngOnInit() {
     
  }

  addUser() {
    const username = this.el.nativeElement.value;
    if (username) {
      this.el.nativeElement.value = '';
      this.userService.addUser(username);
    }
  }

}
