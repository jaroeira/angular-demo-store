import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  showModal = false;

  constructor() {}

  ngOnInit(): void {}

  onModalOpen() {
    this.showModal = true;
  }

  onModalClose() {
    this.showModal = false;
  }
}
