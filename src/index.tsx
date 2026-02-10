import { NitroModules } from 'react-native-nitro-modules';
import type { SharedModule } from './SharedModule.nitro';

const SharedModuleHybridObject =
  NitroModules.createHybridObject<SharedModule>('SharedModule');

export function multiply(a: number, b: number): number {
  return SharedModuleHybridObject.multiply(a, b);
}
