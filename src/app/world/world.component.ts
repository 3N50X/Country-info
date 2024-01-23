import { Component, Output, EventEmitter, ElementRef} from '@angular/core';
import { WorldService } from '../world.service';


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

  @Output() capitalSelected = new EventEmitter<string>();
  @Output() idSelected = new EventEmitter<string>();
  @Output() incomeSelected = new EventEmitter<string>();
  @Output() latitudeSelected = new EventEmitter<string>();
  @Output() longitudeSelected = new EventEmitter<string>();
  @Output() regionSelected = new EventEmitter<string>();


handleClick(event: MouseEvent) {
  const path = event.target as SVGPathElement;
  const countryId = path.id;

  this.worldService.getCountryInfo(countryId).subscribe(
    (data: any) => {

    const countryName = data[1][0].name;
    const capitalCity = data[1][0].capitalCity;
    const income = data[1][0].incomeLevel.value;
    const latitude = data[1][0].latitude;
    const longitude = data[1][0].longitude;
    const region = data[1][0].region.value;

    this.capitalSelected.emit(capitalCity);
    this.idSelected.emit(countryName);
    this.incomeSelected.emit(income);
    this.latitudeSelected.emit(latitude);
    this.longitudeSelected.emit(longitude);
    this.regionSelected.emit(region);
    },
    (error) => {
      console.error('Error fetching country information:', error);
    }
    );
  }
}