import {HomePageComponent} from "./home-page/home-page.component";
import {RouterModule, Routes } from "@angular/router";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: '', component: HomePageComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
