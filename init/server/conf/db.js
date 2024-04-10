/**
 * @file 数据库配置
 * @author tshavhalufusingo <'2274807@students.wits.ac.za'>
 */

const IS_DEV = process.env.NODE_ENV === 'development';

const conf = IS_DEV
    // Local development environment database config
    ? {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'test',
        port: 3306
    }
    // Online environment database config
    : {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'test',
        port: 3306
    };

export default conf;
