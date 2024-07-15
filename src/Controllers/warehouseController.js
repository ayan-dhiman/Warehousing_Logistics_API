const warehouse = require("../models/Warehouse");

exports.addWarehouse = async (req, res) => {

    const { location, capacity } = req.body;

    try{

        const newWarehouse = await warehouse.create({location,capacity});

        res.status(200).json(newWarehouse);

    }catch(err)
    {
        res.status(400).json({error: `Error while adding new Warehouse !`})
    }

};

