class MyMapSingleton {
  private static instance: MyMapSingleton; 
  map: Map<number, string> = new Map();
  
  private constructor() {}
  clean() {
    this.map = new Map();
  }
  
  public static get(): MyMapSingleton {
    if (!MyMapSingleton.instance) {
      MyMapSingleton.instance = new MyMapSingleton()
    } 
    return MyMapSingleton.instance
  }
}

class Service1 {
  addMap(key: number, value: string) {
    const myMap = MyMapSingleton.get()
    myMap.map.set(key, value)
  }
}

class Service2 {
  getKeys(key: number) {
    const myMap = MyMapSingleton.get()
    console.log(myMap.map.get(key))
    myMap.clean();
    console.log(myMap.map.get(key))
  }
}

new Service1().addMap(1, 'Works')
new Service2().getKeys(1);
