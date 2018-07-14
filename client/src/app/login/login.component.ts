import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { BootstrapAlertService } from 'ngx-bootstrap-alert-service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	// ,private bootstrapAlertService: BootstrapAlertService
	constructor(private router:Router) {}

	login() {
		// this.bootstrapAlertService.showSucccess('This is a success message!');
		this.router.navigate(['my-recipes']);
	}

}
