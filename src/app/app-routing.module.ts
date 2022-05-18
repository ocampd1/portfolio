import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {WorkComponent} from "./components/work/work.component";


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'work', component: WorkComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [
  HomeComponent,
  AboutComponent,
  WorkComponent
];
