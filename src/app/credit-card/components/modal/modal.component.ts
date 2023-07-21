import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Output() close: EventEmitter<any> = new EventEmitter<any>();

  onCloseModal() {
    this.close.emit();
  }
}
