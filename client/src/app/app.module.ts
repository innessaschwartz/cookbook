import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgModule } from '@angular/core';
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

const routes: Routes = [
	{path:'', component:HomeComponent},
	{path:'login', component:LoginComponent},
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
		LoginComponent
	],
	imports: [
		BrowserModule,
		BsDropdownModule.forRoot(),
		HttpClientModule,
		FormsModule,
		RouterModule.forRoot(routes),
	],
	providers: [ApiService],
	bootstrap: [AppComponent]
})
export class AppModule { }
