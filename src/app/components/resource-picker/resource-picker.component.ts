import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Resource } from '../../models/resource';

@Component({
  selector: 'app-resource-picker',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './resource-picker.component.html',
  styleUrl: './resource-picker.component.scss'
})
export class ResourcePickerComponent {
  @Output() selectResource = new EventEmitter<Resource>();
  readonly resources = Resource;
}
