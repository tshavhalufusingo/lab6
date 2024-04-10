/**
 * @file dev env
 * @author tshavhalufusingo <'2274807@students.wits.ac.za'>
 */

import merge from 'webpack-merge';
import prodEnv from './prod.env';

export default merge(prodEnv, {
    NODE_ENV: JSON.stringify('development')
});
