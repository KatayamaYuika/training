export class EventEmitter {
    //登録する[イベント名,Set(リスナー関数)]を管理するmap
    #listeners = new Map();

    /**
     * 指定したイベントが実行されたときに呼び出されるリスナー関数を追加する
     * @param {string} type イベント名
     * @param {function} listener イベントリスナー
     */
    addEventListener(type, listener){
        if(!this.#listeners.has(type)){
            this.#listeners.set(type, new Set());
        }
        const listenerSet = this.#listeners.get(type);
        listenerSet.add(listener);
        //console.log(this.#listeners);
    }

    /**
     * 指定したイベントをディスパッチする
     * @param {type: string}
     */
    emit(type){
        //console.log("emit");
        const listenerSet = this.#listeners.get(type);
        if(!listenerSet){
            return 
        }

        listenerSet.forEach(listener => {
            listener.call(this);
        })
    }

    /**
     * 指定したイベントのリスナーを削除する
     * @param {type: string, listener: function} イベント名、イベントリスナー
     */
    removeEventListener(type, listener){
        const listenerSet = this.#listeners.get(type);
        if(!listenerSet){
            return 
        }
        listenerSet.forEach(ownListener => {
            if(ownListener == listener){
                listenerSet.delete(listener);
            }
        })

    }
}