const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const bisApp = express()
const mysql = require('mysql')


// DATABASE CONNECTION 

const bisDbConnection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "ilovechelsea@97",
    database: "bisMyDatabase001"
})

bisApp.use(cors());
bisApp.use(express.json());
bisApp.use(bodyParser.urlencoded({extended:true}));


// SELECT PRODUCTS

bisApp.get("/api/getproduct", (req, res) => {
    const sqlSelectProduct = "SELECT * FROM bistableproducts001";
    bisDbConnection.query(sqlSelectProduct, (err, result) => {
        res.send(result)
    })
})

// INSERT PRODUCTS 

bisApp.post('/api/insertproduct', (req,res) => {

    const productName = req.body.productName
    const productQty = req.body.productQty
    const productBuy = req.body.productBuy
    const productSell = req.body.productSell

    const sqlInsertProduct = 
    "INSERT INTO bisTableProducts001 (productName, productQty, productBuy, productSell) VALUES(?, ?, ?, ?)";
    bisDbConnection.query(sqlInsertProduct, [ productName, productQty, productBuy, productSell ],
        (err, result) => {
            console.log('Product data inserted successfully');
        })
})



// SELECT USERS

bisApp.get("/api/getuser", (req, res) => {
    const sqlSelectUser = "SELECT * FROM bistableusers001";
    bisDbConnection.query(sqlSelectUser, (err, result) => {
        res.send(result)
    })
})

// INSERT USERS

bisApp.post('/api/insertuser', (req, res) => {
    const fullName = req.body.fullName
    const userEmail = req.body.userEmail
    const userPassword = req.body.userPassword
    const userRepeatPassword= req.body.userRepeatPassword

    const sqlInsertUser = 
        "INSERT INTO bistableusers001 (fullName, userEmail, userPassword) VALUES(?, ?, ?)";
    bisDbConnection.query(sqlInsertUser, [ fullName, userEmail, userPassword ], (err, result) => {
        console.log('User data inserted successfully');
    })

})


// SELECT EXPENSES

bisApp.get("/api/getexpense", (req, res) => {
    const sqlSelectExpense = "SELECT * FROM bistableexpenses001";
    bisDbConnection.query(sqlSelectExpense, (err, result) => {
        res.send(result)
    })
})

// INSERT EXPENSE


bisApp.post('/api/insertexpense', (req, res) => {
    const expenseDescription = req.body.expenseDescription
    const expenseAmount = req.body.expenseAmount
    const expenseDate = req.body.expenseDate

    const sqlInsertExpense = 
        "INSERT INTO bistableexpenses001 (expenseDescription, expenseAmount, expenseDate) VALUES(?, ?, ?)";
    bisDbConnection.query(sqlInsertExpense, [ expenseDescription, expenseAmount, expenseDate ], (err, result) => {
        console.log('Expense data inserted successfully');
    })

})


// SELECT VENDOR 

bisApp.get('/api/getvendor', (req, res) => {
    const sqlSelectVendor = "SELECT * FROM bistablevendor001";
    bisDbConnection.query(sqlSelectVendor, (err, result) => {
        res.send(result)
    })
})

// INSERT VENDOR


bisApp.post('/api/insertvendor', (req, res) => {
    const vendorName = req.body.vendorName
    const vendorEmail = req.body.vendorEmail
    const vendorPhone = req.body.vendorPhone
    const vendorCity = req.body.vendorCity

    const sqlInsertExpense = 
        "INSERT INTO bistablevendor001 (vendorName , vendorEmail, vendorPhone, vendorCity) VALUES(?, ?, ?, ?)";
    bisDbConnection.query(sqlInsertExpense, 
            [ vendorName, vendorEmail, vendorPhone, vendorCity ], (err, result) => {
        console.log('Vendor data inserted successfully');
    })

})

bisApp.listen(3002, () => {
    console.log("Server is in running mode")
})