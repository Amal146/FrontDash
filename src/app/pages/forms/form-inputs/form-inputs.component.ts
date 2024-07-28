import { Component, OnInit } from '@angular/core';
import { Incident } from '../../../model/incident';
import { Application } from '../../../model/application';
import { ActivatedRoute, Router } from '@angular/router';
import { IncidentService } from '../../../service/incident/incident-service.service';
import { ApplicationService } from '../../../service/application/application-service.service';
import { UserService } from '../../../service/user/user-service.service';
import { ToastrComponent } from '../../modal-overlays/toastr/toastr.component';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
})
export class FormInputsComponent implements OnInit{
  incident: Incident = new Incident();
  applications: Application[] = [];
  emailError: boolean = false;
  reportedByEmail: string = '';
  resolvedByEmail: string = '';
  appId = 0;

  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';
  
  constructor(
    private toastrService : NbToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private incidentService: IncidentService,
    private applicationService: ApplicationService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.loadApplications();
  }

  loadApplications() {
       this.applicationService.getAppList().subscribe((apps) => { 
       this.applications = apps.map((app) => app);      
       console.log(this.applications);
    });
   }
  
  showSuccess() {
    this.toastrService.show('Incident added successfully ', 'Success', { status: 'success' });
  }


  validateUserEmail(email: string) {
    if (!email) return;
    this.userService.getUserByEmail(email).subscribe(
      (user) => (this.emailError = !user),
    );
  }
  onSubmit() {
    console.log(this.appId);
    this.applicationService.getAppById(this.appId).subscribe({
      next: res => {
        this.incident.application = res; // Assign the fetched user to reportedBy
      },
      error: err => {
        console.error('Error fetching user:', err);
        alert('Invalid application');
      }
    });

    this.userService.getUserByEmail(this.reportedByEmail).subscribe({
      next: res => {
        this.incident.reportedBy = res; // Assign the fetched user to reportedBy
      },
      error: err => {
        console.error('Error fetching user:', err);
        alert('Invalid reporter email address');
      }
    });
    if (this.resolvedByEmail != '')
    {this.userService.getUserByEmail(this.resolvedByEmail).subscribe({
      next: res => {
        this.incident.resolvedBy = res; // Assign the fetched user to reportedBy
      },
      error: err => {
        console.error('Error fetching user:', err);
        alert('Invalid resolver email address');
      }
    });}
    this.incident.reportedAt = new Date();
    this.incident.status = 'Open';
    console.log(this.incident); // Log the incident with the assigned user
    this.showSuccess();
    this.incidentService.createIncident(this.incident).subscribe(result => this.gotoIncidentList());

  }

  
  

  gotoIncidentList() {
    this.router.navigate(['/pages/tables/smart-table']);
  }
}
