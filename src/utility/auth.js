import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();




// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/THE_TILE_PROS', {
 
})
  .then(() => {
    console.log("MongoDB connection successful");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Define a schema for the form data
const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: String,
  location: String,
  message: String,
});
// Create a model based on the schema
const Form = mongoose.model('Form', formSchema);

// Define the routes
router.get('/', async (req, res) => {
  try {
    // Extract data from request body
    const { name, email, phoneNumber, location, message } = req.body;

    // Create a new form document
    const newForm = new Form({
      name,
      email,
      phoneNumber,
      location,
      message,
    });

    // Save the form document to the database
    await newForm.save();

    // Respond with success message
    res.status(201).send({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error saving form:', error);
    res.status(500).send({ error: 'Failed to submit form' });
  }
});

router.route('/contact').get((req, res) => {
  res.status(201).send('This route is working');
});

// Export the router
export default router;
