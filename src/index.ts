import express from 'express'

import messageController from './controllers/message'

const port = 8000;

const app: express.Express = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Controllers
app.use("/messages", messageController)

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("こんにちは");
});



// execute
app.listen(port, () => {
    console.log(`ポート${port}番で起動しました。`)
});