import { getHostComponent, NitroModules } from 'react-native-nitro-modules'
import type { Battery } from './specs/Battery.nitro'
import type { ConfettiMethods, ConfettiProps } from './specs/ConfettiView.nitro'
import ConfettiViewConfig from '../nitrogen/generated/shared/json/ConfettiViewConfig.json'

// TODO: Export all HybridObjects here for the user
export const HybridBattery = NitroModules.createHybridObject<Battery>('Battery')
export const ConfettiView = getHostComponent<ConfettiProps, ConfettiMethods>(
  'ConfettiView',
  () => {
    return ConfettiViewConfig
  }
)
export { callback } from 'react-native-nitro-modules'
export { type ConfettiViewType } from './specs/ConfettiView.nitro'
