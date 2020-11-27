import 'dotenv/config';
import express from 'express';
import path from 'path';

const app = express();
app.use(express.static(path.resolve(__dirname, '.')));
app.use(express.json());
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
