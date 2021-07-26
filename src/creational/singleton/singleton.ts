export class singleton {
    
    private static _instance: singleton | null = null
   
    
    private constructor() {}

    static get instance(): singleton{
        if (singleton._instance == null) {
            singleton._instance = new singleton()
        }
        return singleton._instance
    }

}

const instance1 = singleton.instance
const instance2 = singleton.instance

console.log(instance1 === instance2)