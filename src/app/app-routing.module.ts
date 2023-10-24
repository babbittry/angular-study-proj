import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {IndexComponent} from "./pages/index/index.component";
import {AboutComponent} from "./pages/about/about.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";

const routes: Routes = [
    {path: 'index', component: IndexComponent, title: 'sakura'},
    {path: 'about', component: AboutComponent, title: '关于 sakura'},
    {path: 'app-home', component: HomeComponent},
    {path: '', pathMatch: 'full', redirectTo: '/index'},
    {path: '**', component: PageNotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
