import { Component } from '@angular/core';

import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  faFacebook = faFacebookF;
  faWhatsapp = faWhatsapp;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faLocationDot = faLocationDot;
}
