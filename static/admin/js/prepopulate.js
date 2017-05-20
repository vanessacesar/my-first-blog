<<<<<<< HEAD
(function($) {
    $.fn.prepopulate = function(dependencies, maxLength) {
=======
/*global URLify*/
(function($) {
    'use strict';
    $.fn.prepopulate = function(dependencies, maxLength, allowUnicode) {
>>>>>>> cf71fd562359847a78e93f945f9285ac075ea60e
        /*
            Depends on urlify.js
            Populates a selected field with the values of the dependent fields,
            URLifies and shortens the string.
            dependencies - array of dependent fields ids
            maxLength - maximum length of the URLify'd string
<<<<<<< HEAD
=======
            allowUnicode - Unicode support of the URLify'd string
>>>>>>> cf71fd562359847a78e93f945f9285ac075ea60e
        */
        return this.each(function() {
            var prepopulatedField = $(this);

<<<<<<< HEAD
            var populate = function () {
=======
            var populate = function() {
>>>>>>> cf71fd562359847a78e93f945f9285ac075ea60e
                // Bail if the field's value has been changed by the user
                if (prepopulatedField.data('_changed')) {
                    return;
                }

                var values = [];
                $.each(dependencies, function(i, field) {
                    field = $(field);
                    if (field.val().length > 0) {
                        values.push(field.val());
                    }
                });
<<<<<<< HEAD
                prepopulatedField.val(URLify(values.join(' '), maxLength));
=======
                prepopulatedField.val(URLify(values.join(' '), maxLength, allowUnicode));
>>>>>>> cf71fd562359847a78e93f945f9285ac075ea60e
            };

            prepopulatedField.data('_changed', false);
            prepopulatedField.change(function() {
                prepopulatedField.data('_changed', true);
            });

            if (!prepopulatedField.val()) {
                $(dependencies.join(',')).keyup(populate).change(populate).focus(populate);
            }
        });
    };
})(django.jQuery);
