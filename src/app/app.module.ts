import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SidebarMainComponent } from './sidebar-main/sidebar-main.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HomeViewComponent } from './home-view/home-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarMainComponent,
    TopbarComponent,
    HomeViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
