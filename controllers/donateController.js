import { Donar } from "../models/donar.js"; 

export const postDonate = async (req, res) => {
  try {
    const { name, email, phone, amount, message } = req.body;

    if (!name || !email || !phone || !amount) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const newDonation = new Donar({ name, email, mobileNumber: phone, amount, message });
    await newDonation.save();

    res.status(201).json({ message: 'Donation recorded successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while processing the donation.' });
  }
};



