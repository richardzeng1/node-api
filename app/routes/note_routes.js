modules.exports = function(app, db){
    // Read
    app.get('/notes/:id', (req, res)=>{
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        db.collection('notes').findOne(details, (err, item)=>{
            if (err){
                res.send({'error':'An error has occured'});
            }else{
                res.send(item)
            }
        });
    });

    // Create
    app.post('/notes', (req, res)=>{
        const note = {text: req.body.body, title: req.body.title};
        db.collection('notes').insert(note, (err, result)=>{
            if (err){
                res.send({'error': 'An error has occured'});
            }else{
                res.send(result.ops[0]);
            }
        });
    });

    // Delete
    app.delete('./notes/:id', (req, res)=>{
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        db.collection('notes').remove(details,(err,item)=>{
            if (err){
                res.send({'error':'An error has occured'});
            }else{
                res.send('Note ' + id + ' has been deleted');
            }
        });
    });

    // Update
    app.put('./note/:id', (req, res)=>{
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        const note = {text:req.body.body, title:req.body.title};
        db.collection('notes').update(details, note, (err, result)=>{
            if (err){
                res.send({'error':'An error has occured'});
            }else{
                res.send(note);
            }
        });
    });
};
