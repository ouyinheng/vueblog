import Tooltip from './components/Tooltip'
import Filter from './components/filter'
import TimerShaft from './components/timerShaft'
import oyhCase from './components/switchcase'

const Routes = [{
    path: '/Tooltip',
    name: 'Tooltip',
    component: Tooltip,
    meta: {
        title: 'Tooltip'
    }
}, {
    path: '/filter',
    name: 'Filter',
    component: Filter,
    meta: {
        title: 'ImageFilter'
    }
}, {
    path: '/timerShaft',
    name: 'TimerShaft',
    component: TimerShaft,
    meta: {
        title: 'TimerShaft'
    }
}, {
    path: '/switchcase',
    name: 'oyhCase',
    component: oyhCase,
    meta: {
        title: 'oyhCase'
    }
}]

export default Routes