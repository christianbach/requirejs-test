define(
    [
    "flight",
    "hammerjs"
    ], function (flight, Hammer, Supports) {

        return flight.component(carousel);

        function carousel() {
            this.attributes({
                nextImageSelector: ".right",
                previousImageSelector: ".left",
                imageLimit: 10,
                itemActiveSelector: ".item.active",
                itemSelector: ".item",
                quickNavigationSelector: ".carousel-indicators li",
                transitionDuration: 600,
                autoPlayInterval: 10000,
                cancelAutoPlay: false,
                sliding: false
            });

            this.nextImage = function () {
                this.trigger("stopAutoPlay");
                this.next();
            };

            this.previousImage = function () {
                this.trigger("stopAutoPlay");
                this.previous();
            };

            this.next = function () {
                var type = "next";
                var direction = "left";
                this.slide(type, direction);
            };

            this.previous = function () {
                var type = "prev";
                var direction = "right";
                this.slide(type, direction);
            };

            this.navigate = function (e) {
                this.trigger("stopAutoPlay");
                var element = $(e.target);
                var nextIndex = element.data().slideTo;
                var activeIndex = this.select("itemActiveSelector").index();

                if (nextIndex === activeIndex) return;

                var next = this.select("itemSelector").eq(nextIndex);

                if (nextIndex > activeIndex) {
                    this.slide("next", "left", next);
                } else {
                    this.slide("prev", "right", next);
                }
            };

            this.startAutoPlay = function () {
                this.autoPlayTimer = setInterval(function () {
                    this.next();
                }.bind(this), this.attr.autoPlayInterval);
            };

            this.stopAutoPlay = function () {
                clearInterval(this.autoPlayTimer);
            }

            this.updateControls = function (next) {
                var index = next.index();
                var navigation = this.select("quickNavigationSelector");
                navigation.removeClass("active");
                navigation.eq(index).addClass("active");
            };

            this.slide = function (type, direction, nextTarget) {
                if (this.attr.sliding) return;

                this.attr.sliding = true;
                var cssAnimation = Supports.cssProperty("animation");
                var active = this.select("itemActiveSelector");
                var next = nextTarget || active[type]();

                if (next.length === 0) {
                    var method = (type == "next") ? "first" : "last";
                    next = this.select("itemSelector")[method]();
                }

                next.addClass(type);

                this.updateControls(next);


                if (cssAnimation) {
                    next[0].offsetWidth;
                }

                active.addClass(direction);
                next.addClass(direction);

                if (cssAnimation) {

                    setTimeout(function () {
                        this.attr.sliding = false;
                        active.removeClass(["active", direction].join(" "));
                        next.removeClass([type, direction].join(" "));
                        next.addClass("active");
                    }.bind(this), this.attr.transitionDuration);

                } else {
                    active
                        .css("left", "0%")
                        .animate({
                            left: "-=100%"
                        }, this.attr.transitionDuration, function () {

                        }.bind(this));

                    next
                        .css("left", "100%")
                        .animate({
                            left: "-=100%"
                        }, this.attr.transitionDuration, function () {
                            this.attr.sliding = false;
                            active.removeClass(["active", direction].join(" "));
                            next.removeClass([type, direction].join(" "));
                            next.addClass("active");
                        }.bind(this));
                }
            };

            this.activateCarousel = function () {
                return (this.select("itemSelector").length > 1);
            };


            this.after('initialize', function () {
                if (!this.activateCarousel()) return;

                if (Supports.hasTouch()) {
                    var hammertime = new Hammer(this.node, {});
                    hammertime
                        .on('swipeleft', function (ev) {
                            this.next();
                        }.bind(this))
                        .on('swiperight', function (ev) {
                            this.previous();
                        }.bind(this));
                }

                this.on('click', {
                    nextImageSelector: this.nextImage,
                    previousImageSelector: this.previousImage,
                    quickNavigationSelector: this.navigate
                });

                this.on('stopAutoPlay', function () {
                    this.stopAutoPlay();
                });

                this.startAutoPlay();
            });
        }
    }
);