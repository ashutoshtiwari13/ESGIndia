import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// Import HttpClientModule
import { HttpClientModule } from '@angular/common/http';
// Import your components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// Import FormsModule for template-driven forms
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    // Declare your components here
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    // Include HttpClientModule in the imports array
    HttpClientModule,
    // Include FormsModule to work with forms
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
