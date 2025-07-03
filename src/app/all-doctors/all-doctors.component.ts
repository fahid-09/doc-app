import { Component } from '@angular/core';

@Component({
  selector: 'app-all-doctors',
  templateUrl: './all-doctors.component.html',
  styleUrls: ['./all-doctors.component.scss'],
})
export class AllDoctorsComponent {
  topDoctors: {
    image: string;
    name: string;
    available: string;
    specialist: string;
  }[] = [
    {
      image: 'assets/images/doc1.png',
      available: 'available',
      specialist: 'General Physian',
      name: 'Dr. Richard James',
    },
    {
      image: 'assets/images/doc2.png',
      available: 'available',
      specialist: 'Gynecologist',
      name: 'Dr. Emily Larson',
    },
    {
      image: 'assets/images/doc3.png',
      available: 'available',
      specialist: 'Dermatologist',
      name: 'Dr. Sarah Patel',
    },
    {
      image: 'assets/images/doc4.png',
      available: 'available',
      specialist: 'Pediatricians',
      name: 'Dr. Christopher Lee',
    },
    {
      image: 'assets/images/doc5.png',
      available: 'available',
      specialist: 'Neurologist',
      name: 'Dr. Jennifer Garcia',
    },
    {
      image: 'assets/images/doc6.png',
      available: 'available',
      specialist: 'General Physian',
      name: 'Dr. Christopher Davis',
    },
    {
      image: 'assets/images/doc7.png',
      available: 'available',
      specialist: 'Gynecologist',
      name: 'Dr. Timothy White',
    },
    {
      image: 'assets/images/doc8.png',
      available: 'available',
      specialist: 'Dermatologist',
      name: 'Dr. Ava Mitchell',
    },
    {
      image: 'assets/images/doc9.png',
      available: 'available',
      specialist: 'Gastroenterologist',
      name: 'Dr. Jeffrey King',
    },
    {
      image: 'assets/images/doc10.png',
      available: 'available',
      specialist: 'Pediatricians',
      name: 'Dr. Andrew Williams',
    },
  ];
}
