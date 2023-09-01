import { AppConfig } from "@chrome-safe-stream/shared/src";

export type ProcessingStrategy = {
  /**
   * Name of the strategy
   * @example
   * getName() {
   *  return "NetStrategy";
   * }
   * @returns {string} - name of the strategy
   */
  getName(): keyof AppConfig;
  /**
   * Defines if the input should be processed by this strategy
   * @param input {string} - textContent of the node
   * @example
   * shouldProcess(input: string) {
   *  return input.includes("hello");
   * }
   * @returns {boolean} - true if the input should be processed by this strategy
   */
  shouldProcess(input: string): boolean;
  /**
   * Processes the input
   * @param input {string} - textContent of the node
   * @example
   * process(input: string) {
   *  return input.replace("hello", "world");
   * }
   * @returns {string} - processed input
   */
  process(input: string): string;
};
