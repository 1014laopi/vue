var app = new Vue({
    el: '#app',
    data: {
        columns: [{
                title: '姓名',
                key: 'name'
            },
            {
                title: '年龄',
                key: 'age',
                sortable: true
            },
            {
                title: '出生日期',
                key: 'birthday',
                sortable: true
            },
            {
                title: '地址',
                key: 'address'
            },
        ],
        data: [{
                name: '王小明',
                age: 18,
                birthday: '1999-02-21',
                address: '北京市朝阳区'
            },
            {
                name: '张小刚',
                age: 19,
                birthday: '1998-11-07',
                address: '北京市海淀区'
            },
            {
                name: '李晓红',
                age: 30,
                birthday: '1987-01-28',
                address: '上海市浦东'
            },
            {
                name: '周小伟',
                age: 26,
                birthday: '1991-10-10',
                address: '深圳市南山区'
            }
        ]
    },
    methods: {
        handleAddData() {
            this.data.push({
                name: '刘晓天',
                age: 20,
                birthday: '1997-07-19',
                address: '北京市东直门'
            });
        }
    }
})