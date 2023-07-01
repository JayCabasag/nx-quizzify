import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, catchError, map, of, tap } from "rxjs";
import { User } from "../_model/user.model";
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from "@angular/router";
import { ToastService } from "./toast.service";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    url = 'http://localhost:8000/api/v1'

    private userSubject: BehaviorSubject<User | null>;
    public user: Observable<User | null>;

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(
        private http: HttpClient,
        private toastService: ToastService,
        private router: Router
    ) {
        this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
        this.user = this.userSubject.asObservable();
    }

    isAuthenticated(): Observable<boolean> {
        const token = localStorage.getItem('token') ?? null

        if (!token) {
            return of(false)
        }

        this.httpOptions.headers = this.httpOptions.headers.set('Authorization', `Bearer ${token}`);

        return this.http.get<any>(`${this.url}/tokens/verify`, this.httpOptions).pipe(
            map((response: any) => {
                const { user } = response;
                // Perform additional checks if needed
                const isValidUser = user && (user.type === 'student' || user.type === 'teacher');
                return isValidUser;
            }),
            catchError((error: any) => {
                // Handle error if necessary
                console.error('Token verification failed:', error);
                return of(false);
            })
        )
    }

    signIn(email: string, password: string, type: string) {
        this.http.post<User | null>(`${this.url}/auth/signin`, { email, password, type }, this.httpOptions)
            .pipe(
                tap((response: User | null) => {
                    if (response) {
                        localStorage.setItem('token', response.access_token);
                        this.toastService.alertToast('Logged in successfully', 'success');
                        this.routeUser(response.user.type)
                    } else {
                        this.toastService.alertToast('Error occurred while signing in', 'error');
                    }
                    this.toastService.clearToast();
                }),
                catchError((error: any) => {
                    const errorMessage = (error.error.message as string) ?? 'An error occured while signin in'
                    this.toastService.alertToast(errorMessage, 'error');
                    this.toastService.clearToast();
                    return [];
                })
            )
            .subscribe();
    }

    routeUser(type: string) {
        if (type === 'teacher') {
            this.router.navigateByUrl('/dashboard');
        } else if (type === 'student') {
            this.router.navigateByUrl('/quizzes');
        } else {
            this.router.navigateByUrl('/');
        }
    }
}