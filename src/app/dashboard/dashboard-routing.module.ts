import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StudentsComponent } from "./Pages/students/students.component";
import { CoursesComponent } from "./Pages/courses/courses.component";
import { ClassesComponent } from "./Pages/classes/classes.component";
import { HomeComponent } from "./Pages/home/home.component";

@NgModule({
    imports: [
      RouterModule.forChild([
        {
            path: 'home',
            loadChildren: () => import('./Pages/home/home.module').then((m) => m.HomeModule),
          },
        {
          path: 'students',
          loadChildren: () => import('./Pages/students/students.module').then((m) => m.StudentsModule),
        },
        {
          path: 'courses',
          loadChildren: () => import('./Pages/courses/courses.module').then((m) => m.CoursesModule)
        },
        {
          path: 'classes',
          loadChildren: () => import('./Pages/classes/classes.module').then((m) => m.ClassesModule),
        },
     
        {
          path: '**',
          redirectTo: 'home',
        },
      ]),
    ],
    exports: [RouterModule]
  })
export class DashboardRoutingModule{}