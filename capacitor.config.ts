import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'todo-skyblock',
  webDir: 'dist/todoSkyblock/browser',

  server: {
    // url: 'http://192.168.100.68:8100', //server casa
    url: 'http://192.168.100.230:8100', //server pai
    cleartext: true
  }
};

export default config;
