import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserProfile } from 'src/app/interface/user-profile';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  imgProfile = "../../../assets/images/user_empty.png";
  imgUploadName = "";
  deleteOption = false;
  profile: UserProfile = {
    name: '',
    document: '',
    hobby: '',
    imageUrl: '',
    imageName: '',
    birthday: ''
  };

  // ViewChild is used to access the input element.
  @ViewChild('fileInput', {static: false})
  // this InputVar is a reference to our input.
  FileInputVar: ElementRef;

  constructor(
      public sanitizer: DomSanitizer,
      private userProfileService: UserProfileService
    ) {
  }

  ngOnInit(): void {
    this.profile = this.userProfileService.getProfile();
    if (this.profile.imageName != "") {
      this.imgProfile = this.profile.imageUrl;
      this.imgUploadName = this.profile.imageName;
      this.deleteOption = true;
    }
  }

  // Set selected image profile
  onChangeFileUpload(data: any) {
    this.imgProfile = window.URL.createObjectURL(data.target.files[0]);
    this.imgUploadName = data.target.files[0].name;
    this.profile.imageUrl = this.imgProfile;
    this.profile.imageName = this.imgUploadName;
    this.deleteOption = true;
    this.userProfileService.saveProfile(this.profile);
  }

  deleteImgUpload() {
    this.imgProfile = "../../../assets/images/user_empty.png";
    this.imgUploadName = "";
    this.deleteOption = false;
    this.FileInputVar.nativeElement.value = "";
    this.userProfileService.deleteImageProfile();
  }
}
