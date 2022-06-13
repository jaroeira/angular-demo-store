import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input() links: { label: string; path: string }[] = [];
  @Output() categoriesClicked = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
