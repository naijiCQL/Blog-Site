const express = require('express')


const app = express()
//注册ejs视图引擎
app.set('view engine', 'ejs')

app.use(express.static('public'));

app.get('/', function (req, res) {
    const blogs = [
        { title: 'Yoshi finds eggs', snippet: 'Yoshi was wandering through the forest when he stumbled upon a nest full of colorful eggs.' },
        { title: 'Mario finds stars', snippet: 'Mario embarked on a thrilling adventure across Mushroom Kingdom, collecting shining stars along the way.' },
        { title: 'How to defeat Bowser', snippet: 'Defeating Bowser requires courage, strategy, and a touch of luck. Learn the secrets to vanquishing the mighty Koopa King.' },
        { title: 'Luigi\'s Mansion: Ghostly Encounters', snippet: 'Join Luigi as he explores a haunted mansion, armed with only a trusty vacuum cleaner and his wits.' },
        { title: 'Princess Peach\'s Royal Tea Party', snippet: 'Step into the lavish world of Princess Peach as she hosts a grand royal tea party for all her friends from the Mushroom Kingdom.' },
        { title: 'Toad\'s Treasure Hunt', snippet: 'Embark on an exciting treasure hunt with Toad as he searches for hidden riches scattered across the land.' }
    ];

    res.render('index', { title: 'Home', blogs })
})

app.get('/about', function (req, res) {
    res.render('about', { title: 'About' })
})
//重定向
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' })
})
//404 page
// app.get('*', (req, res) => {
//     res.status(404).render('404')
// })
//或者
app.use((req, res) => {
    res.status(404).render('404', { title: '404' })
})

app.listen(8080, () => {
    console.log('Server running at http://localhost:8080/')
})