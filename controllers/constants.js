const constants = require('../utils/constants');

/// list of constant uitls for frontend perpose


async function constantsList(req, res){

    return  res.status(200).json({
        success: true,
        data: constants
      })
}

module.exports= {constantsList}