const User = require('../models/User');

exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    try{

        const newUser = await User.create({name, email, password});

        res.status(200).json({newUser});

    }
    catch(err){

        res.status(400).json({error: err.message});

    }

}

exports.login = async (req, res) => {

    const { email, password } = req.body;

    try{

        const user = await User.findOne({ where: { email } });

        if( !user || password != user.password ){
            return  res.status(400).json({ error: 'Invalid Credentials !' });
        }

        res.status(200).json(user);

    }
    catch(err)
    {
        res.status(500).json({error: err.message});
    }

}