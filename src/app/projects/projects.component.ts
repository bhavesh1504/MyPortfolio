import { Component, OnInit } from '@angular/core';
import { Projects } from '../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Projects[] = [
    {
      name: 'Angular',
      technology: 'Intermediate',
      description: [
        
          'jjjjjjjjj'
        
      ]
    },
    {
      name: 'Angular',
      technology: 'Intermediate',
      description: [
        
          'jjjjjjjjj'
        
      ]
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
