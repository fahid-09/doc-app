import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { doctor } from '../data-types';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  constructor(private http: HttpClient) {}
  addDoctor(data: doctor) {
    return this.http
      .post('http://localhost:3000/doctor', data, { observe: 'response' })
      .subscribe((result) => {
        console.log('doctor added ', result);
      });
  }
  getAllDoctors() {
    return this.http.get<doctor[]>('http://localhost:3000/doctor');
  }

  deleteDoctor(id: number) {
    return this.http.delete(`http://localhost:3000/doctor/${id}`);
  }

  viewDoctorProfile(id: any) {
    return this.http.get<doctor>(`http://localhost:3000/doctor/${id}`);
  }

  getUpdateDoctor(id: any) {
    return this.http.get<doctor>(`http://localhost:3000/doctor/${id}`);
  }

  updateDoctor(doctor: doctor){
    return this.http.put(`http://localhost:3000/doctor/${doctor.id}`, doctor )
  }
}
