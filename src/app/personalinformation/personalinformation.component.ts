import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalinformation',
  templateUrl: './personalinformation.component.html',
  styleUrls: ['./personalinformation.component.css']
})
export class PersonalinformationComponent implements OnInit {

  myData: string[][] = [
    ['Name', 'Bhavesh Nair'],
    ['DOB', '15/04/2001'],
    ['Work Exp', '1 year'],
    ['Education', 'BSC-IT'],
    ['Interests', 'Creativity, Travelling, Music, Workout, Playing video games']
  ];

  aboutMe: string[] = [
    'Hi I am a FrontEnd Developer with 1 Years of experience in Software Industry.',
    'Worked as a Web Developer in IDS in technologies like (HTML, CSS and JavaScript). ',
    'Delivered all product within deadlines. Always eager to learn new technologies.',
    'Currently Working as Angular Developer in Nimap Infotech.'

  ]



  constructor() { }

  ngOnInit(): void {
  }

}
