import type { HybridObject } from 'react-native-nitro-modules'

export interface Battery extends HybridObject<{ android: 'kotlin' }> {
  getBattery(): number
}
