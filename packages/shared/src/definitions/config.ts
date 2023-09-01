export const strategies = {
  NetStrategy: "NetStrategy",
} as const;

export type Strategy = keyof typeof strategies;

export type StrategyConfig = {
  enabled: boolean;
};

export type AppConfig = Record<Strategy, StrategyConfig>;
