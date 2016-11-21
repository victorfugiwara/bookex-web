import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { 
	RegisterComponent,
	LoginComponent,
	HomeComponent,
	ProfileComponent,
	EditProfileComponent,
	LibraryComponent,
	WishesComponent,
	CombinationsComponent
} from './components';

import { AuthService } from './services';


const routes: Routes = [
  { path: 'register',     component: RegisterComponent },
  { path: 'login',        component: LoginComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',         component: HomeComponent, canActivate: [AuthService] },
  { path: 'edit-profile', component: EditProfileComponent, canActivate: [AuthService] },
  { path: 'library',      component: LibraryComponent, canActivate: [AuthService] },
  { path: 'wishes',       component: WishesComponent, canActivate: [AuthService] },
  { path: 'combinations', component: CombinationsComponent, canActivate: [AuthService] },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}