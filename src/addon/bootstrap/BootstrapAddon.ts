import { Addon, Application, AssetService, StyleAsset } from "@fortles/core";
import Path from "path";
import * as url from "url";

export default class BootstrapAddon implements Addon{
    async prepareAddon(application: Application): Promise<void> {
        let asset = new StyleAsset(await import.meta.resolve("bootstrap/dist/css/bootstrap.min.css"));
        application.getService(AssetService).add(asset);
    }

}