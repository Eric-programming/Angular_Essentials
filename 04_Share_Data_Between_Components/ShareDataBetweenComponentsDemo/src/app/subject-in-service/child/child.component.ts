import { Component, OnInit } from '@angular/core';
import { SubjectInServiceService } from '../subject-in-service.service';

@Component({
  selector: 'app-child',
  template: '',
})
export class ChildComponent implements OnInit {
  constructor(private SubjectInService: SubjectInServiceService) {}

  ngOnInit(): void {
    this.SubjectInService.updateData('This data is updated from child');
  }
}
