var Time = {
    // 获取当前时间
    getUnix() {
        var date = new Date();
        return date.getTime();
    },
    // 获取今天0点时间
    getTodayUnix() {
        var date = new Date();
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date.getTime();
    },
    // 获取今年1月1日 0点时间
    getYearUnix() {
        var date = new Date();
        date.setMonth(0);
        date.setDate(1);
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date.getTime();
    },
    // 获取标准年月日
    getLastDate(time) {
        var date = new Date(time);
        var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
        var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        return date.getFullYear() + '-' + month + '-' + day;
    }, 
    // 转换时间
    getFormateTime(timestamp) {
        var now = this.getUnix();
        var today = this.getTodayUnix();
        var year = this.getYearUnix();
        var timer = (now - timestamp) / 1000; //转换为秒级时间戳
        var tip = '';
        if (timer < 0) {
            tip = '刚刚';
        } else if (Math.floor(timer / 60) < 0) {
            tip = '刚刚';
        } else if (timer < 3600) {
            tip = Math.floor(timer / 60) + '分钟前';
        } else if (timer >= 3600 && (timestamp - today) >= 0) {
            tip = Math.floor(timer / 3600) + '小时前';
        } else if (timer / 86400 <= 31) {
            tip = Math.floor(timer / 86400) + '天前';
        } else {
            tip = this.getLastDate(timestamp);
        }
        return tip;
    },
    // 转换天数
    getFormateDay(timestamp) {
        var now = this.getUnix();
        var tip = ''
        var timer = (now - timestamp) / 1000;
        if (Math.floor(timer / 86400) <= 0) {
            tip = '刚出生，未满一天';
        } else {
            tip = '已经出生' + Math.floor(timer / 86400) + '天';
        };
        return tip;
    },
    // 转换出生时间
    getFormateBirth(timestamp) {
        var now = this.getUnix();
        var tip = '';
        var timer = (now - timestamp) / 1000;
        var year = Math.floor(timer / 86400);
        // var month = Math.floor((timer - year * 86400) / )
    }
};

Vue.directive('time', {
    bind: function(el, binding) {
        el.innerHTML = Time.getFormateTime(binding.value);
        el._timeout_ = setInterval(function() {
            el.innerHTML = Time.getFormateTime(binding.value);
        }, 60000);
    },
    unbind: function() {
        clearInterval(el._timeout_);
        delete el._timeout_;
    }
});

Vue.directive('birthday', {
    bind: function(el, binding, vnode) {
        el.innerHTML = Time.getFormateDay((new Date()).getTime());
    }
})