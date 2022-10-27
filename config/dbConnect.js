const mongoose = require('mongoose');

function dbConnection() {
     console.log("process.env.MONGO_URI,", process.env.MONGO_URI,)
     mongoose.connect(process.env.MONGO_URI, (err, res) => {
          try {
               console.log("DB connect successfuly", res)
          } catch (e) {
               console.log("DB connect failed", err)
          }
     })
}

module.exports = dbConnection;
