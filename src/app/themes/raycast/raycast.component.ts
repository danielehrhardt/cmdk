import { Component } from '@angular/core';

@Component({
  selector: 'app-raycast',
  templateUrl: './raycast.component.html',
})
export class RaycastComponent {
  value = 'Linear';
  setValue(value: string) {
    this.value = value;
  }
}
