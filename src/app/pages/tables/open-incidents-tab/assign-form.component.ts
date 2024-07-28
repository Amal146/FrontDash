import { Component, OnInit } from "@angular/core";
import { ApplicationService } from "../../../service/application/application-service.service";
import { UserService } from "../../../service/user/user-service.service";
import { Application } from "../../../model/application";
import { NbComponentStatus, NbToastrService } from "@nebular/theme";
import { emitWarning } from "process";

@Component({
  selector: "ngx-popover-form",
  template: `<div class="p-4">
      <button type="submit" class="btn btn-primary w-100">Send</button>
  </div>`,
})
export class AssignPopoverFormComponent implements OnInit {
  
  constructor(
    private applicationService: ApplicationService,
    private userService: UserService,
    private toastrService: NbToastrService,
  ) {}

  ngOnInit(): void {
    
  }
 
  
  showSuccess() {
    this.toastrService.show('Task assigned successfully ', 'Success', { status: 'success' });
  }
  
  
  onSubmit() {
      
    
  }
}
