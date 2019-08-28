import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {

  inform:PostDescr[]
  constructor() { }

  ngOnInit() {
    this.inform= [{
      title: 'Очень важный пост!',
      content: 'Очень важный контент',
      likeCnt: 5,
      author: 'Инанц Гайк'
    }]
  }

  receiveFromChild($event) {
    this.inform.push({
      title: $event.title,
      content: $event.content,
      likeCnt: 0,
      author: 'Инанц Гайк'
    })
  }

}

interface PostDescr{
  title:string,
  content:string,
  likeCnt:number,
  author:string
}