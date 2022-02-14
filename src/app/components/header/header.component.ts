import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/interface/user-profile';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  profile: UserProfile = {
    name: '',
    document: '',
    hobby: '',
    imageUrl: '',
    imageName: '',
    birthday: ''
  };

  constructor(private userProfileService: UserProfileService) { }

  ngOnInit(): void {
    this.profile = this.userProfileService.getProfile();
  }

}
