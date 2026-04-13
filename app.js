const express = require('express');
const app = express();

//const PORT = 3000;
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('This is staging environment!!');
    res.send('🚀 Hello DevOps Engineer Harsh!');
});

app.get('/health', (req, res) => {
    res.json({ status: 'UP' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
