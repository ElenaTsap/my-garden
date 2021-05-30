const plants = require('../model/plants');

exports.getAll = (req, res) => {
    plants.find({}, (err, plants) => {
        if (err) {
            res.json(err);
        } else {
            res.json(plants);
            console.log('now we fetched');
        }
    })
}

exports.postPlant =  (req, res) => {
    console.log('controller','---req.body', req.body.plantName, '---req.file', req.file);

    const newPlant = new plants ({
        plantName: req.body.plantName,
        photo: '/images/'+ req.file.filename
    });

    newPlant.save((err, plants) => {
        console.log(err, plants);
        if (err) {
            res.json(err)
        } else {
            console.log('from save!');
            res.json(plants)
        }
    })
}