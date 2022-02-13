import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  imgProfile = "../../../assets/images/user_empty.png";
  imgUploadName = "";
  deleteOption = false;

  // ViewChild is used to access the input element.
  @ViewChild('fileInput', {static: false})
  // this InputVar is a reference to our input.
  FileInputVar: ElementRef;

  constructor(public sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
  }

  // Set selected image profile
  onChangeFileUpload(data: any) {
    this.imgProfile = window.URL.createObjectURL(data.target.files[0]);
    this.imgUploadName = data.target.files[0].name;
    this.deleteOption = true;
  }

  deleteImgUpload() {
    this.imgProfile = "../../../assets/images/user_empty.png";
    this.imgUploadName = "";
    this.deleteOption = false;
    this.FileInputVar.nativeElement.value = "";
  }
}
