//>npm install multer
const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'upload/') //업로드라는 폴더에 wrtite하겠다
    },
    filename(req, file, done) {
      const filename = Buffer.from(file.originalname, "latin1").toString("utf8");
      const ext = path.extname(filename)
      done(null, path.basename(filename, ext) + Date.now() + ext) 
    }
  }),
  limits: { fileSize: 5 * 1024 * 1024 }//받을 수 있는 최대 사이즈 한정, oevr되면 거부함
})

router.post('/', (req, res, next) => {
  const a1 = upload.array('file');

  a1(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      console.log(err)
      res.json({ status: 500, message: 'error' })
    } else if (err) {
      console.log(err)
      res.json({ status: 500, message: 'error' })
    } else {
      console.log('upload router....')
      const data = req.body
      console.log('title', data.title)
      for(const file of req.files ){
        console.log('file upload', file.filename)
      }
      
      res.json({ status: 200, message: 'upload OK' })
    }
  })

})


module.exports = router