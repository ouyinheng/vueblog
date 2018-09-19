import Tooltip from './components/Tooltip'
import Filter from './components/filter'

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
}]

export default Routes