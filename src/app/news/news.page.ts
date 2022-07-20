import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  list: number[] = []
  constructor() { }

  ngOnInit() {
    for (let index = 0; index < 10; index++) {
      this.list.push(index)
    }
  }

}
