import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../model/user';
import { UserService } from '../../../service/user/user-service.service';
import { Application } from '../../../model/application';
import { ApplicationService } from '../../../service/application/application-service.service';

@Component({
  selector: 'ngx-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
})
export class ListComponent implements OnInit {
  users!: User[];
  applications!: Application[];


  constructor(
    private router: Router,
    private userService: UserService,
    private appService: ApplicationService

  ) {}

  ngOnInit(): void {
    this.userService.getUserList().subscribe(data => {
      this.users = data;
    });
    this.appService.getAppList().subscribe(data => {
      this.applications = data;
    });
  }
}
