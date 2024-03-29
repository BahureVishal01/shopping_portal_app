const mongoose = require('mongoose')


const validateIdFormat = (req, res, next) => {
    const { id } = req.params;
    // Check if the ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({success: false, error: 'Invalid ID format' });
    }
    // If the ID is valid, move to the next middleware
    next();
};

module.exports = {validateIdFormat}