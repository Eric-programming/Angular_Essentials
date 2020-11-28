import { AuthService } from './auth.service';
import { NgModule } from '@angular/core';

//Only focus on dependency injection
@NgModule({
  providers: [AuthService],
})
export class CoreModule {}
