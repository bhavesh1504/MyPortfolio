import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: 'CHM COLLEGE',
      course: 'BSC-IT',
      duration: '3 Years',
      score: '8.8 CGPA'
    },
    {
      institute: 'CHM COLLEGE',
      course: 'HSC(commerce)',
      duration: '1 Year',
      score: '78%'
    },
    {
      institute: 'S.S.N.High School',
      course: 'SSC',
      duration: '1 Year',
      score: '84%'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
