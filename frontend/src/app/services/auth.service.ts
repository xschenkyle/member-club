import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private loggedIn = false;

    constructor(private http: HttpClient) {}

    // Decode Base64 for comparison
    private decode(val: string): string {
        return atob(val);
    }

    async validateCredentials(username: string, password: string): Promise<boolean> {
        try {
            // Fetch the "encrypted" JSON file
            const config = await firstValueFrom(this.http.get<{u: string, p: string}>('assets/auth/config.json'));

            if (username === this.decode(config.u) && password === this.decode(config.p)) {
                this.loggedIn = true;
                localStorage.setItem('isLoggedIn', 'true');
                return true;
            }
            return false;
        } catch (error) {
            console.error('Security config missing', error);
            return false;
        }
    }

    isAuthenticated(): boolean {
        return this.loggedIn || localStorage.getItem('isLoggedIn') === 'true';
    }

    login() { this.loggedIn = true; }

    logout(): void {
        this.loggedIn = false;
        localStorage.removeItem('isLoggedIn');
    }
}