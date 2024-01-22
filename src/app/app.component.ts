import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  selectedSvgId: string = '';
  selectedRegion: string = '';
  selectedIncome: string = '';
  
  selectedCapital: string = '';
  selectedLongitude: string = '';
  selectedLatitude: string = '';


  onSvgIdSelected(svgId: string) {
    this.selectedSvgId = svgId;
  }
  onRegionSelected(region: string) {
    this.selectedRegion = region;
  }
  onIncomeSelected(incomeId: string) {
    this.selectedIncome = incomeId;
  }
  onCapitalSelected(capital: string) {
    this.selectedCapital = capital;
  }
  onLongitudeSelected(longitude: string) {
    this.selectedLongitude = longitude;
  }
  onLatitudeSelected(latitude: string) {
    this.selectedLatitude = latitude;
  }
}
