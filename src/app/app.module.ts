import { NgModule, isDevMode, Component, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule, provideRouter } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './icons-provider.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';

/* ng zorro */
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

/* components and pages */
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import { IndexComponent } from './pages/index/index.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BbcodeEditorComponent } from './components/bbcode-editor/bbcode-editor.component';
import { NewMovieListngComponent } from './components/new-movie-listng/new-movie-listng.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

/** i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import en from '@angular/common/locales/en';
import { TranslocoRootModule } from './transloco-root.module';
registerLocaleData(en);
registerLocaleData(zh);

@NgModule({
    declarations: [
        AppComponent,
        ChatBoxComponent,
        IndexComponent,
        AboutComponent,
        PageNotFoundComponent,
        BbcodeEditorComponent,
        NewMovieListngComponent,
        SearchBoxComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        RouterModule,
        BrowserAnimationsModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: !isDevMode(),
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000'
        }),
        HttpClientModule,
        IconsProviderModule,
        NzLayoutModule,
        NzMenuModule,
        NzCardModule,
        NgOptimizedImage,
        NzBackTopModule,
        NzButtonModule,
        NzGridModule,
        NzListModule,
        NzRateModule,
        NzInputModule,
        NzBadgeModule,
        NzAvatarModule,
        TranslocoRootModule,
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
