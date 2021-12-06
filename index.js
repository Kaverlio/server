const express = require('express');
const cors = require("cors");
const userRouter = require('./routes/user.routes');
const reviewRouter = require('./routes/reviws.routes');

const PORT = process.env.PORT || 5000;
const app = express();


app.use(cors());
app.use(express.json());

app.use('/api', userRouter);
app.use('/api', reviewRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


