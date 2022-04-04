import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './Pages/home/home.component';
import { ScanComponent } from './Pages/scan/scan.component';
import { GenerateComponent } from './Pages/generate/generate.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { FormatsDialogComponent } from './formats-dialog/formats-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { AppInfoDialogComponent } from './app-info-dialog/app-info-dialog.component';
import { AppInfoComponent } from './app-info/app-info.component';
import {MatMenuModule} from '@angular/material/menu';
import { NgxFileDragDropModule } from 'ngx-file-drag-drop';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TableGeneratorComponent } from './Pages/table-generator/table-generator.component';
import { environment } from 'src/environments/environment';
import {provideAuth, getAuth} from '@angular/fire/auth';
import { QrCodeModule } from 'ng-qrcode';
import { FormsModule } from '@angular/forms';
import { OutputScreenComponent } from './Pages/output-screen/output-screen.component';
import { ScanoutputscreenComponent } from './Pages/scanoutputscreen/scanoutputscreen.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import {ConnectionServiceModule} from 'ng-connection-service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ScanComponent,
    GenerateComponent,
    FormatsDialogComponent,
    AppInfoDialogComponent,
    AppInfoComponent,
    TableGeneratorComponent,
    OutputScreenComponent,
    ScanoutputscreenComponent,
    FooterComponent,
  ],
  imports: [
    provideAuth(() => getAuth()),
    QrCodeModule,
    BrowserAnimationsModule,
    ConnectionServiceModule,
    ReactiveFormsModule,
    FormsModule,
    NgxFileDragDropModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatMenuModule,
    ZXingScannerModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,
    MatListModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
