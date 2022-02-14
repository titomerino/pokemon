import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit, OnDestroy {

  show = false;
  subscription: any;

  constructor(private loadingService: LoadingService) {
    this.subscription = this.loadingService.getLoadingStatus().subscribe(data => {
      this.show = data.show;
    })
  }

  ngOnInit(): void {
    this.show = this.loadingService.show;
  }

  ngOnDestroy(): void {
    this.subscription.deactivate();
  }

}
