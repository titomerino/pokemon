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
    imageUrl: '',
    imageName: '',
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
    localStorage.setItem('imageName', data.imageName);
    localStorage.setItem('imageUrl', data.imageUrl);
  }

  clearProfile() {
    localStorage.removeItem('name');
    localStorage.removeItem('document');
    localStorage.removeItem('hobby');
    localStorage.removeItem('birthday');
    localStorage.removeItem('imageUrl');
    localStorage.removeItem('imageName');
  }

  deleteImageProfile() {
    localStorage.removeItem('imageUrl');
    localStorage.removeItem('imageName');
  }

  getProfile(): UserProfile {
    this.profile.name = localStorage.getItem('name')? localStorage.getItem('name'): this.profile.name;
    this.profile.document = localStorage.getItem('document')? localStorage.getItem('document'): this.profile.document;
    this.profile.birthday = localStorage.getItem('birthday')? localStorage.getItem('birthday'): this.profile.birthday;
    this.profile.hobby = localStorage.getItem('hobby')? localStorage.getItem('hobby'): this.profile.hobby;
    this.profile.imageName = localStorage.getItem('imageName')? localStorage.getItem('imageName'): this.profile.imageName;
    this.profile.imageUrl = localStorage.getItem('imageUrl')? localStorage.getItem('imageUrl'): this.profile.imageUrl;

    return this.profile;
  }
}
