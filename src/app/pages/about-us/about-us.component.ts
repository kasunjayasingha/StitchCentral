import {Component, OnInit} from '@angular/core';
import {MessageService} from "primeng/api";

@Component({
  selector: 'about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
  }

  show() {

    // @ts-ignore
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Message Content',
    });
  }

}
