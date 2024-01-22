import { Component, Output, EventEmitter, ElementRef,ViewChild } from '@angular/core';
import { WorldService } from '../world.service';
import { InfoComponent } from '../info/info.component';

@Component({
  selector: 'app-world-map',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldMapComponent {

  constructor(
    private elementRef: ElementRef,
    private worldService: WorldService
    
    ) {}

  ngAfterViewInit() {
    const svgElement = this.elementRef.nativeElement.querySelector('svg');
    const pathElements = svgElement.querySelectorAll('path');
    pathElements.forEach((path: SVGPathElement) => {
      
      
      path.addEventListener('click', this.handleClick.bind(this));
    });
  }

  @Output() svgIdSelected = new EventEmitter<string>();
  @Output() regionSelected = new EventEmitter<string>();
  @Output() incomeSelected = new EventEmitter<string>();
  @Output() capitalSelected = new EventEmitter<string>();
  @Output() longitudeSelected = new EventEmitter<string>();
  @Output() latitudeSelected = new EventEmitter<string>();

  @ViewChild(InfoComponent)
private infocomponent!: InfoComponent;

handleClick(event: MouseEvent) {
  const path = event.target as SVGPathElement;
  const countryId = path.id;

  this.worldService.getCountryInfo(countryId).subscribe((data: any) => {
    const countryName = data[1][0].name;
    const region = data[1][0].region.value;
    const income = data[1][0].incomeLevel.value;
    const capitalCity = data[1][0].capitalCity;
    const longitude = data[1][0].longitude;
    const latitude = data[1][0].latitude;

    this.svgIdSelected.emit(countryName);
    this.incomeSelected.emit(income);
    this.capitalSelected.emit(capitalCity);
    this.longitudeSelected.emit(longitude);
    this.latitudeSelected.emit(latitude);
    this.regionSelected.emit(region);
    });
  }
}