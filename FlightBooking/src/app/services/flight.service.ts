import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  constructor(private http: HttpClient) {}

  async updateFlight(payload: any, id: number): Promise<any> {
    const url = `http://localhost:8081/search/update/${id}`;
    return await this.http.put(url, payload).toPromise();
  }
}
