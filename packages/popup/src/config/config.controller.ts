import type { AppConfig } from "@chrome-safe-stream/shared/src";

interface IConfigController {
  getConfig(): Promise<Config>;
}

export class Config {
  private readonly config: Record<string, unknown>;

  constructor(config: Record<string, unknown>) {
    this.config = config;
  }

  get<TKey extends keyof AppConfig>(key: TKey) {
    return this.config[key] as AppConfig[TKey];
  }

  async set<TKey extends keyof AppConfig>(key: TKey, value: AppConfig[TKey]) {
    this.config[key] = value;
    await chrome.storage.sync.set({ config: this.config });
    return this;
  }
}

export class ConfigController implements IConfigController {
  private static readonly CONFIG_KEY = "config";

  private static instance: ConfigController;

  static getInstance() {
    if (!ConfigController.instance) {
      ConfigController.instance = new ConfigController();
    }
    return ConfigController.instance;
  }

  async getConfig() {
    const syncConfig = await chrome.storage.sync.get(
      ConfigController.CONFIG_KEY,
    );
    console.log("sync config", syncConfig);
    return new Config(syncConfig.config);
  }
}
