import { IApp } from "./app.types.ts";
import { ProcessingStrategy } from "./types/strategy.types.ts";
import { ConfigService } from "./features/config/config.service.ts";

export class App implements IApp {
  /**
   * List of registered strategies
   * @example
   */
  private registeredStrategies: ProcessingStrategy[] = [];

  /**
   * List of strategies that should be used
   */
  private workingStrategies: ProcessingStrategy[] = [];

  /**
   * Config service
   */
  private readonly configService: ConfigService;

  constructor() {
    this.configService = new ConfigService();
  }

  private async syncServices() {
    const config = await this.configService.read();
    this.workingStrategies = this.registeredStrategies.filter((service) => {
      return config[service.getName()]?.enabled;
    });
  }

  public async run() {
    await this.syncServices();
    this.bindListenerToStorageChanges();
    this.bindListenerToDOMChanges();
  }

  private bindListenerToStorageChanges() {
    this.configService.subscribe(this.syncServices.bind(this));
  }

  public registerService(service: ProcessingStrategy) {
    this.registeredStrategies.push(service);
    return this;
  }

  private listener() {
    if (!this.workingStrategies.length) {
      return;
    }

    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
    );

    while (walker.nextNode()) {
      const node = walker.currentNode;

      if (!node.textContent) {
        continue;
      }

      const input = node.textContent;

      const servicesToProcess = this.workingStrategies.filter((service) => {
        return service.shouldProcess(input);
      });

      if (!servicesToProcess.length) continue;

      const result = servicesToProcess.reduce((acc, service) => {
        return service.process(acc);
      }, input);

      node.textContent = result;
    }
  }

  private bindListenerToDOMChanges() {
    const observer = new MutationObserver(this.listener.bind(this));
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }
}
