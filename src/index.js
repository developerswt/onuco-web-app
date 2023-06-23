const http = require('http');
const express = require("express");
const multer = require("multer");
const multerS3 = require("multer-s3")
const AWS = require('aws-sdk')
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json());

const s3 = new AWS.S3({
    accessKeyId: 'AKIAWTYHL72QB7Z2NM4X',
    secretAccessKey: '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'
});

const uploadS3 = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'onuco-s3',
        metadata: (req, file, callBack) => {
            callBack(null, {fieldName: file.fieldname})
        },
        key: (req, file, callBack) => {
            callBack(null, file.originalname)
        }
    })
});

app.post("/api/upload",  uploadS3.array('file', 10), async (req, res) => {
    return res.status(200).send('OK')
})

const server = http.createServer(app);

server.listen(process.env.PORT || 4000, () => {
  console.log(`Server running on port ${4000}`);
});