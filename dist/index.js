/** @license Apache-2.0 */

'use strict';

/**
* Test whether two single-precision complex floating-point numbers are the same value.
*
* @module @stdlib/complex-float32-base-assert-is-same-value
*
* @example
* var Complex64 = require( '@stdlib/complex-float32-ctor' );
* var isSameValuef = require( '@stdlib/complex-float32-base-assert-is-same-value' );
*
* var z1 = new Complex64( 5.0, 3.0 );
* var z2 = new Complex64( 5.0, 3.0 );
*
* var v = isSameValuef( z1, z2 );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
