const Product = require('../models/Product');

exports.addProduct = async (req, res) => {

    const { name, description, price, quantity, wid } = req.body;

    try {

        const new_Product = await Product.create({name, description, price, quantity, wid});

        res.status(200).json(newProduct);

    } catch (err) {

        res.status(400).json({ error: err.message });

    }

}

exports.getAllProducts = async (req, res) => {

    try {

        const products = await Product.findAll();

        res.status(200).json(products);

    } catch (err) {
        res.status(400).json({ error: err.message });
    }

}

exports.getProduct = async (req, res) => {

    const pid = req.params.pid;

    try {

        const product = await Product.findOne({ where: { pid } });

        if (!product)
            return res.status(400).json({ error: `No product found having product id as ${pid}` });

        res.status(200).json(product);

    } catch (err) {
        res.status(400).json({ error: err.message });
    }

}

exports.updateProduct = async (req, res) => {

    const pid = req.params.pid;

    const updatedDetails = req.body;

    try {

        const result = await Product.update(updatedDetails,{where: {pid}});

        if (result[0] === 0) {
            return res.status(400).json({message: `No product found with product id ${pid}` });
        } else {
            return res.status(200).json({message: `Product with id ${pid} updated successfully` });
        }

    } catch (err) {
        res.status(400).json({ error: err.message });
    }

}

exports.deleteProduct = async (req, res) => {

    const pid = req.params.pid;

    try {

        const result = await Product.destroy({ where: { pid } });

        if (result === 0)
            return res.status(400).json({ error: `No product found with product id ${pid}` });
        else
            return res.status(200).json({ message: `Product with id ${pid} deleted successfully` });

    } catch (err) {
        res.status(400).json({ error: err.message });
    }

}

exports.getStock = async (req, res) => {

    const pid = req.params.pid;

    try {

        const product = await Product.findOne({ where: { pid } });

        if (!product)
            return res.status(400).json({ error: `No product found having product id as ${pid}` });

        res.status(200).json({ 'Available Quantity': product.quantity });

    } catch (err) {
        res.status(400).json({ error: err.message });
    }

}