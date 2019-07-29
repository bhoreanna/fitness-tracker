import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTraningComponent } from '../stop-traning/stop-traning.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  color = 'primary';
  mode = 'determinate';
  value = 20;
  progress = 0;
  timer: number = 0;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.progress = this.progress + 5;
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 1000)
  }


  onStop() {
    console.log('YOU PRESS STOP');
    clearInterval(this.timer);
    this.dialog.open(StopTraningComponent,{data:
    {
      progress: this.progress
    }
    });
  }
}
