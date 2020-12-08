import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'input-binding',
    loadChildren: () =>
      import('./input-binding/input-binding.module').then(
        (mod) => mod.InputBindingModule
      ),
  },
  {
    path: 'output-event',
    loadChildren: () =>
      import('./output-event/output-event.module').then(
        (mod) => mod.OutputEventModule
      ),
  },
  {
    path: 'view-child',
    loadChildren: () =>
      import('./view-child/view-child.module').then(
        (mod) => mod.ViewChildModule
      ),
  },
  {
    path: 'local-var',
    loadChildren: () =>
      import('./local-var/local-var.module').then((mod) => mod.LocalVarModule),
  },
  {
    path: 'subject-in-service',
    loadChildren: () =>
      import('./subject-in-service/subject-in-service.module').then(
        (mod) => mod.SubjectInServiceModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
