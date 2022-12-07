import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:"Home",component:HomeComponent },
  // { path: '**', redirectTo: 'Home' ,pathMatch: 'full' }
  // {    path:"/",component: },
  // {    path:"Courses",component:CoursesComponent  },
  // {    path:"Contact",component:ContactComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
