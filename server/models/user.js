const mongoose = require('mongoose');


module.exports = mongoose.model('Usertoy',    // ye jo Usertoy likha hai ye collection ka name hai jisme signup ka data jakr store hoga             
 { 
    email: String, 
    password: String
}
);