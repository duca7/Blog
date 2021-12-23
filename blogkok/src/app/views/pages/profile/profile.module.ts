import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EditProfileComponent } from './editProfile/editProfile.component';

@NgModule({
  declarations: [ProfileComponent, EditProfileComponent],
  imports: [CommonModule, ProfileRoutingModule, MatDialogModule],
  exports: [EditProfileComponent],
})
export class ProfileModule {}
