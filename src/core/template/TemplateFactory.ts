import { Application } from "essentials/src";
import Template from "./Template.js";

export default class TemplateFactory{
	public application: Application;
	public templates: Map<string, Template>;

    constructor(application: Application){
        this.application = application;
    }

    build(rootFolder: string){
        this.templates.set("Main", new Template("./view/Main.html"));
    }

    get(name: string){
        return this.templates.get(name);
    }
}