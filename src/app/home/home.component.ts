import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';
import { faHouseCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faShirt } from '@fortawesome/free-solid-svg-icons';
import { faRug } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  faHouseCircleCheck = faHouseCircleCheck;
  faShirt = faShirt;
  faRug = faRug;
  faCircleCheck = faCircleCheck;
  faArrowRight = faArrowRight;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'shirt',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/imgs/fb.svg')
    );
  }

  ngOnInit() {
    AOS.init({ disable: 'mobile' }); //AOS - 2
    AOS.refresh(); //refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
  }
}
