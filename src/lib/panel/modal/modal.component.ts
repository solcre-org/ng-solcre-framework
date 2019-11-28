import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: []
})
export class ModalComponent implements OnInit {

  @Input() state: boolean;

  constructor() { }

  ngOnInit() {
  }

  onCloseModal(){
    this.state = false;
  }

}
