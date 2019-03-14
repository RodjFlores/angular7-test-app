import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ViewTableComponent } from './view-table/view-table.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path: 'add-passenger', component: AddComponent},
  {path: 'passengers', component:ViewTableComponent},
  {path: 'passengers/:id', component:EditComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComps = [AddComponent]
