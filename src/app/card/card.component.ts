import { Component, OnInit, Input } from '@angular/core';
import { faEnvelope, faMapMarkedAlt, faPhone, faDatabase, faJpy, faD } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  @Input() user:any;
  faEnvelope = faEnvelope;
  faMapMarkedAlt = faMapMarkedAlt;
  faPhone = faPhone;
  faDatabase = faDatabase;
  constructor(){}
  ngOnInit():void{}
}
