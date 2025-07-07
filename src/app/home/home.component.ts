import { Component } from '@angular/core';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  circle = faCircle;
  logoImage = 'assets/images/logo-BNCDj_dh.svg';

  bannerImage = 'assets/images/header_img-DhAi3lLA.png';
  secondBanner = 'assets/images/appointment_img.png';
  leftImage = 'assets/images/group_profiles-BCL6AVF5.png';
  arrowIcon = 'assets/images/arrow_icon.svg';

  specialities: { image: string; title: string }[] = [
    { image: 'assets/images/Dermatologist.svg', title: 'Dermatologist' },
    {
      image: 'assets/images/Gastroenterologist.svg',
      title: 'Gastroenterologist',
    },
    {
      image: 'assets/images/General_physician.svg',
      title: 'General_physician',
    },
    { image: 'assets/images/Gynecologist.svg', title: 'Gynecologist' },
    { image: 'assets/images/Neurologist.svg', title: 'Neurologist' },
    { image: 'assets/images/Pediatricians.svg', title: 'Pediatricians' },
  ];

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
  userImage: any;

  // ngOnInit(){
  //   if(localStorage.getItem('user')){
  //     let userDetails = localStorage.getItem('user');
  //     let userData = userDetails && JSON.parse(userDetails);
  //     this.userImage = userData.image;
  //   }
  // }
}
