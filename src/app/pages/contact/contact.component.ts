import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };
  
  isSubmitted = false;
  errorMessage = '';

  onSubmit() {
    this.errorMessage = '';
    
    // Basic Validation
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.errorMessage = 'Please fill in all fields before sending.';
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.formData.email)) {
      this.errorMessage = 'Please enter a valid email address.';
      return;
    }

    // Pretend to send
    this.isSubmitted = true;
  }

  resetForm() {
    this.formData = { name: '', email: '', message: '' };
    this.isSubmitted = false;
    this.errorMessage = '';
  }
}
