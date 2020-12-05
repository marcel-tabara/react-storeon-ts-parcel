import { StoreonModule } from 'storeon'
import { CounterEvents, CounterState } from './types'

const counterModule: StoreonModule<CounterState, CounterEvents> = (store) => {
  store.on('@init', () => ({ counter: 0 }))
  store.on('inc', (state) => ({ counter: state.counter + 1 }))
  store.on('dec', (state) => ({ counter: state.counter - 1 }))
}

export default counterModule
