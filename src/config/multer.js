import Multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

export default {
  storage: Multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) return cb(err);

        return cb(null, buf.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
