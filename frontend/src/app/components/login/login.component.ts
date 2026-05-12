import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './login.component.html'
})
export class LoginComponent {
    username = '';
    password = '';
    errorMessage = '';

    constructor(private authService: AuthService, private router: Router) {}

    async onLogin(): Promise<void> {
        this.errorMessage = '';

        // Call the service which now pulls from the JSON file
        const isValid = await this.authService.validateCredentials(this.username, this.password);

        if (isValid) {
            this.router.navigate(['/members']);
        } else {
            this.errorMessage = 'Invalid username or password';
        }
    }
}