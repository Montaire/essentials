import { TestUser } from "./model/TestUser.js";
class TestQuery{
    // We mark the function to be processed by the query translator engne.
    //@expression
    getSimpleQuery() {
        let asd = {
            pox: "asd"
        };
        return TestUser.query()
            .where(x => x.name == "test" || x.name == asd.pox);
    }
}

const testQuery = new TestQuery();

describe("ExpressionBuilder", function(){
    it("Translates a simple query.", function(){
        const query = testQuery.getSimpleQuery();
        
    });
});