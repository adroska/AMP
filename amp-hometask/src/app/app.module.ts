import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/common/header/header.component';
import { FooterComponent } from './pages/common/footer/footer.component';
import { LogoComponent } from './pages/common/logo/logo.component';
import { CoursesComponent } from './pages/courses/courses/courses.component';
import { CourseDetailsComponent } from './pages/courses/course-details/course-details.component';
import { LoginComponent } from './pages/login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    CoursesComponent,
    CourseDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
