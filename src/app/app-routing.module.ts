import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { SidebarDetailComponent } from './components/sidebar-detail/sidebar-detail.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const PATH = "5363950/5AE7DFB40500DDC03BC84BD3F0A8AC0F18784B1E"
const routes: Routes = [
  {path:"", component:SidebarComponent},
  {path:":id", component: SidebarDetailComponent},
  {path:"",redirectTo:"", pathMatch:"full"},
  {path:"**", component:NotFoundPageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
