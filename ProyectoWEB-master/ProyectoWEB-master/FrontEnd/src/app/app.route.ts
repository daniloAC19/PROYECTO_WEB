import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {MostrarCompuComponent} from "./mostrar-compu/mostrar-compu.component";
import {IngresarCompuComponent} from "./ingresar-compu/ingresar-compu.component";

const app_routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'inventarioCompu', component: MostrarCompuComponent },
    { path: 'ingresarCompu', component: IngresarCompuComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(app_routes);
