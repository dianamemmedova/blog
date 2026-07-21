import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-blog-dialog',
  imports: [MatButtonModule , MatIcon,MatDialogModule],
  templateUrl: './blog-dialog.component.html',
  styleUrl: './blog-dialog.component.css'
})
export class BlogDialogComponent implements OnInit {
  isUpdate: boolean = false;
  imgUrl: string = "";
  title: string = "";
  body: string = "";
  commentData: any;


  constructor( private commentService:CommentService  ,@Inject(MAT_DIALOG_DATA) private data: any, private dialogRef: MatDialogRef<BlogDialogComponent>) {
    if (data.isUpdate) {
      this.isUpdate = true;
    }
    else {
      this.imgUrl = data.blog.imageId.toString();
      this.title = data.blog.title;
      this.body = data.blog.body;
      
    }
  }
  ngOnInit(): void {
    this.commentService.getComments().subscribe((res) => {
      this.commentData = res.filter((x: { postId: any; }) => x.postId == this.data.blog.id);

    })
  }

  close() {
    this.dialogRef.close()
  }

}
