import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { TreeGridComponent } from './tree-grid/tree-grid.component';
import { AppInciTableComponent } from './app-assigned-incidents-tab/app-inci-table.component';
import { AppResInciTableComponent } from './app-resolved-incidents-tab/app-resolved-table.component';
import { OpenInciTableComponent } from './open-incidents-tab/open-inci-table.component';
import { AssignPopoverFormComponent } from './open-incidents-tab/assign-form.component';

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [
    {
      path: 'smart-table',
      component: SmartTableComponent,
    },
    {
      path: 'tree-grid',
      component: TreeGridComponent,
    },
    {
      path: 'app-assigned-incidents',
      component: AppInciTableComponent,
    },
    {
      path: 'app-resolved-incidents',
      component: AppResInciTableComponent,
    },
    {
      path: 'open-incidents',
      component: OpenInciTableComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  AssignPopoverFormComponent,
  OpenInciTableComponent,
  AppResInciTableComponent,
  TablesComponent,
  SmartTableComponent,
  TreeGridComponent,
  AppInciTableComponent,
];
