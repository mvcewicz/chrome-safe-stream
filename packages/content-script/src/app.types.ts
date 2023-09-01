import { ProcessingStrategy } from "./types/strategy.types.ts";

export interface IApp {
  /**
   * Runs the app
   * Binds listener to DOM changes and processes them with registered services
   * @example app.run();
   * @returns {void}
   */
  run(): void;
  /**
   * Registers a service
   * @param service {ProcessingStrategy}
   * @example app.registerService(new MyService());
   * @returns {IApp}
   */
  registerService(service: ProcessingStrategy): IApp;
}
