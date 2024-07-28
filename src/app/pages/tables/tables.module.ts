import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbPopoverModule, NbSelectModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { FsIconComponent } from './tree-grid/tree-grid.component';
import { AssignPopoverFormComponent } from './open-incidents-tab/assign-form.component';

@NgModule({
  imports: [
    NgModule,
    NbSelectModule,
    NbCardModule,
    NbTreeGridModule,
    NbPopoverModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    FsIconComponent,
    AssignPopoverFormComponent,

  ],
})
export class TablesModule { }
