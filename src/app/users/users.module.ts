import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { UsersRoutingModule } from './users-routing.module';
import { UsersFilterComponent } from './users-filter/users-filter.component';
import { UserService } from './user.service';
import { UsersComponent } from './users.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, UsersRoutingModule, HttpClientModule, SharedModule],
  declarations: [UsersFilterComponent, UsersComponent],
  providers: [UserService]
})
export class UsersModule {}
