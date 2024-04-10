/**
 * @file uuap 配置
 * @author tshavhalufusingo <'2274807@students.wits.ac.za'>
 */

import os from 'os';

const IS_DEV = process.env.NODE_ENV === 'development';

export default IS_DEV
    ? {
        appKey: '{Your development APPKey}',
        service: '{uuap callback url for development}',
        serviceConf: {
            protocol: 'http',
            hostname: '{offline uuap host}',
            port: '8100',
            validateMethod: '/serviceValidate'
        }
    }
    : {
        appKey: 'Your online APPKey',
        service: '{uuap callback url for online}',
        serviceConf: {
            protocol: 'https',
            hostname: '{online uuap host}',
            validateMethod: '/serviceValidate'
        }
    };
