import { Component } from '@angular/core';
import { faHouseCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faShirt } from '@fortawesome/free-solid-svg-icons';
import { faRug } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  faHouseCircleCheck = faHouseCircleCheck;
  faShirt = faShirt;
  faRug = faRug;
  faCircleCheck = faCircleCheck;
}
