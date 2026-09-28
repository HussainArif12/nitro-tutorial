import type {
  HybridView,
  HybridViewMethods,
  HybridViewProps,
} from 'react-native-nitro-modules'

export interface ConfettiProps extends HybridViewProps {
  duration: number
}

export interface ConfettiMethods extends HybridViewMethods {
  showConfetti(): void
}

export type ConfettiViewType = HybridView<ConfettiProps, ConfettiMethods>
