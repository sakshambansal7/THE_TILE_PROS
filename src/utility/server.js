import express from 'express';
import router from '../utility/auth';
// import cors from 'cors';

const app = express();
const port = 5000;


// Middleware
app.use('/api/auth', router);
// app.use(express.json());
// app.use(cors());

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
