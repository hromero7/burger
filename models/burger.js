const orm = require("../config/orm");

const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res, err) {
            if(err){
                cb(null, err)
            } else {
                cb(res, null);
            }
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(cols, condition, cb) {
        orm.updateOne("burgers", cols, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;