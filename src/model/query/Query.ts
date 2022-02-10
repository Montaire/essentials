export default abstract class Query<T> implements Iterable<T>{

    [Symbol.iterator](): Iterator<T, any, undefined> {
        throw new Error("Method not implemented.");
    }

    abstract where(condition: (item: T) => boolean): this;

    first(condition?: (item: T) => boolean): T{
        if(condition){
            this.where(condition);
        }
        for(let item of this){
            return item;
        }
        return null;
    }

    abstract orderBy(field: (item:T) => any): this;
    
    
}