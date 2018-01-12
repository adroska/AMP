import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from  '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './pages/common/footer/footer.component';
import { HeaderComponent } from './pages/common/header/header.component';
import { LogoComponent } from './pages/common/logo/logo.component';
import { CoursesComponent } from './pages/courses/courses/courses.component';
import { CourseDetailsComponent } from './pages/courses/course-details/course-details.component';
import { LoginComponent } from './pages/login/login/login.component';
import { ToolBoxComponent } from './pages/courses/tool-box/tool-box.component';
import { CoursesService } from './pages/courses/courses.service';
import { AuthService } from './common/auth.service';
import { BorderColorDirective } from './common/border-color.directive';
import { DurationPipe } from './common/duration.pipe';
import { OrderByPipe } from './common/order-by.pipe';
import { FilterByPipe } from './common/filter-by.pipe';
import { AddCourseComponent } from './pages/courses/add-course/add-course.component';
import { AuthGuard } from './common/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    CoursesComponent,
    CourseDetailsComponent,
    LoginComponent,
    ToolBoxComponent,
    BorderColorDirective,
    DurationPipe,
    OrderByPipe,
    FilterByPipe,
    AddCourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'courses',
        component: CoursesComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'add-course',
        component: AddCourseComponent,
        canActivate: [AuthGuard]
      }
    ])
  ],
  providers: [CoursesService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
