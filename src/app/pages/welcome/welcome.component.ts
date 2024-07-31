import { Component, OnInit } from '@angular/core';
import { NbMenuService } from '@nebular/theme';

@Component({
  selector: 'ngx-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  constructor(private menuService: NbMenuService) {
  }
  ngOnInit(): void {
    setTimeout(() => {
        this.menuService.navigateHome();
    }, 1000); 
  }
}
