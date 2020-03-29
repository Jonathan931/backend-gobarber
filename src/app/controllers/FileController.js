import User from '../models/User';
import File from '../models/File';

class FileController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;
    const file = await File.create({
      name,
      path,
    });
    const user = await User.findByPk(req.userId);
    await user.update({ ...user, avatar_id: file.id });
    return res.json(file);
  }
}

export default new FileController();
