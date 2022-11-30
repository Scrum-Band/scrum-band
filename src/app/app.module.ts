import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MaterialModule } from './modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpBackend } from '@angular/common/http';
import { SbLangSelectorComponent } from './modules/layout/sb-lang-selector/sb-lang-selector.component';
import { PublicModule } from './modules/public/public.module';
import { SbLightSwitcherComponent } from './modules/layout/sb-light-switcher/sb-light-switcher.component';
import { IdbService } from './services/idb/idb.service';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { GuiService } from './services/gui/gui.service';
import { SbFooterComponent } from './modules/layout/sb-footer/sb-footer.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAnalytics, getAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { SbSimpleDialogComponent } from './modules/layout/sb-simple-dialog/sb-simple-dialog.component';
import { SbBackgroundComponent } from './modules/layout/sb-background/sb-background.component';
import { LayoutModule } from './modules/layout/layout.module';
import { AuthModule } from './modules/auth/auth.module';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpBackend: HttpBackend) {
  return new MultiTranslateHttpLoader(httpBackend, [
    { prefix: './assets/i18n/', suffix: '.json' },
    { prefix: './assets/i18n/scrum-guide/', suffix: '.json' }
  ]);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    PublicModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    }),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpBackend]
      }
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    LayoutModule,
    AuthModule
  ],
  providers: [IdbService, GuiService, ScreenTrackingService, UserTrackingService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
