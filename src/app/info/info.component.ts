import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent  implements OnInit{
  @Input() countryId!: string;
  @Input() countryRegion!: string;
  @Input() countryIncome!: string;
  @Input() countryCapital!: string;
  @Input() countryLongitude!: string;
  @Input() countryLatitude!: string;

  constructor() { }

  ngOnInit(): void { }
}

