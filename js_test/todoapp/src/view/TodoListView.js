import {element} from "./html-util.js";
import {TodoItemView} from "./TodoItemView.js";

export class TodoListView{
    /**
     * `todoItems`に対応するTodoリストのHTML要素を作成して返す
     * @param {TodoItemModel[]} todoItems TodoItemModelの配列
     * @param {function({id:number, completed: boolean})} onUpdateTodo チェックボックスの更新イベントリスナー
     * @param {function({id:number})} onDeleteTodo 削除ボタンのクリックイベントリスナー
     * @returns {Element} TodoItemModelの配列に対応したリストのHTML要素
     */

    createElement(todoItems, {onUpdateTodo, onDeleteTodo}){
        //todoリストをまとめるHTML要素
        const todoListElement = element`<ul></ul>`;
        //それぞれのtodoアイテムに対応したHTML要素を作成し、リストに追加7
        //console.log("pi");
        todoItems.forEach(todoItem => {
            const todoItemView = new TodoItemView();
            const todoItemElement = todoItemView.createElement(todoItem, {onDeleteTodo, onUpdateTodo});
            console.log(todoItem.title);
            todoListElement.appendChild(todoItemElement);
        });
        return todoListElement;
        

    }
}
