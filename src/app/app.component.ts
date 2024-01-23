import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  selectedCapital: string = '';
  selectedId: string = '';
  selectedIncome: string = '';
  selectedLatitude: string = '';
  selectedLongitude: string = '';
  selectedRegion: string = '';

  onCapitalSelected(capital: string) {
    this.selectedCapital = capital;
  }
  onIdSelected(Id: string) {
    this.selectedId = Id;
  }
  onIncomeSelected(incomeId: string) {
    this.selectedIncome = incomeId;
  }
  onLatitudeSelected(latitude: string) {
    this.selectedLatitude = latitude;
  }
  onLongitudeSelected(longitude: string) {
    this.selectedLongitude = longitude;
  }
  onRegionSelected(region: string) {
    this.selectedRegion = region;
  }
}
