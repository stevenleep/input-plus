import { ENABLED_CONFIG_PROVIDER } from "../context/ConfigFeatureFlags";

export function useAlreadyExtended() {
  return ENABLED_CONFIG_PROVIDER;
}