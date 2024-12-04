import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TicketCreateComponent } from './components/ticket-create/ticket-create.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'ticket-create', component: TicketCreateComponent },
    { path: 'register', component: RegisterComponent },
];
