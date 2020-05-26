const router = require('express').Router();
let Exercise = require('../models/exercises.model.js');
const multer= require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './upload/');
  },
  filename: function(req, file, cb) {
    cb(null,  file.originalname);
  }
});
const upload= multer({storage:storage});

router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});
/*
router.post('/image', upload.single('file'), (req, res, next) => {
  const file = req.file
 console.log("defile",file);
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
    res.send("sayhudgashjdsgajsaj",file)
  
})
/*
router.post('/add', upload.single('file'), (req, res, next) => {
  console.log("JESUUUUUUUUUUUUUUUUUUUUUU",req.body.username);

  console.log("csancbsajcsahjsabjcajas NI FYBCYUIBAUI",req.file)
  
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);
  const image = req.file.path;

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
    image
  });

  newExercise.save()
  .then(() => res.json('Exercise added'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;