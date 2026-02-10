import { NitroModules } from "react-native-nitro-modules";
import type { SharedModule } from "./SharedModule.nitro";
//ne pas prendre en compte, c'est juste pour tester les modules natifs
const SharedModuleHybridObject =
  NitroModules.createHybridObject<SharedModule>("SharedModule");

export function multiply(a: number, b: number): number {
  return SharedModuleHybridObject.multiply(a, b);
}

export * from "./types/TravelType";
