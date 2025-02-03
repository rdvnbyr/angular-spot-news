import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  get apiKey() {
    return environment.api_key;
  }

  get apiUrl() {
    return environment.api_url;
  }
}
