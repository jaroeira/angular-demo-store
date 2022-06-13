import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0,
        })
      ),
      transition('void <=> *', animate(250)),
    ]),
    trigger('appearsFromTop', [
      state('void', style({ top: -100 })),
      transition('void <=> *', animate(250)),
    ]),
  ],
})
export class ModalComponent implements OnInit {
  @Output() closeClicked = new EventEmitter<void>();
  @Output() backdropClicked = new EventEmitter<void>();
  @Input() show: boolean = false;

  faXmark = faXmark;

  constructor() {}

  ngOnInit(): void {}

  onCloseClick() {
    this.closeClicked.emit();
  }

  onBackdropClicked() {
    this.backdropClicked.emit();
  }
}
