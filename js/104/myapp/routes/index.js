var express = require('express');
var router = express.Router();
var pool=require("../pool.js");
let contactId=0;

let contacts = [
  { first: "azriel", last: "jurkansky", email: "azju323@Gmail.com", phone: 8482101070, id: ++contactId },
  { first: "yy", last: "jurkansky", email: "yy323@Gmail.com", phone: 7325037041, id: ++contactId }
];

/* GET home page. */
router.get('/', async function (req, res, next) {
  try {
    const [results, fields] = await pool.execute(
      'SELECT * FROM `contacts` '
    );
    res.render('layout', {
      title: 'a2ztrading', partials: {
        content: "index"
  
      },
      contacts:results,
      noContacts: !results?.length
    });
  
    //console.log(results); // results contains rows returned by server
    
  } catch (err) {
    console.log(err);
  }
  
});

router.get('/addContact', (req, res, next) => {
  res.render('layout', {
    title: 'add contact', partials: {
      content: "addContact"

    },
    contacts,
    noContacts: !contacts?.length
  });

})
router.post('/addContact', async (req, res, next) => {
  //contacts.push({...req.body,id:++contactId})
  try {
    //adding contacts to database
    const [results] = await pool.execute(
      'INSERT INTO contacts(first,last,email,phone)VALUES(?,?,?,?) ',[req.body.first,req.body.last,req.body.email,req.body.phone]
    );
  res.writeHead(301, { location: "/" })
  res.end();


}
catch (err) {
  console.log(err);
}})

router.get('/editContact/:id', async (req, res, next) => {
  //put where here
  try {
    //deleting contacts to database
    const [results] = await pool.execute(
      'SELECT  * FROM contacts WHERE id = ?',[req.params.id]);
      console.log(results);


      res.render('layout', {
        title: 'edit contact', partials: {
          content: "editContact"
    
        },
       selectedContact:results
    
    
      })


}
catch (err) {
  console.log(err);
}
  let selectedContact = contacts.filter(c => c.id == Number(req.params.id));
  
  
 
})
router.post('/editContact/:id', async (req, res, next) => {
  // let selectedContact = contacts.find(c => c.id == Number(req.params.id));
  // contacts.splice(contacts.indexOf(selectedContact),1);
  // contacts.push({...req.body,id:selectedContact.id})
  //execute..update where id=params.id then a set first=? last=?,[req.body.first...]
  // 'UPDATE contacts SET first = ?, last = ?, email = ?, phone = ? WHERE id = ?', [req.body.first, req.body.last, req.body.email, req.body.phone, req.params.id]
  try {
    //deleting contacts to database
    const [results] = await pool.execute(
      'UPDATE contacts SET first=?,last=?,email=?,phone=? WHERE id = ?',[req.body.first,req.body.last,req.body.email,req.body.phone,req.params.id]);

  res.writeHead(301, { location: "/" })
  res.end();


}
catch (err) {
  console.log(err);
}
  
  

  


})
router.get('/:id',async (req,res,next)=>{
   //put where here
   try {
    
    const [results] = await pool.execute(
      'SELECT  * FROM contacts WHERE id = ?',[req.params.id]);
      console.log(results);


      res.send(results);


}
catch (err) {
  console.log(err);
}
  // let selectedContact = contacts.find(c => c.id == Number(req.params.id));
  // if(!selectedContact){
  //   return res.sendStatus(404);
  // }

  // res.send(selectedContact)

})
router.get('/deleteContact/:id',async (req,res,next)=>{

  
  //contacts = contacts.filter(c => c.id !== Number(req.params.id));
  //delete contact
  //redirect to homepage
  try {
    //deleting contacts to database
    const [results] = await pool.execute(
      'DELETE FROM contacts WHERE id = ?',[req.params.id]);

  res.writeHead(301, { location: "/" })
  res.end();


}
catch (err) {
  console.log(err);
}
})
 





module.exports = router;
