import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent  implements OnInit{
  @Input() capitalCity!: string;
  @Input() countryId!: string;
  @Input() countryIncome!: string;
  @Input() latitude!: string;
  @Input() longitude!: string;
  @Input() countryRegion!: string;

  constructor() { }

  ngOnInit(): void { }
}

