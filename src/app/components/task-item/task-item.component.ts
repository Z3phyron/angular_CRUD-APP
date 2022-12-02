import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task: Task
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() onToggleTask: EventEmitter<Task> = new EventEmitter()
  
  onDelete(task: Task) {
    // alert(JSON.stringify(task))
    this.onDeleteTask.emit(task)
  }
  onToggle(task: Task) {
    // alert(JSON.stringify(task))
    this.onToggleTask.emit(task)
  }
}
