<<<<<<< HEAD
=======
/*global django:true, jQuery:false*/
>>>>>>> cf71fd562359847a78e93f945f9285ac075ea60e
/* Puts the included jQuery into our own namespace using noConflict and passing
 * it 'true'. This ensures that the included jQuery doesn't pollute the global
 * namespace (i.e. this preserves pre-existing values for both window.$ and
 * window.jQuery).
 */
var django = django || {};
django.jQuery = jQuery.noConflict(true);
