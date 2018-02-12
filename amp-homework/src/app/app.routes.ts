import { Router } from "@angular/router";
import { CoursesComponent } from "./pages/courses/courses/courses.component";
import { AuthGuard } from "./common/auth.guard";
import { LoginComponent } from "./pages/login/login/login.component";
import { AddCourseComponent } from "./pages/courses/add-course/add-course.component";
import { NoContentComponent } from "./pages/no-content/no-content.component";

export const ROUTES = [
    { path: '',
      redirectTo: 'courses',
      pathMatch: 'full'
    },
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
      path: 'courses/new',
      component: AddCourseComponent,
      canActivate: [AuthGuard]
    },
    {
        path: '**',
        component: NoContentComponent
    }
  ];