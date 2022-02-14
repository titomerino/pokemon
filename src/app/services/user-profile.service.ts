import { Injectable, OnInit } from '@angular/core';
import { UserProfile } from '../interface/user-profile';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService implements OnInit {

  profile : UserProfile= {
    name: '',
    document: '',
    hobby: '',
    image: '',
    birthday: ''
  };;

  constructor() {}

  ngOnInit(): void {
    this.saveProfile(this.profile);
  }

  saveProfile(data: UserProfile) {
    localStorage.setItem('name', data.name);
    localStorage.setItem('document', data.document);
    localStorage.setItem('hobby', data.hobby);
    localStorage.setItem('birthday', data.birthday);
    localStorage.setItem('image', data.birthday);
  }

  clearProfile() {
    localStorage.removeItem('name');
    localStorage.removeItem('document');
    localStorage.removeItem('hobby');
    localStorage.removeItem('birthday');
    localStorage.removeItem('image');
  }

  getProfile(): UserProfile {
    this.profile.name = localStorage.getItem('name');
    this.profile.document = localStorage.getItem('document');
    this.profile.birthday = localStorage.getItem('birthday');
    this.profile.hobby = localStorage.getItem('hobby');
    this.profile.image = localStorage.getItem('image');

    return this.profile;
  }
}
