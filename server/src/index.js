require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authController = require('./controllers/auth.controller');
const adminController = require('./controllers/admin.controller');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Auth Routes
app.post('/api/auth/google', authController.verifyGoogleToken);

// Admin Routes
app.get('/api/admin/stats', adminController.getDashboardStats);
app.get('/api/admin/teachers', adminController.getTeachersList);
app.get('/api/admin/cases', adminController.getCasesList);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
