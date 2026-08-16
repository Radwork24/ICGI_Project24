import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Patient from '../models/Patient.js';
import { patientsData } from '../src/data/patientsData.js';

dotenv.config();

async function seedDatabase() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.error('❌ MONGODB_URI is missing from your .env file');
    console.error('Add this line to .env (replace YOUR_PASSWORD):');
    console.error(
      'MONGODB_URI=mongodb+srv://rank1ltdpvt:YOUR_PASSWORD@thisorthat.cxuijje.mongodb.net/icgi_database?retryWrites=true&w=majority&appName=ThisorThat'
    );
    process.exit(1);
  }

  try {
    await mongoose.connect(uri);
    console.log('✅ Connected to MongoDB for seeding');

    await Patient.deleteMany({});
    console.log('🗑️  Cleared existing patient data');

    let successCount = 0;

    for (const patientData of patientsData) {
      const patient = new Patient(patientData);
      await patient.save();
      successCount += 1;
      console.log(
        `✅ [${successCount}/${patientsData.length}] Added: ${patientData.patient_profile.personal_basic.td_name}`
      );
    }

    const totalPatients = await Patient.countDocuments();
    console.log(`\n🎉 Successfully seeded ${successCount} patients`);
    console.log(`📊 Total patients in database: ${totalPatients}`);
  } catch (error) {
    console.error('❌ Error seeding database:', error.message);
    if (error.name === 'ValidationError') {
      console.error('Validation details:', error.errors);
    }
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log('🔌 Database connection closed');
    process.exit(0);
  }
}

seedDatabase();
