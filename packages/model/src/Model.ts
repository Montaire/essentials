import { Connection, ModelDescriptor, Query, Migartor, Entity } from "./index.js";


export class Model{

    protected modelDescriptor: ModelDescriptor;
    protected connections: Map<string, Connection>;

    constructor(modelDescriptor: ModelDescriptor = new ModelDescriptor(), connections = new  Map<string, Connection>()){
        this.modelDescriptor = modelDescriptor;
        this.connections = connections;
    }

    public migrate(): void{
        const migrator = new Migartor(this);
        migrator.migrate();
    }

    public getConnections(): Map<string, Connection>{
        return this.connections;
    }

    public getModelDescriptor(): ModelDescriptor{
        return this.modelDescriptor;
    }

    query<T extends Entity>(type: new() => T): Query<T>{
        throw Error("Not implemented");
    }
}