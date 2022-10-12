import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingComponentComponent } from './components/booking-component/booking-component.component';
import { FlightComponentComponent } from './components/flight-component/flight-component.component';
import { CheckinComponentComponent } from './components/checkin-component/checkin-component.component';
import { FareComponentComponent } from './components/fare-component/fare-component.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { BookflightsComponent } from './components/bookflights/bookflights.component';
import { TestService } from './services/test.service';
import { BookingService } from './services/booking.service';
import { FlightSearchService } from './services/flight-search.service';
import { ReactiveFormsModule} from '@angular/forms';
import { BookingPipe } from './pipes/booking.pipe';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthComponent } from './components/auth/auth.component';
import { AppService } from './services/app.service';
import { AuthService } from './services/auth.service';
import { LoginService } from './services/login.service';
import { CheckinService } from './services/checkin.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddFlightsComponent } from './components/add-flights/add-flights.component';
import { AdminSearchFlightsComponent } from './components/admin-search-flights/admin-search-flights.component';
import { AllowedAdminComponent } from './components/allowed-admin/allowed-admin.component';
import { AlloweduserComponent } from './components/alloweduser/alloweduser.component';
import { AuthGuardComponent } from './components/auth-guard/auth-guard.component';
import { TestComponent } from './components/test/test.component';
import { UpdateFlightComponent } from './components/update-flight/update-flight.component';


@NgModule({
  declarations: [
    AppComponent,
    BookingComponentComponent,
    FlightComponentComponent,
    CheckinComponentComponent,
    FareComponentComponent,
    LoginComponentComponent,
    BookflightsComponent,
    BookingPipe,
    LoginComponent,
    NavbarComponent,
    SignupComponent,
    AuthComponent,
    AddFlightsComponent,
    AdminSearchFlightsComponent,
    AllowedAdminComponent,
    AlloweduserComponent,
    AuthGuardComponent,
    TestComponent,
    UpdateFlightComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule
  ],
  providers: [
    TestService,
    BookingService,
    FlightSearchService,
    AppService,
    AuthService,
    LoginService,
    CheckinService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

