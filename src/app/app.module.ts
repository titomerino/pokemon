import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NotificationComponent } from './utils/notification/notification.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';


import { NgxMaskModule, IConfig } from 'ngx-mask';

/** Forms */
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoadingComponent } from './utils/loading/loading.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonServiceService } from './services/pokemon-service.service';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    NotificationComponent,
    ProfileFormComponent,
    LoadingComponent,
    PokemonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(maskConfig),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PokemonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
