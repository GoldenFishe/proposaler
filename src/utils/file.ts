import { diskStorage } from 'multer';

const rootFolder = 'static';

export function getDiskStorage(folder: string) {
  return diskStorage({
    destination: (req, file, cb) => {
      cb(null, `./${rootFolder}/${folder}`);
    },
    filename: (req, file, cb) => {
      const [, ext] = file.originalname.split('.');
      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
      cb(null, `${file.fieldname}-${uniqueSuffix}.${ext}`);
    },
  });
}
