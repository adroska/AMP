import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './pages/common/footer/footer.component';
import { HeaderComponent } from './pages/common/header/header.component';
import { LogoComponent } from './pages/common/logo/logo.component';
import { CoursesComponent } from './pages/courses/courses/courses.component';
import { CourseDetailsComponent } from './pages/courses/course-details/course-details.component';
import { LoginComponent } from './pages/login/login/login.component';
import { ToolBoxComponent } from './pages/courses/tool-box/tool-box.component';
import { CoursesService } from './pages/courses/courses.service';
import { AuthService } from './pages/login/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    CoursesComponent,
    CourseDetailsComponent,
    LoginComponent,
    ToolBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CoursesService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
