import { Component, OnInit } from '@angular/core';
import { ProxyService } from '../proxy-service/proxy.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  data!: any;
  max_length: number = 100;
  facts!: string;
  form!: FormGroup;
  sunriseSunsetInfo!: any
  loading: boolean = false;
  constructor(private serviceProxy: ProxyService, private fb: FormBuilder) { }
  ngOnInit(): void {
    if (this.data = "undefined") {
      this.data = localStorage.getItem("name")
    }
    this.randomFacts();
    this.form = this.fb.group({
      Latitude: ['', Validators.required],
      Longitude: ['', [Validators.required]],
      Date: ['', [Validators.required]],
    });
    this.serviceProxy.currentFormData.subscribe((res: any) => {
      if (res != null) {
        this.form.patchValue({
          Latitude: res.Latitude,
          Longitude: res.Longitude,
          Date: res.Date,
        });
      }
    })

  }
  load() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false
      this.onSubmit()
    }, 1000);
  }
  randomFacts() {
    this.serviceProxy.getReandomFacts(this.max_length).subscribe((res: any) => {
      this.facts = res.fact

    })
  }
  onInputBlur(controlName: string): void {
    const control = this.form.value
    if (control) {
      this.serviceProxy.setCurrentData(control)
    }
  }
  onSubmit() {
    if (this.form.valid) {
      const lat = this.form.get('Latitude')?.value;
      const lng = this.form.get('Longitude')?.value;
      const date = this.form.get('Date')?.value;
      this.serviceProxy.getSunriseInfo(lat, lng, date).subscribe((res: any) => {
        this.sunriseSunsetInfo = res.results


      })
    }
  }
}
