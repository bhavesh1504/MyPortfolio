import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Web-Developer',
      company: 'Innovative Data Solutions',
      duration: '3 Months',
      description: [
        'Worked in E-Learning Platform to build Ui of there E-Learning Websites.',
        'Solved Ui related issues, Worked in technologoes like (HTML, CSS, Javascript).'
      ]
    },
    {
      role: 'Angular-Developer',
      company: 'Nimap Infotech',
      duration: '8 Months(Presently-Working)',
      description: [
        'KYC Ui for Godrej Properties.',
        'FFC-Field Force Connect CRM Project and powerful application for Employees to track there daily records and much more.'
      ]
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
