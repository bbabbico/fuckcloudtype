const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const express = require('express');
const app = express()
const ejs = require('ejs');
app.set('view engine', 'ejs'); //로그인을 위한 EJS 페이지 사용
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index');
  })

app.get('/1', (req, res) => 
(async function myFunction() {
	let driver = await new Builder().forBrowser('chrome').build();  //가상 브라우저 빌드
		try { 
            await driver.get(url);    //get(url) 인거 보면 뭔지 알것같이 생겼다
            let img = await driver.wait(until.elementLocated(By.css('.ContentHeaderView-module__tab___uYoNi')), 1000); //기다리기
            imgs = await img.getText(); //imgs에 바로 위 코드에서 가져온 element의 src속성값을 가져온다
            console.log(imgs)
		}
        finally {
			await driver.quit(); //가상 브라우저를 종료시킨다
        }
})()
);

const url = 'https://naver.com';


app.listen(3000, () => {
    console.log('My REST API running on port 3000!');
})
 
