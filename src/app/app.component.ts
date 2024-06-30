import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DashboardStore } from './store/dashboard.store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'apollo-ngrx-template';

  constructor(protected readonly store: DashboardStore) {}

  ngOnInit(): void {
    console.log(this.store.dashboard());
    console.log(this.store.data);
  }
}
