import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-logout',
  templateUrl: './logout.component.html',
})
export class NgxLogoutComponent implements OnInit{
    constructor(private router: Router){

    }
    ngOnInit(): void {
        if (window.localStorage.getItem('jwtToken')){
            window.localStorage.removeItem('jwtToken');
        }
        if (window.localStorage.getItem('currentUser')){
            window.localStorage.removeItem('currentUser');
        }

        this.router.navigate(['./auth/login']);
        console.log('success');
    }
}
