define(
    [
    "flight",
    "http://widget.uservoice.com/sB2x4dr5eVas5XNqHrKA"
    ], function (flight, UserVoice, Supports) {

        UserVoice = window.UserVoice;

        return flight.component(feedback);

        function feedback() {
            this.attributes({
                activateAfterMs: 2000
            });

            this.setup = function () {
                UserVoice.push(['set', {
                    accent_color: '#e23a39',
                }]);

                // Or, use your own custom trigger:
                UserVoice.push(['addTrigger', "#feedback-button", { mode: 'contact' }]);

                setTimeout(function () {
                    this.$node.addClass("active");
                }.bind(this), this.attr.activateAfterMs);
            };

            this.after('initialize', function () {
                this.setup();
            });
        }
    }
);