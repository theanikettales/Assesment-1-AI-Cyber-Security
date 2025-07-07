pp.get("/", function (req, res) { 
    const n = req.query.n;
    const ans = sum(n);

    res.send("hii your ans is " + ans);
})   

app.listen(3000);