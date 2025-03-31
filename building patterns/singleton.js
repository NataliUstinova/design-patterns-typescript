"use strict";
class MyMapSingleton {
    constructor() {
        this.map = new Map();
    }
    clean() {
        this.map = new Map();
    }
    static get() {
        if (!MyMapSingleton.instance) {
            MyMapSingleton.instance = new MyMapSingleton();
        }
        return MyMapSingleton.instance;
    }
}
class Service1 {
    addMap(key, value) {
        const myMap = MyMapSingleton.get();
        myMap.map.set(key, value);
    }
}
class Service2 {
    getKeys(key) {
        const myMap = MyMapSingleton.get();
        console.log(myMap.map.get(key));
        myMap.clean();
        console.log(myMap.map.get(key));
    }
}
new Service1().addMap(1, 'Works');
new Service2().getKeys(1);
