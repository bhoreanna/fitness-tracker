import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-stop-traning',
  templateUrl: './stop-traning.component.html',
  styleUrls: ['./stop-traning.component.css']
})
export class StopTraningComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public passData: any,
    public dialogRef: MatDialogRef<StopTraningComponent>,
    ) {}

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
