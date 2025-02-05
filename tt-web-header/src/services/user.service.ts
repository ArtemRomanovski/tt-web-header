import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of, throwError } from "rxjs";
import { User } from "src/static/data/user";

@Injectable({
    providedIn: 'root',
})
export class UserService {
	private userUrl = 'src/static/mock/user.json';

	constructor(private http: HttpClient) {}

	getUser(): Observable<User> {
		console.log(12311111);
		
		return this.http.get<User>(this.userUrl)
		.pipe(
			catchError((error) => {
			  console.error('Ошибка при загрузке JSON:', error);
			  return throwError(() => new Error('Не удалось загрузить пользователя.'));
			})
		)
    }
}
