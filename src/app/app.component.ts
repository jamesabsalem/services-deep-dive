import { Component } from '@angular/core';

import { TasksComponent } from './tasks/tasks.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    imports: [TasksComponent]
})
export class AppComponent {}
