const sqlQuery = (sqlQuery, params, dbcon) => {
    return new Promise( (resolve, reject) =>{
        dbcon.query(sqlQuery, params, (err, result) => {
            if (err){
                reject(err);
                
            }else{
                    resolve(result);
                }
        });
    });
};

module.exports = sqlQuery;