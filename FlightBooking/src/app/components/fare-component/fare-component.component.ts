import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-fare-component',
  templateUrl: './fare-component.component.html',
  styleUrls: ['./fare-component.component.css']
})
export class FareComponentComponent implements OnInit {

  constructor(private http:HttpClient) { }

  onSubmit(data:any){

    this.http.post('http://localhost:8801/fare', data)
    .subscribe((result:any)=>{
      console.warn(result);
    })
    console.warn(data);
  }
  ngOnInit(): void {
  }

}
