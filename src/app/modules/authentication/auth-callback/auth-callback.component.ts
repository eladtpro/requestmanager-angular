import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { StorageService } from 'src/app/shared/store/storage.service';
import { OAuthErrorEvent, EventType } from 'angular-oauth2-oidc';

@Component({
  selector: 'ms-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.css']
})
export class AuthCallbackComponent implements OnInit {
  constructor(private router: Router, private storage: StorageService) { }

  error: string;
  errorDetails: string[];
  state: string;
  type: EventType;
  reason: string;

  ngOnInit() {
    const error: OAuthErrorEvent = this.storage.get<OAuthErrorEvent>('login-error');
    if (null != error) {
      this.type = error.type;
      this.reason = JSON.stringify(error.reason);
      this.error = error.params['error'];
      this.errorDetails = error.params['error_description'].toString().split('.');
      this.state = error.params['state'];
      return;
    }

    if (this.storage.contains(StorageService.REDIRECT_URL_KEY)) {
      const redirectUrl = window.location.origin + (this.storage.get(StorageService.REDIRECT_URL_KEY) || '/');
      this.router.navigateByUrl(redirectUrl);
      this.storage.remove(StorageService.REDIRECT_URL_KEY)
    }
  }
}
