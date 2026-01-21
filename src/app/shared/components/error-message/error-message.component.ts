import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [CommonModule],
  template: '<div data-testid="message-container">{{ message() }}</div>',
})
export class ErrorMessageComponent {
  public message = input<string>('Something went wrong');
}
