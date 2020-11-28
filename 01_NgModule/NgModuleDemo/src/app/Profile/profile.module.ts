import { RouterModule } from '@angular/router';
import { ProfileService } from './profile.service';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileItemComponent } from './profile-item/profile-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes = [
  { path: '', component: ProfileListComponent },
  { path: ':id', component: ProfileItemComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [ProfileItemComponent, ProfileListComponent],
  providers: [ProfileService],
})
export class ProfileModule {}
