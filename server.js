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



// SALES INFORMATION SENT TO THE DATABASE


bisApp.post('/api/insertcashsale', (req,res) => {

    const productID = req.body.productID
    const quantity = req.body.quantity
    const amount = req.body.amount
    const saledate = req.body.saledate
 

    const sqlInsertCashSale = 
    "INSERT INTO bistablesales001 (productID, quantity, amount, saledate ) VALUES(?, ?, ?, ?)";
    bisDbConnection.query(sqlInsertCashSale, [ productID, quantity, amount, saledate ],
        (err, result) => {
            console.log(err);
        })
   
})


// INSERT CREDIT SALE


bisApp.post('/api/insertcreditsale', (req,res) => {

    const productID = req.body.productID
    const quantity = req.body.quantity
    const amount = req.body.amount
    const saledate = req.body.saledate
    const customername = req.body.customername
    const customerphone = req.body.customerphone
 

    const sqlInsertCreditSale = 
    "INSERT INTO bistablesales001 (productID, quantity, amount, saledate, customername, customerphone ) VALUES(?, ?, ?, ?, ?, ?)";
    bisDbConnection.query(sqlInsertCreditSale, [ productID, quantity, amount, saledate, customername, customerphone ],
        (err, result) => {
            console.log(err);
        })
   
})

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


// UPDATE PRODUCT


bisApp.put('/api/updateproduct', (req, res) => {
    const id = req.body.id
    const productName = req.body.productName
    const productQty = req.body.productQty
    const productBuy = req.body.productBuy
    const productSell = req.body.productSell

    const sqlUpdateProduct = 
    "UPDATE bistableproducts001 SET productName= ?, productQty= ?, productBuy= ?, productSell= ? WHERE id= ?";
    bisDbConnection.query(sqlUpdateProduct, 
        [ productName, productQty, productBuy, productSell , id ], (err, result) => {
    console.log(err);
    })
})

// DELETE PRODUCT

bisApp.delete('/api/productdelete/:id', (req, res) => {
    const productid = req.params.id
    const sqlDeleteProduct = "DELETE FROM bistableproducts001 WHERE id = ?"
    bisDbConnection.query(sqlDeleteProduct, productid, (err, result) => {
        console.log(err);
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


// DELETING USER


bisApp.delete('/api/userdelete/:id', (req, res) => {
    const userid = req.params.id
    const sqlDeleteUser = "DELETE FROM bistableusers001 WHERE id = ?"
    bisDbConnection.query(sqlDeleteUser, userid, (err, result) => {
        console.log(err);
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


// UDPATE EXPENSE

bisApp.put('/api/updateexpense', (req, res) => {
    const id = req.body.id
    const expenseDescription = req.body.expenseDescription
    const expenseAmount = req.body.expenseAmount
    const expenseDate = req.body.expenseDate

    const sqlUpdateExpense = 
    "UPDATE bistableexpenses001 SET expenseDescription= ?, expenseAmount= ?, expenseDate= ? WHERE id= ?";
    bisDbConnection.query(sqlUpdateExpense, 
        [ expenseDescription, expenseAmount, expenseDate, id ], (err, result) => {
    console.log(err);
    })
})


// DELETING EXPENSE 

bisApp.delete('/api/expensedelete/:id', (req, res) => {
    const expenseid = req.params.id
    const sqlDeleteExpense = "DELETE FROM bistableexpenses001 WHERE id = ?"
    bisDbConnection.query(sqlDeleteExpense, expenseid, (err, result) => {
        console.log(err);
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

// UPDATE VENDOR INFO

bisApp.put('/api/updatevendor', (req, res) => {
    const id = req.body.id
    const vendorName = req.body.vendorName
    const vendorEmail = req.body.vendorEmail
    const vendorPhone = req.body.vendorPhone
    const vendorCity = req.body.vendorCity

    const sqlUpdateVendor = 
    "UPDATE bistablevendor001 SET vendorName= ?, vendorEmail= ?, vendorPhone= ?, vendorCity= ? WHERE id= ?";
    bisDbConnection.query(sqlUpdateVendor, 
        [ vendorName, vendorEmail, vendorPhone, vendorCity, id ], (err, result) => {
    console.log(err);
    })
})

// DELETING VENDOR 

bisApp.delete('/api/vendordelete/:id', (req, res) => {
    const id = req.params.id
    const sqlDeleteVendor = "DELETE FROM bistablevendor001 WHERE id = ?"
    bisDbConnection.query(sqlDeleteVendor, id, (err, result) => {
        console.log(err);
    })
})


// GET CASH SALE 


bisApp.get('/api/getcashsale', (req, res) => {
    const sqlSelectCashSale = "SELECT bistableproducts001.productName, bistablesales001.id, bistablesales001.quantity, bistablesales001.amount, bistablesales001.saledate FROM bistableproducts001 INNER JOIN bistablesales001 ON bistableproducts001.id = bistablesales001.productID";
    bisDbConnection.query(sqlSelectCashSale, (err, result) => {
        res.send(result)
    })
})


// GET CREDIT SALE

bisApp.get('/api/getcreditsale', (req, res) => {
    const sqlSelectCreditSale = "SELECT bistableproducts001.productName, bistablesales001.id, bistablesales001.quantity, bistablesales001.amount, bistablesales001.saledate, bistablesales001.customername, bistablesales001.customerphone FROM bistableproducts001 INNER JOIN bistablesales001 ON bistableproducts001.id = bistablesales001.productID WHERE bistablesales001.customerphone IS NOT NULL";
    bisDbConnection.query(sqlSelectCreditSale, (err, result) => {
        res.send(result)
    })
})

// GET RECEIVABLES 

bisApp.get('/api/getcreditsalereceivable', (req, res) => {
    const sqlSelectCreditSale = "SELECT bistableproducts001.productName, bistablesales001.id, bistablesales001.quantity, bistablesales001.amount, bistablesales001.productID, bistablesales001.saledate, bistablesales001.customername, bistablesales001.customerphone FROM bistableproducts001 INNER JOIN bistablesales001 ON bistableproducts001.id = bistablesales001.productID WHERE bistablesales001.customerphone IS NOT NULL GROUP BY customername";
    bisDbConnection.query(sqlSelectCreditSale, (err, result) => {
        res.send(result)
    })
})

bisApp.listen(3002, () => {
    console.log("Server is in running mode")
})