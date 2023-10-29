import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AwesomeComponentModule } from '@shared/awesome-component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, AwesomeComponentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
