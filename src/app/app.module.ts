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
import { SbLangSelectorComponent } from './components/sb-lang-selector/sb-lang-selector.component';
import { PublicModule } from './modules/public/public.module';
import { SbLightSwitcherComponent } from './components/sb-light-switcher/sb-light-switcher.component';
import { IdbService } from './services/idb/idb.service';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { GuiService } from './services/gui/gui.service';
import { SbFooterComponent } from './components/sb-footer/sb-footer.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpBackend: HttpBackend) {
  return new MultiTranslateHttpLoader(httpBackend, [
    { prefix: './assets/i18n/', suffix: '.json' },
    { prefix: './assets/i18n/scrum-guide/', suffix: '.json' }
  ]);
}

@NgModule({
  declarations: [AppComponent, SbLangSelectorComponent, SbLightSwitcherComponent, SbFooterComponent],
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
    })
  ],
  providers: [IdbService, GuiService],
  bootstrap: [AppComponent],
  exports: [
    SbFooterComponent
  ]
})
export class AppModule {}
