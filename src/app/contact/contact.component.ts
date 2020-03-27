import { Component, OnInit } from '@angular/core';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  faAddressCard = faAddressCard;
  faLinkedin = faLinkedin;
  constructor() {}

  ngOnInit(): void {}
}
