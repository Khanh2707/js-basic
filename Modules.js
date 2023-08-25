import {
    type_log
} from './constainst.js'

function logger(log, type = type_log) {
    console[type](log)
}

export default logger
// 1 module chỉ có thể import 1 default
// có thẻ import vô số kiểu thường