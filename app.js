const express = require('express');

const fs = require('fs');

const app = express();

app.set('view engine','pug');

// test

var siteContents = {
    title:'This is a title',
    content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, corrupti unde nam, velit amet rerum at cupiditate ad ex labore quisquam est in. Cupiditate esse aliquid, velit rem obcaecati molestias.'
}

var testNb = [1,2,3,4,5,3];

var testText = 'test';

let rawdata = require('./student.json'); 
let nameS = rawdata.name;

app.get('/old',(request,response)=>{
    response.render('index-old',{siteContent,testNb,testText});
});

app.get('/other',(request,response)=>{
    response.render('other',{rawdata,nameS});
});

// test

// index

app.use('/content', express.static('public'));

let siteContent = require('./sitecontent.json'); 

// let sited = siteContent.pages.map(i => i.content.replace(/\n/g, '<br />'));

// siteContent.pages.map(x => x.content = sited)

// console.log(sited[1])

app.get('/',(request,response)=>{
    response.render('index',{siteContent});
});

app.get('/product',(request,response)=>{
    response.render('product',{siteContent,request});
});

app.get('/header',(request,response)=>{
    response.render('header',{siteContent,request});
});

app.listen(3000, ()=>{
    console.log('listening port 3000')
});