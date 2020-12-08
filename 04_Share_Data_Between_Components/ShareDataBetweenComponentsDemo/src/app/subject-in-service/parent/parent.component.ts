import { Component, OnInit } from '@angular/core';
import { SubjectInServiceService } from '../subject-in-service.service';

@Component({
  selector: 'app-parent',
  template: '{{data | json}}<app-child></app-child>',
})
export class ParentComponent implements OnInit {
  constructor(private SubjectInService: SubjectInServiceService) {}
  data: string[] = [];
  ngOnInit(): void {
    this.SubjectInService.currentData.subscribe((e) => this.data.push(e));
  }
}
