const express = require('express')
const path = require('path')
const {v4} = require('uuid')
const app = express()

let USERS = [
    {id: v4(), avatar:'https://img2.akspic.ru/previews/3/9/1/8/6/168193/168193-paren_v_shleme-motocikletnyj_shlem-motocikl-shlem-odezhda-500x.jpg', name: 'Gosha', email: 'user@mail.net', city: 'Казань', phone: '+7(917)-353-33-55', site: 'https://site.com'},
    {id: v4(), avatar:'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg', name: 'Sasha', email: 'user@mail.net', city: 'Рязань', phone: '+7(947)-855-36-11', site: 'https://site.com'},
    {id: v4(), avatar:'https://i.pinimg.com/736x/14/df/bf/14dfbf0e75988b5daa3aaccddba0eb6d.jpg', name: 'Zakari', email: 'user@mail.net', city: 'Рязань', phone: '+7(947)-954-23-62', site: 'https://site.com'},
    {id: v4(), avatar:'https://i.yapx.ru/Ra8I0.jpg', name: 'Johan', email: 'user@mail.net', city: 'Рязань', phone: '+7(947)-652-03-21', site: 'https://site.com'},
    {id: v4(), avatar:'https://android-obzor.com/wp-content/uploads/2022/02/1-2-300x300.jpg', name: 'Alexander', email: 'user@mail.net', city: 'Белгород', phone: '+7(947)-550-70-39', site: 'https://site.com'},
    {id: v4(), avatar:'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/8d2c78cdc7ee3cffd5e3b3bc22a87c10.jpeg?x-expires=1658012400&x-signature=SEooVfaPyVQMG3DDNP7QXOeGSGg%3D', name: 'Sultan', email: 'user@mail.net', city: 'Москва', phone: '+7(947)-257-63-72', site: 'https://site.com'},
    {id: v4(), avatar:'https://i.pinimg.com/736x/86/95/54/8695540db1e9224367ed9d1a4884ccfc.jpg', name: 'Gregory', email: 'user@mail.net', city: 'Москва', phone: '+7(947)-153-83-11', site: 'https://site.com'},
    {id: v4(), avatar:'https://www.meme-arsenal.com/memes/6bd0fe45e3ddadd122fd2aa9b626e56b.jpg', name: 'Anna', email: 'user@mail.net', city: 'Казань', phone: '+7(947)-651-31-13', site: 'https://site.com'},
]

app.use(express.json())

app.get('/api/users', (req,res) =>{
    res.status(200).json(USERS)
})

app.post('/api/users', (req,res) =>{
    const user = {id: v4(), ...req.body};
    USERS .push(user);
    res.status(201).json(user)
})

app.delete('/api/users/:id', (req,res) =>{
    USERS  = USERS.filter(u => u.id !== req.params.id);
    res.status(200).json({message: 'Пользователь был удален'})
})

app.get('/api/users/:id', (req,res) =>{
    let user = USERS.filter(u => u.id === req.params.id)
    res.status(200).json(user)
})

app.use(express.static(path.resolve(__dirname, 'front-end/dist')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'front-end/dist', 'index.hlml'))
})

app.listen(3000, () => console.log('Server has been started on port 3000...'))