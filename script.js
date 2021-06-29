const app = new Vue(
    {
        el: '#app',
        data: {
            todoList: [
            "Fare i compiti",
            "Fare la spesa",
            "Fare il bucato"
            ],
            newTodoList: "",
        },
        methods:{
            addNewList: function() {
                this.todoList.push(this.newTodoList);
                this.newTodoList = "";
            },
            deleteNewList: function (index){
                this.todoList.splice(index, 1);
            },
        },
    }
);