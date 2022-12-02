import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  @Output() onSubmitTask: EventEmitter<Task> = new EventEmitter()

  text: string
  day: string
  reminder: boolean = false

  onSubmit() {
    if (!this.text) {
      alert('Please add a task')
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onSubmitTask.emit(newTask)

    this.text = ''
    this.day = ''
    this.reminder = false
  }

}
