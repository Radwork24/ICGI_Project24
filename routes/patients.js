import express from 'express';
import Patient from '../models/Patient.js';

const router = express.Router();

// GET all patients (with simplified data for frontend)
router.get('/', async (req, res) => {
  try {
    const patients = await Patient.find({});
    
    // Transform data to match frontend format
    const formattedPatients = patients.map(patient => ({
      id: patient._id,
      name: patient.patient_profile.personal_basic.td_name !== "optional" 
        ? patient.patient_profile.personal_basic.td_name 
        : `Patient ${patient._id}`,
      age: patient.patient_profile.personal_basic.age,
      cancer: patient.patient_profile.clinical_data.cancer_type,
      tag: patient.patient_profile.clinical_data.grade,
      stage: patient.patient_profile.clinical_data.stage,
      score: Math.round(patient.patient_profile.genomic_data.genomic_data_quality_score)
    }));

    res.json({
      success: true,
      data: formattedPatients,
      count: formattedPatients.length
    });
  } catch (error) {
    console.error('Error fetching patients:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch patients',
      message: error.message
    });
  }
});

// GET single patient by ID (full data)
router.get('/:id', async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    
    if (!patient) {
      return res.status(404).json({
        success: false,
        error: 'Patient not found'
      });
    }

    res.json({
      success: true,
      data: patient
    });
  } catch (error) {
    console.error('Error fetching patient:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch patient',
      message: error.message
    });
  }
});

// POST create new patient
router.post('/', async (req, res) => {
  try {
    const patientData = req.body;
    
    // Validate required fields
    if (!patientData.patient_profile) {
      return res.status(400).json({
        success: false,
        error: 'Patient profile data is required'
      });
    }

    const patient = new Patient(patientData);
    const savedPatient = await patient.save();

    res.status(201).json({
      success: true,
      data: savedPatient,
      message: 'Patient created successfully'
    });
  } catch (error) {
    console.error('Error creating patient:', error);
    
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        error: 'Validation error',
        details: error.message
      });
    }

    res.status(500).json({
      success: false,
      error: 'Failed to create patient',
      message: error.message
    });
  }
});

// PUT update patient
router.put('/:id', async (req, res) => {
  try {
    const patientData = req.body;
    const patient = await Patient.findByIdAndUpdate(
      req.params.id,
      patientData,
      { new: true, runValidators: true }
    );

    if (!patient) {
      return res.status(404).json({
        success: false,
        error: 'Patient not found'
      });
    }

    res.json({
      success: true,
      data: patient,
      message: 'Patient updated successfully'
    });
  } catch (error) {
    console.error('Error updating patient:', error);
    
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        error: 'Validation error',
        details: error.message
      });
    }

    res.status(500).json({
      success: false,
      error: 'Failed to update patient',
      message: error.message
    });
  }
});

// DELETE patient
router.delete('/:id', async (req, res) => {
  try {
    const patient = await Patient.findByIdAndDelete(req.params.id);

    if (!patient) {
      return res.status(404).json({
        success: false,
        error: 'Patient not found'
      });
    }

    res.json({
      success: true,
      message: 'Patient deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting patient:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to delete patient',
      message: error.message
    });
  }
});

export default router;
