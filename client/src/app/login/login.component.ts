import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertsService } from 'angular-alert-module';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	constructor(private router:Router, private alerts: AlertsService) {
		// this.alerts.setDefaults('timeout',0);
	}

	login() {
		this.alerts.setMessage('Successfully logged in!','success');
		this.router.navigate(['my-recipes']);
	}

}
