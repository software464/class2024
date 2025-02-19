var express = require('express');
var router = express.Router();
let contactId=0;
let contacts = [
  { first: "azriel", last: "jurkansky", email: "azju323@Gmail.com", phone: 8482101070, id: ++contactId },
  { first: "yy", last: "jurkansky", email: "yy323@Gmail.com", phone: 7325037041, id: ++contactId }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('layout', {
    title: 'a2ztrading', partials: {
      content: "index"

    },
    contacts,
    noContacts: !contacts?.length
  });
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
router.post('/addContact', (req, res, next) => {
  contacts.push({...req.body,id:++contactId})
  res.writeHead(301, { location: "/" })
  res.end();


})
router.get('/editContact/:id', (req, res, next) => {
  let selectedContact = contacts.filter(c => c.id == Number(req.params.id));
  
  
  res.render('layout', {
    title: 'edit contact', partials: {
      content: "editContact"

    },
    selectedContact


  })
})
router.post('/editContact/:id', (req, res, next) => {
  let selectedContact = contacts.find(c => c.id == Number(req.params.id));
  contacts.splice(contacts.indexOf(selectedContact),1);
  contacts.push({...req.body,id:selectedContact.id})
  res.writeHead(301, { location: "/" })
  res.end();
  
  

  


})
router.get('/:id',(req,res,next)=>{
  let selectedContact = contacts.find(c => c.id == Number(req.params.id));
  if(!selectedContact){
    return res.sendStatus(404);
  }

  res.send(selectedContact)

})



module.exports = router;
