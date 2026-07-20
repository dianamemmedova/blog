import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-blog-dialog',
  imports: [],
  templateUrl: './blog-dialog.component.html',
  styleUrl: './blog-dialog.component.css'
})
export class BlogDialogComponent implements OnInit {
  isUpdate: boolean = false;


  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private dialogRef: MatDialogRef<BlogDialogComponent>) {
    if (data.isUpdate) {
      this.isUpdate = true;
    }
    else {
      
    }
  }
  ngOnInit(): void {

  }

}
