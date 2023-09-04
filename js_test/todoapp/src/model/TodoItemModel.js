let todoItemCount = 0;

export class TodoItemModel{
    /** @type {number} TodoアイテムのID*/
    id; 
    /** @type {string} todoアイテムのタイトル*/ 
    title; 
    /**@type {boolean} totoアイテムが完了済みならばtrue*/
    completed; //

    /** @param {{title: string, completed: boolean}} */
    constructor(title, completed){
        this.id = todoItemCount++;
        this.title = title;
        this.completed = completed;
    }
}