
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { switchMap} from 'rxjs/operators';

import { Configuration } from '../../shared/model/configuration';

@Injectable({ providedIn: 'root' })
export class ConfigurationService {
   private config: Configuration;
   constructor(private http: HttpClient) {}

  load(url: string) {
    return new Promise((resolve) => {
      this.http.get<Configuration>(url).pipe(
        switchMap(config => {
          this.config = config;
          return of(true);
        }))
        .subscribe(() => {
            // console.log('[RequestManager] finished loading app');
            resolve();
        });
    });

        }
getConfiguration(): Configuration {

    return this.config;
  }
}
