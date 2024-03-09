const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser')

const JWT_SECRET = "this is secret";

//Route 1: create user using: POST "/api/auth/createuser". Doesn't require auth
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 5 }),
    body('email', 'Enter a valid E-mail').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 6 }),
], async (req, res) => { //req-require res-response
    /*console.log(req.body);
    const user = User(req.body);
    user.save();*/
    let success=true;
    const result = validationResult(req);
    if (!result.isEmpty()) {
        success=false;
        return res.status(400).json({success, result: result.array() });
        // res.send({ errors: result.array() });
    }

    //check whether user exists with this email
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            success=false;
            return res.status(400).json({success, errors: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10); //it returns promise so need to use await so that salt waits till it gets value from bcrypt.genSalt and then go down
        const secPass = await bcrypt.hash(req.body.password, salt);

        user = await User.create(
            {
                name: req.body.name,
                password: secPass,
                email: req.body.email
            }
        )
        // .then(user=>res.json(user)).catch(err=>{
        //     console.log(err); 
        //     res.json({
        //         error: 'E-mail already exists',
        //         message: err.message
        //     })});
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);

        // res.json(user);
        res.json({success, authToken });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occurred");
    }
})

// Route 2 : Authenticate a user using: POST "/api/auth/login". NO login required

router.post('/login', [
    body('email', 'Enter a valid E-mail').isEmail(),
    body('password', 'password can not be blank').exists(),
], async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ result: result.array() });
    }
    let success=true;
    //check whether user exists with this email
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email: req.body.email });
        if (!user) {
            success=false;
            return res.status(400).json({success, error: "Please try again with correct credentials" });
        }
        
        const passwordCompare = await bcrypt.compare(password, user.password);
        
        if (!passwordCompare) {
            success=false;
            return res.status(400).json({success, error: "Please try again with correct credentials" });
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);

        // res.json(user);
        res.json({success, authToken });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occurred");
    }
})

// ROUTE 3: Get loggedin User Details using: POST "/api/auth/getuser". Login required
router.post('/getuser', fetchuser,  async (req, res) => {

    try {
      let userId = req.user.id;
      const user = await User.findById(userId).select("-password")
      res.send(user)
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  })

module.exports = router;