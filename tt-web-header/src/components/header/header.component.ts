import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { IconComponent } from '../tt-icon/icon.component';
import { UserService } from 'src/services/user.service';
import { tap } from 'rxjs';

@Component({
	selector: 'tt-header',
	standalone: true,
	imports: [
		CommonModule,
		IconComponent,
	],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
	private userService: UserService = inject(UserService);

	constructor() {}

	userData$ = this.userService.getUser().pipe(tap((user) => console.log(user)));

	ngOnInit(): void {
		this.userData$.subscribe();
	}
	test() {
		console.log(123123);
		
	}
}
