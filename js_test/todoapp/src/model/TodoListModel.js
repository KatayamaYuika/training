import { EventEmitter } from "../EventEmitter.js";
import { TodoItemModel } from "./TodoItemModel.js";

export class TodoListModel extends EventEmitter {
    /** @type {TodoItemModel[]} todoアイテム一覧*/
    #items;

    constructor(item = []){
        super();
        this.#items = item;
    }

    /** @return {number} Todoアイテムの合計個数を返す */
    getTotalCount(){
        return this.#items.length;
    }
    
    /** @return {TodoItemModel[]} Todoアイテム一覧を返す*/
    getTodoItems(){
        return this.#items;
    }

    /** Todoリストの状態が更新されたときに呼び出されるリスナー関数を登録する
     * @param {listener: function} イベントリスナー
     */
    onChange(listener){
        //console.log("リスナー関数追加");
        this.addEventListener("change", listener);
    }

    /**todoリストの状態が変更されたときに呼ぶ、登録済みのリスナー関数を呼びだす */
    emitChange(){
        //console.log("emitChange");
        this.emit("change");
    }

    /**todoアイテムを更新する
     * @param {TodoItemModel} todoItem
     */
    addTodo(todoItem){
        this.#items.push(todoItem);
        //console.log(this.#items);
        this.emitChange();
    }

    /**
     * 指定したidのtodoItemのcompletedを更新する
     * @param {{id: number, completed: boolean}}  
     */
    updateTodo({id, completed}){
        //console.log("update");
        //idが一致するtodoを見つけ、あるならcompleted更新
        const todoItem = this.#items.find(todo => todo.id === id);
        if(!todoItem){
            //console.log("return");
            return;
        }
        todoItem.completed = completed;
        //console.log(todoItem);
        this.emitChange();
    }

    deleteTodo({id}){
        //console.log("delete");
        //idに一致しないアイテムのみを残すことで実装
        this.#items = this.#items.filter(todo => {
            return todo.id !== id;
        });
        this.emitChange();
    }
}