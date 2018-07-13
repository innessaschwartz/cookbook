import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

const routes: Routes = [
	{path:'', component:HomeComponent},
	{path:'my-recipes', component:MyRecipesComponent}
];

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		HomeComponent,
		MyRecipesComponent,
		RecipeListComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes),
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
