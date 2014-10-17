define(
    [
        "jquery"
    ], function ($) {
        "use strict";

        function hasRequireAttribute($element) {
            var attribute = $element.data("require");
            return typeof attribute !== 'undefined' && attribute !== false;
        }

        function initRequiredModules(el, callback) {
            var $el = $(el),
                modulesToRequire = $el.data("require"),
                modules = modulesToRequire.split(' ');

            require(modules, function () {
                for (var i = 0; i < arguments.length; i++) {
                    arguments[i].init.apply(el);
                }

                callback(el);
            });
        }

        function getElementsWithDataRequireAttribute($markup) {
            var elements = [];
            /*
            $markup.each(function () {
                if (hasRequireAttribute($(this))) {
                    elements.push(this);
                }
            });
            */
            $markup.find('[data-require]').each(function () {
                elements.push(this);
            });

            return elements;
        }

        function loadDataRequireModules($markup, callback) {

            var $elements = getElementsWithDataRequireAttribute($markup);

            if ($elements.length === 0) {
                callback();
            }

            for (var i = 0; i < $elements.length; i++) {
                initRequiredModules($elements[i], function (e) {
                
                    $elements.splice($elements.indexOf(e), 1);

                    if ($elements.length === 0) {
                        callback();
                    }
                    
                });
            }
        }

        function init($markup, callback) {
            loadDataRequireModules($markup, function () {
                if (callback !== undefined) {
                    callback();
                }
            });
        }

        return {
            init: init
        };
    }
);