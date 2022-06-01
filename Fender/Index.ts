import express from 'express';
import ejs from 'ejs';




interface guitar {
    name: string,
    yearmade:number,
    wood: string[],
    NickelOrPb: boolean
}


const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("port",3000);
app.get("/", (req,res) => {
    res.render("index");
});
app.listen(app.get("port"), () => {
    console.log(`Local url: http://localhost:${app.get("port")}`);

});

export{}