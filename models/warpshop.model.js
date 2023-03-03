const sqlQuery = require("./sqlQuery");

const dbcon = require("./db.js");

const Warpshop = function(warpshopData){
    this.ID = warpshopData.ID;
    this.name = warpshopData.name;
    this.price = warpshopData.price;
    this.category = warpshopData.category;
}


Warpshop.getProductsList =  async(lowprice, highprice, category, resultData) => {
    const NO_OF_DISPLAY = 10;
    try{
        const noOfDataSetsResult = await sqlQuery(
            'SELECT COUNT(*) as nubOfPoc FROM productprice p INNER JOIN category c ON p.productID = c.productID WHERE price >= ? AND  price <=  ? AND category= ?', [lowprice, highprice, category], dbcon 
        );
        const noOfDataSets = parseInt(noOfDataSetsResult[0].nubOfPoc);

        if (noOfDataSets == 0){
            startposition = 0;
        } else if (startposition >= noOfDataSets && startPosition != 0){
            startposition = noOfDataSets-NO_OF_DISPLAY;
        }

        const SQL_Limit = 'Limit $(startPosition), $(NO_OF_DISPLAY)';
        const dataSetResult = await sqlQuery(
            'SELECT p.ID, p.Name, pp.price, c.category FROM product p INNER JOIN productprice pp ON p.ID = pp.productID INNER JOIN categories c ON p.ID = c.productID WHERE price >= ? AND  price <=  ? AND category= ? ' + SQL_Limit, [lowprice, highprice, category], dcon
        )
        let poc = Array();

        dataSetResult.forEach((element) => {
            poc.push(new poc({...element}));
        });
        resultData(null, poc, {start:startPosition, noData: noOfDataSets, noDisp: NO_OF_DISPLAY});
        return;
    } catch (err){
        resultData(null, err, null);
    }
    
}
