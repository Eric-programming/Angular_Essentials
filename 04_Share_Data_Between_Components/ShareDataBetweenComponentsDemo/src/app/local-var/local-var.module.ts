import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
];
@NgModule({
  declarations: [ChildComponent, ParentComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LocalVarModule {}
