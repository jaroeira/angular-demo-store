import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-categories-menu',
  templateUrl: './categories-menu.component.html',
  styleUrls: ['./categories-menu.component.scss'],
})
export class CategoriesMenuComponent implements OnInit {
  @Input() show: boolean = false;
  @Output() closeClicked = new EventEmitter<void>();
  @Output() backdropClicked = new EventEmitter<void>();
  @Output() categoryClicked = new EventEmitter<string>();

  categories = [
    {
      path: '/categoryPath1',
      label: 'Category 1',
    },
    {
      path: '/categoryPath2',
      label: 'Category 2',
    },
    {
      path: '/categoryPath3',
      label: 'Category 3',
    },
    {
      path: '/categoryPath4',
      label: 'Category 4',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
