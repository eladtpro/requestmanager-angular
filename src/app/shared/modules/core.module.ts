import { CacheService } from './../services/cache.service';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ConfigurationService } from '../services/configuration.service';
import { NotificationService } from '../services/notification.service';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { RequestService } from 'src/app/modules/requests/services/request.service';

export function ConfigurationLoader(configService: ConfigurationService) {
  // Note: this factory need to return a function (that return a promise)
  return () => configService.load(environment.configFile);
}

@NgModule({
  declarations: [],
  imports: [
    StoreModule,
    EffectsModule,
    HttpClientModule
  ],
  providers: [
    ConfigurationService,
    NotificationService,
    {
      provide: APP_INITIALIZER,
      useFactory: ConfigurationLoader,
      deps: [ConfigurationService],
      multi: true
    },
    CacheService,
    {
      provide: RequestService,
      useFactory:

    }
  ]
})
export class CoreModule { }