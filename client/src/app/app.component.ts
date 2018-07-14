import { Component } from '@angular/core';
// import { BootstrapAlertService } from 'ngx-bootstrap-alert-service';
// import { ToastMessageModel } from 'ngx-bootstrap-alert-service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'app';
	// messageList: ToastMessageModel[] = [];
	// constructor(private bootstrapAlertService: BootstrapAlertService) {}

	// ngOnInit() {
	// 	this.bootstrapAlertService.getAlertEvent().subscribe(r => {
	// 		this.messageList.push(r);
	// 	});
	// }
}
