import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseboxComponent } from './coursebox/coursebox.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './services/cart.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { DetailsComponent } from './details/details.component';

const routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'course/:id',
    component: DetailsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseboxComponent,
    CartComponent,
    WelcomeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot( routes )
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
