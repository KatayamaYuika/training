import { TodoListModel } from "./model/TodoListModel.js";
import { TodoItemModel } from "./model/TodoItemModel.js";
import { TodoListView } from "./view/TodoListView.js";
import { element, render } from "./view/html-util.js";

export class App {
    #todoListView = new TodoListView();
    //TodoListModelの初期化
    #todoListModel = new TodoListModel([]);

    handleAdd(title){
        this.#todoListModel.addTodo(new TodoItemModel(title, false));
    }

    handleUpdate({id, completed}){
        this.#todoListModel.updateTodo({id, completed});
    }

    handleDelete({id}){
        this.#todoListModel.deleteTodo({id});
    }

    mount() {
        const formElement = document.querySelector("#js-form");
        const inputElement = document.querySelector("#js-form-input");
        const containerElement = document.querySelector("#js-todo-list");
        const todoItemCountElement = document.querySelector("#js-todo-count");

        // TodoListModelの状態が更新されたら表示を更新する
        this.#todoListModel.onChange(() => {
            //それぞれのtodoアイテムをtodoListElementに追加
            const todoItems = this.#todoListModel.getTodoItems();
            console.log(todoItems);
            const todoListElement = this.#todoListView.createElement(todoItems, {
                onUpdateTodo: ({id, completed}) => {
                    this.handleUpdate({id, completed});
                },
                onDeleteTodo: ({id}) => {
                    this.handleDelete({id});
                }
            });
            
            //コンテナ要素の中身をtodoリストをまとめるListで上書き
            render(todoListElement, containerElement);
            //アイテム数の表示を更新
            todoItemCountElement.textContent = `Todoアイテム数: ${this.#todoListModel.getTotalCount()}`;
        });

        //formを送信したら新しいtodoItemModelを追加
        formElement.addEventListener('submit', (event) => {
            event.preventDefault();
            //新しいtodoItemをtodoListに追加する
            this.handleAdd(inputElement.value);
            //console.log(inputElement.value);
            inputElement.value = "";
        })
    }
}