/**
 * @file 通用方法
 * @author tshavhalufusingo <'2274807@students.wits.ac.za'>
 */

import {join} from 'path';

/**
 * 获取 ip
 *
 * @return {string} ip 地址
 */
export function getIP() {
    const ifaces = os.networkInterfaces();
    const defultAddress = '127.0.0.1';
    let ip = defultAddress;

    /* eslint-disable fecs-use-for-of, no-loop-func*/
    for (const dev in ifaces) {
        if (ifaces.hasOwnProperty(dev)) {
            /* jshint loopfunc: true */
            ifaces[dev].forEach(details => {
                if (ip === defultAddress && details.family === 'IPv4') {
                    ip = details.address;
                }
            });
        }
    }
    /* eslint-enable fecs-use-for-of, no-loop-func */

    return ip;
}

// 日志目录
export const logDir = join(__dirname, '..', 'logs');
