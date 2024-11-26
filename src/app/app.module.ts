import { NgModule } from '@angular/core';
import { BrowserModule,provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { routing, appRoutingProviders } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home.component';
import { ErrorComponent } from './component/error.component';
import { ProductosListComponent } from './component/productos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    HomeComponent,
    ProductosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    routing
  ],
  providers: [
    provideClientHydration(),
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
