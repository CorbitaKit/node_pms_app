import app from './server';
import { PORT } from './config/config';
console.log(PORT)
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});