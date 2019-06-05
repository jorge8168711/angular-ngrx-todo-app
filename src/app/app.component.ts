import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: /*html*/`
    <section class="todoapp">
      <main class="main">
        <app-todo-add></app-todo-add>
        <app-todo-status-bar></app-todo-status-bar>
        <app-todo-list></app-todo-list>
      </main>
    </section>
  `,
  styles: [ /*css*/ `

  `]
})
export class AppComponent {
  title = 'ngrx-todo-app';
}
