import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-loading-indicator',
  templateUrl: './modal-loading-indicator.component.html',
  styleUrls: ['./modal-loading-indicator.component.scss'],
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
  ],
})
export class ModalLoadingIndicatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
