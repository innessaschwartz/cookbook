import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgModule } from '@angular/core';
// import { BootstrapAlertModule } from 'ngx-bootstrap-alert-service';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

import { ApiService } from './services/api.service';
import { LoginComponent } from './login/login.component';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { FavoriteDetailComponent } from './favorite-detail/favorite-detail.component';

const routes: Routes = [
	{path:'', component:LoginComponent},
	{path:'login', component:LoginComponent},
	{path:'my-favorites', component:FavoriteListComponent},
	{path:'my-recipes', component:RecipeListComponent},
	{path:'my-recipes/:recipeId', component:RecipeDetailComponent}
];

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		HomeComponent,
		MyRecipesComponent,
		RecipeListComponent,
		RecipeDetailComponent,
		LoginComponent,
		FavoriteListComponent,
		FavoriteDetailComponent
	],
	imports: [
		BrowserModule,
		BsDropdownModule.forRoot(),
		HttpClientModule,
		FormsModule,
		RouterModule.forRoot(routes),
		// BootstrapAlertModule
	],
	providers: [ApiService],
	bootstrap: [AppComponent]
})
export class AppModule { }
