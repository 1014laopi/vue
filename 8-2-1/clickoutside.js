Vue.directive("clickoutside", {
    bind: function (el, binding, vnode) {
        function documentHandler(e) {
            if (el.contains(e.target)) {
                return false;
            };
            if (binding.expression) {
                binding.value(e);
            }
        };

        function documentHandler2(e) {
            if (e.keyCode === 27 && binding.modifiers.esc === true) {
                if (binding.expression) {
                    binding.value(e);
                }
            }
        };
        el.__vueClickOutside__ = documentHandler;
        el.__vueEsc__ = documentHandler;
        document.addEventListener('click', documentHandler);
        document.addEventListener('keydown', documentHandler2);
    },
    update: function(el, binding, vnode, oldVnode) {
        console.log(binding.modifiers);
    },
    unbind: function () {
        document.removeEventListener('click', el.__vueClickOutside__);
        document.removeEventListener('keydown', el.__vueEsc__);
        delete el.__vueClickOutside__;
        delete el.__vueEsc__;
    }
})