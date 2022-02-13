import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;

  constructor() {
  }

  ngOnInit(): void {
    this.title = "¡Hola! Configuremos tu perfil";
    this.subtitle = "Queremos conocerte mejor.";
  }
}
