import { Component , inject, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BlogService } from '../services/blog.servise';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog'
import { MatDialog } from '@angular/material/dialog';
import { BlogDialogComponent } from './blog-dialog/blog-dialog.component';
  
@Component({
  selector: 'app-home',
  imports: [MatCardModule , MatButtonModule , NgbPaginationModule ,CommonModule ,MatDialogModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  pageSize = 8;
  page = 13;



  blogData: Array<any> = [];
  private blogService = inject(BlogService);
  public dialog = inject(MatDialog);

  ngOnInit(): void {
    this.blogService.getPosts().subscribe((res) => {
      console.log(res);
      this.blogData = res;
    })
  }

  open(element: any ,choose :any) {
    const dialogRef = this.dialog.open(BlogDialogComponent, {
      data: { blog: element, isUpdate: choose }
    });
  }

}
