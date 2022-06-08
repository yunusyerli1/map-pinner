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



// { path: "", component: MarketListingComponent, data:{ type:'ihale'} },
// { path: ":id", component: DetailComponent, data:{ type:'auction'}},
// { path: "**", redirectTo: "" },


// {path:"kullanici/:id",canActivate: [ PermissonGuard], data: {roles: ['admin_menu_users']},component:UserDetailComponent, children: [
//   {path:"genel", component: GeneralInfoComponent},
//   {path:"genel-duzenle", component: EditGeneralInfoComponent},
//   {path:"sozlesmeler", component: ContractsInfoComponent},


// { path: "ekle", component: EstateAddComponent, data: { method: "save" } },
// { path: "duzenle/:id", component: EstateAddComponent, data: { method: "edit" } },
// { path: "sec/:id", component: EstateBaseComponent },
// { path: "piyasa-sec", component: EstateBaseFinalComponent },


// { path: "", component: MarketListingComponent, data:{ type:'piyasa'} },
// { path: ":id", component: DetailComponent, data:{ type:'market'} },
// { path: "varlik-ekle", canActivate: [LoginGuard], children: [{ path: "", redirectTo: "webtapu" }] },
// { path: "duzenle/:id", children: [{ path: "", redirectTo: "genel"}] },

// {path:"mulk-raporu", component: ReportEstateComponent},
// {path:"tanitim-raporu/:id", component: ReportPersuasionComponent},
// {path:"pazarlama-raporu/:id", component: ReportMarketingComponent},
// {path:"detay-raporu/ihale/:id", component: ReportDetailComponent},
// {path:"detay-raporu/piyasa/:id", component: ReportDetailComponent},
