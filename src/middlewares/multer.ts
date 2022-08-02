import multer from "multer";
import path from "path";
import crypto from "crypto";

const config = {
  dest: path.resolve(__dirname, "..", "..", "tmp", "uploads"),
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, "..", "..", "tmp", "uploads"))
    },
    filename(req, file, callback) {
      crypto.randomBytes(16, (err, hash) => {
        if(err) callback(err, null);

        const filename = `${hash.toString('hex')}-${file.originalname}`

        callback(null, filename)
      })
    },
  }),
  limits: {
    fileSize: 2 * 1024 * 1024
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      "image/jpeg",
      "image/pjpeg",
      "image/png",
      "image/gif"
    ]

    if ( allowedMimes.includes(file.mimetype) ) {
      cb(null, true)
    } else {
      cb(new Error("Invalid File Type."))
    }
  }
}

export { config }