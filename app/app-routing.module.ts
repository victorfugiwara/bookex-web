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

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',         component: HomeComponent },
  { path: 'register',     component: RegisterComponent },
  { path: 'login',        component: LoginComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'library',      component: LibraryComponent },
  { path: 'wishes',       component: WishesComponent },
  { path: 'combinations', component: CombinationsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}