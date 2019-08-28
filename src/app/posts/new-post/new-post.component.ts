import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.sass']
})
export class NewPostComponent implements OnInit {

  @Output() outToParent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendToParent(title:string, content:string ) {
  this.outToParent.emit({
    title: title,
    content: content
  });
  }

}
