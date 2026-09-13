import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app-module';
import { Capacitor } from '@capacitor/core';
import { StatusBar, Style } from '@capacitor/status-bar';

  platformBrowser()
    .bootstrapModule(AppModule, {})
    .then(() => {
      if (Capacitor.isNativePlatform()) {
        StatusBar.setOverlaysWebView({ overlay: false });
        StatusBar.setStyle({ style: Style.Light });
        StatusBar.setBackgroundColor({ color: '#ffffff' });
      }
    })
  .catch((err) => console.error(err));
