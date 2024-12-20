import { getContents, uploadContent } from "../controllers/content.js";
import express from 'express';
import multer from "multer";


const router = express.Router();

//multer usage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads")
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now()
      cb(null, uniqueSuffix + '-' + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

router.post("/upload", upload.single('file'), uploadContent)
router.get("/all-posts", getContents)

export const contentRouter = router;

