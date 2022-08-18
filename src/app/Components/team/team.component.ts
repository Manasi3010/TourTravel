import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  constructor() {}

  images: Array<object> = [
    {
      image:
        'https://themes.codezion.com/angular/toor/assets/images/agent-2.jpg',
      thumbImage:
        'https://themes.codezion.com/angular/toor/assets/images/agent-2.jpg',
      title: 'Eachann Mack',
      name: 'Eachann Mack',
    },
    {
      image:
        'https://themes.codezion.com/angular/toor/assets/images/agent-4.jpg',
      thumbImage:
        'https://themes.codezion.com/angular/toor/assets/images/agent-4.jpg',
      title: 'Mack',
      name: 'Mack',
    },
    {
      image:
        'https://themes.codezion.com/angular/toor/assets/images/agent-1.jpg',
      thumbImage:
        'https://themes.codezion.com/angular/toor/assets/images/agent-1.jpg',
      title: 'Jhon jha',
      name: 'Jhon jha',
    },
    {
      image:
        'https://themes.codezion.com/angular/toor/assets/images/agent-3.jpg',
      thumbImage:
        'https://themes.codezion.com/angular/toor/assets/images/agent-3.jpg',
      title: 'Eachann Mack',
      name: 'Travel Agent',
    },
    {
      image:
        'https://themes.codezion.com/angular/toor/assets/images/agent-2.jpg',
      thumbImage:
        'https://themes.codezion.com/angular/toor/assets/images/agent-2.jpg',
      title: 'Mack',
      name: 'Travel Agent',
    },
    {
      image:
        'https://themes.codezion.com/angular/toor/assets/images/agent-3.jpg',
      thumbImage:
        'https://themes.codezion.com/angular/toor/assets/images/agent-3.jpg',
      title: 'Jhon jha',
      name: 'Jhon jha',
    },
  ];
  ngOnInit(): void {}
}
