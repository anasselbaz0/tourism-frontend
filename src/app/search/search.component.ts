import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../http.service';
import { City } from '../model/city/city';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  cities: City[];
  resultCities: City[];

  constructor(
    private http: HttpService
  ) { }

  searchForm = new FormGroup({
    keyword: new FormControl(''),
    continent: new FormControl(''),
    country: new FormControl(''),
    city: new FormControl(''),
  });

  onSubmit() {
    console.log(this.searchForm.value);
    this.http.getCities().subscribe((response) => this.fillResultCities(response));
  }

  ngOnInit() {
    this.http.getCities().subscribe((response) => this.fillCities(response));
  }

  fillCities(response) {
    this.cities = response;
  }
  fillResultCities(response) {
    this.resultCities = response;
  }



}
