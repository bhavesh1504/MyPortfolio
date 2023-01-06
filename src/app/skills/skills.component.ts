import { Component, OnInit } from '@angular/core';
import { Skills } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skills[] = [
    {
      name: 'Angular',
      level: 'Intermediate',
      rating: 75
    },
    {
      name: 'HTML',
      level: 'Intermediate',
      rating: 75
    },
    {
      name: 'CSS',
      level: 'Intermediate',
      rating: 70
    },
    {
      name: 'JavaScript',
      level: 'Intermediate',
      rating: 60
    },
    {
      name: 'MYSQL',
      level: 'Beginner',
      rating: 40
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
