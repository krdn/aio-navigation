import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DemoMaterialModule } from './material-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './layout/footer/footer.component';
import { PollingComponent } from './polling/polling.component';
import { UserCarComponent } from './user-car/user-car.component';

import { UserService} from './user-car/user.service';

import { BithumbComponent } from './bithumb/bithumb.component';
import { BithumbService } from './bithumb/bithumb.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PollingComponent,
    UserCarComponent,
    BithumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DemoMaterialModule
  ],
  providers: [UserService, BithumbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
