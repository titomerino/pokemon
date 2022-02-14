import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserProfile } from 'src/app/interface/user-profile';
import { LoadingService } from 'src/app/services/loading.service';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {

  register: FormGroup;
  profile: UserProfile = {
    name: '',
    document: '',
    hobby: '',
    imageUrl: '',
    imageName: '',
    birthday: ''
  };

  hobbyList = [
    "Jugar Fútbol",
    "Jugar Basquetball",
    "Jugar Tennis",
    "Jugar Voleibol",
    "Jugar Fifa",
    "Jugar Videojuegos"
  ];

  constructor(
    private fb: FormBuilder,
    private userProfileService: UserProfileService,
    private loadingService: LoadingService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.profile = this.userProfileService.getProfile();
    this.initForm()
  }

  initForm(): void {
    this.register = this.fb.group({
      name: [this.profile.name, Validators.required],
      hobby: [this.profile.hobby, Validators.required],
      document: [this.profile.document, Validators.required],
      birthday: [this.profile.birthday, Validators.required]
    })
  }

  onNextButton() {
    if (!this.register.invalid) {
      this.profile.name = this.register.get('name').value;
      this.profile.document = this.register.get('document').value;
      this.profile.birthday = this.register.get('birthday').value;
      this.profile.hobby = this.register.get('hobby').value;
      this.userProfileService.saveProfile(this.profile);
      this.loadingService.activate();
      // Loading
      setTimeout(() => {
        this.loadingService.inactivate();
        this.router.navigateByUrl("pokemon/list");
      }, 2000);//wait 2 seconds

    } else {
      if (this.register.get('name').invalid) {
        this.register.controls['name'].markAsTouched();
        this.register.get('name').setErrors({'required': true})
      } else {
        if (this.register.get('hobby').invalid) {
          this.register.controls['hobby'].markAsTouched();
          this.register.get('hobby').setErrors({'required': true})
        } else {
          if (this.register.get('birthday').invalid) {
            this.register.controls['birthday'].markAsTouched();
            this.register.get('birthday').setErrors({'required': true})
          } else {
            if (this.register.get('document').invalid) {
              this.register.controls['document'].markAsTouched();
              this.register.get('document').setErrors({'required': true})
            }
          }
        }
      }
    }
  }

}
