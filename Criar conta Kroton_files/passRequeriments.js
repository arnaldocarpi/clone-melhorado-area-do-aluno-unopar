if (typeof jQuery === 'undefined') {
    throw new Error('PassRequirements requires jQuery')
}

+(function ($) {

    $.fn.PassRequirements = function (options) {

        /*
         * TODO
         * ====
         * 
         * store regexes in variables so they can be used by users through string 
         * specifications,ex 'number', 'special', etc
         * 
         */

        var defaults = {
            //            defaults: true
        };

        if (
            !options ||                     //if no options are passed                                  /*
            options.defaults == true ||     //if default option is passed with defaults set to true      * Extend options with default ones
            options.defaults == undefined   //if options are passed but defaults is not passed           */
        ) {
            if (!options) {                   //if no options are passed, 
                options = {};               //create an options object
            }
            defaults.rules = $.extend({
                minlength: {
                    text: "Pelo menos minLength caracteres",
                    minLength: 12,
                },
                containSpecialChars: {
                    text: "Pelo menos minLength caractere especial",
                    minLength: 0,
                    regex: new RegExp('([^!,%,&,@,#,$,^,*,?,_,~])', 'g')
                },
                containLowercase: {
                    text: "Pelo menos minLength caractere minúsculo",
                    minLength: 1,
                    regex: new RegExp('[^a-z]', 'g')
                },
                containUppercase: {
                    text: "Pelo menos minLength caractere maiúsculo",
                    minLength: 1,
                    regex: new RegExp('[^A-Z]', 'g')
                },
                containNumbers: {
                    text: "Pelo menos minLength número",
                    minLength: 1,
                    regex: new RegExp('[^0-9]', 'g')
                }
            }, options.rules);
        } else {
            defaults = options;     //if options are passed with defaults === false
        }



        var i = 0;

        return this.each(function () {

            if (!defaults.defaults && !defaults.rules) {
                console.error('You must pass in your rules if defaults is set to false. Skipping this input with id:[' + this.id + '] with class:[' + this.classList + ']');
                return false;
            }

            var requirementList = "";
            $(this).data('pass-req-id', i++);

            $(this).keyup(function () {
                var this_ = $(this);
                Object.getOwnPropertyNames(defaults.rules).forEach(function (val, idx, array) {
                    if (this_.val().replace(defaults.rules[val].regex, "").length > defaults.rules[val].minLength - 1) {
                        this_.next('.popover').find('#' + val).css('text-decoration', 'line-through').css('color', 'green').css("font-weight", "Bold");
                    } else {
                        this_.next('.popover').find('#' + val).css('text-decoration', 'none').css('color', 'red').css("font-weight", "Bold");
                    }

                })
            });

            Object.getOwnPropertyNames(defaults.rules).forEach(function (val, idx, array) {
                if (defaults.rules[val].minLength > 0)
                    requirementList += (("<li id='" + val + "'>" + defaults.rules[val].text).replace("minLength", defaults.rules[val].minLength));
            })
            try {
                $(this).popover({
                    title: 'Requisitos de senha',
                    trigger: options.trigger ? options.trigger : 'focus',
                    html: true,
                    width: 10000,
                    placement: options.popoverPlacement ? options.popoverPlacement : 'top',
                    content: 'Sua senha deve conter:<ul>' + requirementList + '</ul>'
                    //                        '<p>The confirm field is actived only if all criteria are met</p>'
                });
            } catch (e) {
                throw new Error('PassRequirements requires Bootstraps Popover plugin');
            }
            $(this).focus(function () {
                $(this).keyup();
            });
        });
    };

}(jQuery));