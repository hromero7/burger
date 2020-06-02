const connection = require("./connection");

function printQuestionMarks(num) {
    const arr = [];
    for (let i = 0; i < num; i++){
        arr.push("?");
    }
    return arr.toString();
}

const orm = {
    selectAll: function(tableInput, cb) {
        const queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                console.log("mysql error, ", err)
                cb(null, err)

            }
            cb(result, null);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        const queryString = "INSERT INTO " + table + " (" + cols.toString() + ")" + " VALUES (" + printQuestionMarks(vals.length) + ") ";
        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });

    },
    updateOne: function(table, cols, condition, cb) {
        const queryString = "UPDATE " + table + " SET " + cols + " WHERE " + condition;
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }

};

module.exports = orm; 