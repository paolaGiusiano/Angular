import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ticket-create',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ticket-create.component.html',
  styleUrl: './ticket-create.component.css'
})
export class TicketCreateComponent {
  createTicketForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createTicketForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      title: ['', [Validators.required, Validators.minLength(3)]],
      full_name: ['', [Validators.required, Validators.minLength(3)]],
      department: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      priority: ['', [Validators.required]],
    });
  }

  get title() {
    return this.createTicketForm.get('title');
  }

  get full_name() {
    return this.createTicketForm.get('full_name');
  }

  get department() {
    return this.createTicketForm.get('department');
  }

  get description() {
    return this.createTicketForm.get('description');
  }

  get priority() {
    return this.createTicketForm.get('priority');
  }

  onSubmit(): void {
    if (this.createTicketForm.valid) {
      console.log('Formulario enviado:', this.createTicketForm.value);
      // añadir la lógica para enviar el ticket al backend
    } else {
      console.log('Formulario inválido');
    }
  }
}
