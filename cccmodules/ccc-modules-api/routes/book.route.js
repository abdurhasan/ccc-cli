var express = require('express');
var Book = require('../models/book.model');
var router = express.Router();
const Response = require('../helper/response')

router.get('/', async (req, res) => {
    let limit = req.query.limit ? parseInt(req.query.limit) : 5;
    let skip = req.query.skip ? parseInt(req.query.skip) : 0;
    try {
        const Moduletotal = await Book.count({});
        const Moduledoc = await Book.find({}).limit(limit).skip(skip)
        return res.status(200).json(Response(true, 'Data modules', { Moduletotal, Moduledoc }));
    } catch (error) {
        return res.status(422).json(Response(false, 'Something error happens', { error }));
    }

});
router.get('/all', async (req, res) => {
    try {
        const Moduledoc = await Book.find({})
        return res.status(200).json(Response(true, 'Data modules', { Moduledoc }));
    } catch (error) {
        return res.status(422).json(Response(false, 'Something error happens', { error }));
    }

});


router.post('/', async (req, res) => {
    try {
        const moduledoc = new Book(req.body);
        await moduledoc.save();

        return res.status(200).json(Response(true, 'Data berhasil disimpan', { moduledoc }));

    } catch (error) {
        return res.status(422).json(Response(false, 'Data gagal disimpan', { error }));
    }
});

router.put('/:id', async (req, res) => {
    try {        
        const moduledoc = await Book.findByIdAndUpdate(req.params.id,req.body)

        return res.status(200).json(Response(true, 'Data berhasil diupdate', { moduledoc }));

    } catch (error) {
        return res.status(422).json(Response(false, 'Data gagal diupdate', { error }));
    }
});

router.delete('/:id', function (req, res) {
    Book.findByIdAndRemove({
        _id: req.params.id
    }, function (err, book) {
        if (err) {
            console.log(err)
            res.send('error deleting book');
        } else {
            console.log(book);
            res.send(book);
        }
    });
});


router.get('/:id', function (req, res) {

    Book.findOne({
        _id: req.params.id
    }).exec(function (err, book) {
        if (err) {
            res.send('error has occured');
        } else {
            res.json(book);
        }
    });
});




module.exports = router;