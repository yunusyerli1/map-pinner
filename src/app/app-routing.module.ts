import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { HomeComponent } from './home/home.component';

const PATH = "5363950/5AE7DFB40500DDC03BC84BD3F0A8AC0F18784B1E"
const routes: Routes = [
  {path:PATH, component:HomeComponent},
  { path: PATH+"/:id", component: HomeComponent},
  {path:"",redirectTo:PATH, pathMatch:"full"},
  {path:"**", component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
