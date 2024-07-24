import { Component, OnInit } from '@angular/core';
import { Application } from '../../../model/application';
import { ApplicationService } from '../../../service/application/application-service.service';
import { NbDialogService } from '@nebular/theme';
import { DialogNamePromptComponent } from '../../modal-overlays/dialog/dialog-name-prompt/dialog-name-prompt.component';


@Component({
  selector: 'ngx-list',
  templateUrl: 'app-list.component.html',
  styleUrls: ['app-list.component.scss'],
})
export class AppListComponent implements OnInit {
  applications!: Application[];
  app: Application = new Application(); 



  constructor(
    private appService: ApplicationService,
    private dialogService: NbDialogService

  ) {}

  ngOnInit(): void {
    console.log(localStorage.getItem('CurrentUser'))
    this.appService.getAppList().subscribe(data => {
      this.applications = data;
    });
  }

  open3() {
    this.dialogService.open(DialogNamePromptComponent)
      .onClose.subscribe(name => {
        if (name) { // Check if name is valid
          this.app.name = name ;
          this.appService.createApp( this.app ).subscribe({
            next: () => {
              window.location.reload(); // Refresh the page
            },
            error: (err) => {
              console.error('Error creating app:', err);
            }
          });
        }
      });
  }
  
}
