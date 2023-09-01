import { AppConfig } from "@chrome-safe-stream/shared";

export class ConfigService {
  private config: AppConfig | undefined = undefined;

  private static CONFIG_KEY = "config";

  async read() {
    if (this.config) {
      return this.config;
    }
    const syncStorage = await chrome.storage.sync.get(ConfigService.CONFIG_KEY);
    return syncStorage.config as AppConfig;
  }

  update(config: AppConfig) {
    this.config = config;
    return this;
  }

  subscribe(cb: (config: AppConfig) => void) {
    chrome.storage.onChanged.addListener((changes) => {
      if (changes.config) {
        this.update(changes.config.newValue);
        cb(this.config!);
      }
    });
  }
}
