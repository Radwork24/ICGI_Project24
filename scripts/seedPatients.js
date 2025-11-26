import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Patient from '../models/Patient.js';

// Load environment variables
dotenv.config();

const samplePatientData = {
  "patient_profile": {
    "personal_basic": {
      "td_name": "Rajesh Kumar",
      "age": 52,
      "sex": "male",
      "geographic_location": "Mumbai, Maharashtra",
      "family_history_of_cancer": "Father - lung cancer at 68",
      "addictive_use": "Gutka user (15 years), tobacco smoker (20 years), occasional alcohol",
      "job_profile": "Textile factory worker",
      "food_lifestyle": "Non-vegetarian, high spice consumption, irregular meals",
      "mediolain": "optional",
      "emotional_factors": "Financial stress, family responsibilities",
      "allergic_reaction": "Penicillin allergy, shellfish allergy"
    },
    "clinical_data": {
      "cancer_type": "Oral squamous cell carcinoma",
      "stage": "Stage IVA",
      "tumor_description": "Poorly differentiated",
      "grade": "G3",
      "diagnosis_date": "2024-11-10",
      "recurrence": "No",
      "other_diseases": "Hypertension, Type 2 Diabetes",
      "symptom_time": "8 months prior to diagnosis",
      "benign_malignant": "Malignant",
      "tumor_shape": "Ulceroproliferative",
      "p2o_test_type": "MRI neck, Panendoscopy with biopsy",
      "cancer_site": "Left buccal mucosa",
      "pat_full_or_not": "Full assessment completed",
      "previous_surgical_operations": "Appendectomy (2010), Wisdom tooth extraction (2015)"
    },
    "genomic_data": {
      "gene_expression": "TP53 mutation positive",
      "mutation": "TP53 R248W, CDKN2A deletion",
      "gene_wise_cnv": "Amplification of 11q13",
      "methylation_data": "Hypermethylation of p16 promoter",
      "genomic_data_quality_score": 96.2
    },
    "treatment_information": {
      "treatment_type": "Surgery + Adjuvant chemoradiation",
      "drugs_intake": [
        {
          "drug_name": "Cisplatin",
          "dosage": "100mg/m² every 3 weeks",
          "duration": "6 cycles"
        },
        {
          "drug_name": "Radiotherapy",
          "dosage": "66 Gy in 33 fractions",
          "duration": "6.5 weeks"
        }
      ],
      "strain_and_data": "Completed planned treatment",
      "response_to_treatment": "Good response with clear margins",
      "adverse_effects": [
        "Mucositis grade 3",
        "Dysphagia grade 2",
        "Xerostomia",
        "Weight loss (8 kg)"
      ]
    },
    "outcome_data": {
      "survival_status": "Alive with disease",
      "last_follow_up_date": "2025-07-15",
      "follow_up_status": "Monthly follow-up, stable disease"
    }
  }
};

// Add some sample patients with different data for testing
const additionalSamplePatients = [
  {
    "patient_profile": {
      "personal_basic": {
        "td_name": "Priya Sharma",
        "age": 42,
        "sex": "female",
        "geographic_location": "Delhi, Delhi",
        "family_history_of_cancer": "Mother - breast cancer at 55",
        "addictive_use": "None",
        "job_profile": "Software engineer",
        "food_lifestyle": "Vegetarian, home-cooked meals",
        "mediolain": "optional",
        "emotional_factors": "Work stress",
        "allergic_reaction": "None known"
      },
      "clinical_data": {
        "cancer_type": "Breast Cancer",
        "stage": "Stage II",
        "tumor_description": "Triple-negative",
        "grade": "G2",
        "diagnosis_date": "2024-08-15",
        "recurrence": "No",
        "other_diseases": "None",
        "symptom_time": "3 months prior to diagnosis",
        "benign_malignant": "Malignant",
        "tumor_shape": "Infiltrating ductal carcinoma",
        "p2o_test_type": "Mammography, biopsy",
        "cancer_site": "Left breast",
        "pat_full_or_not": "Full assessment completed",
        "previous_surgical_operations": "Gallbladder removal (2018), C-section (2020)"
      },
      "genomic_data": {
        "gene_expression": "BRCA1/2 negative",
        "mutation": "TP53 mutation",
        "gene_wise_cnv": "No significant CNV",
        "methylation_data": "Normal methylation pattern",
        "genomic_data_quality_score": 78.5
      },
      "treatment_information": {
        "treatment_type": "Surgery + Chemotherapy",
        "drugs_intake": [
          {
            "drug_name": "Doxorubicin",
            "dosage": "60mg/m² every 3 weeks",
            "duration": "4 cycles"
          },
          {
            "drug_name": "Cyclophosphamide",
            "dosage": "600mg/m² every 3 weeks",
            "duration": "4 cycles"
          }
        ],
        "strain_and_data": "Completed planned treatment",
        "response_to_treatment": "Good response",
        "adverse_effects": [
          "Nausea grade 2",
          "Hair loss",
          "Fatigue"
        ]
      },
      "outcome_data": {
        "survival_status": "Alive without disease",
        "last_follow_up_date": "2025-01-10",
        "follow_up_status": "3-monthly follow-up, no recurrence"
      }
    }
  },
  {
    "patient_profile": {
      "personal_basic": {
        "td_name": "Anita Gupta",
        "age": 35,
        "sex": "female",
        "geographic_location": "Bangalore, Karnataka",
        "family_history_of_cancer": "None",
        "addictive_use": "None",
        "job_profile": "Teacher",
        "food_lifestyle": "Vegetarian, organic food",
        "mediolain": "optional",
        "emotional_factors": "Family responsibilities",
        "allergic_reaction": "Latex allergy"
      },
      "clinical_data": {
        "cancer_type": "Breast Cancer",
        "stage": "Stage I",
        "tumor_description": "HER2-positive",
        "grade": "G1",
        "diagnosis_date": "2024-06-20",
        "recurrence": "No",
        "other_diseases": "None",
        "symptom_time": "2 months prior to diagnosis",
        "benign_malignant": "Malignant",
        "tumor_shape": "Infiltrating ductal carcinoma",
        "p2o_test_type": "Mammography, biopsy, HER2 testing",
        "cancer_site": "Right breast",
        "pat_full_or_not": "Full assessment completed",
        "previous_surgical_operations": "Tonsillectomy (childhood), Wisdom tooth extraction (2019)"
      },
      "genomic_data": {
        "gene_expression": "HER2 amplification",
        "mutation": "No significant mutations",
        "gene_wise_cnv": "HER2 amplification",
        "methylation_data": "Normal methylation pattern",
        "genomic_data_quality_score": 92.0
      },
      "treatment_information": {
        "treatment_type": "Surgery + Targeted therapy",
        "drugs_intake": [
          {
            "drug_name": "Trastuzumab",
            "dosage": "8mg/kg loading, then 6mg/kg every 3 weeks",
            "duration": "12 months"
          }
        ],
        "strain_and_data": "Ongoing treatment",
        "response_to_treatment": "Excellent response",
        "adverse_effects": [
          "Mild infusion reactions",
          "Fatigue grade 1"
        ]
      },
      "outcome_data": {
        "survival_status": "Alive without disease",
        "last_follow_up_date": "2025-01-15",
        "follow_up_status": "3-monthly follow-up, no recurrence"
      }
    }
  },
  {
    "patient_profile": {
      "personal_basic": {
        "td_name": "Vikram Singh",
        "age": 63,
        "sex": "male",
        "geographic_location": "Jaipur, Rajasthan",
        "family_history_of_cancer": "Brother - colorectal cancer at 58",
        "addictive_use": "Former smoker (quit 10 years ago)",
        "job_profile": "Retired government officer",
        "food_lifestyle": "Non-vegetarian, traditional Rajasthani diet",
        "mediolain": "optional",
        "emotional_factors": "Retirement adjustment, mild depression",
        "allergic_reaction": "Sulfa drugs"
      },
      "clinical_data": {
        "cancer_type": "Colorectal Cancer",
        "stage": "Stage III",
        "tumor_description": "Moderately differentiated adenocarcinoma",
        "grade": "G2",
        "diagnosis_date": "2024-09-05",
        "recurrence": "No",
        "other_diseases": "Hypertension, Hyperlipidemia",
        "symptom_time": "6 months prior to diagnosis",
        "benign_malignant": "Malignant",
        "tumor_shape": "Annular constricting mass",
        "p2o_test_type": "Colonoscopy with biopsy, CT scan",
        "cancer_site": "Sigmoid colon",
        "pat_full_or_not": "Full assessment completed",
        "previous_surgical_operations": "Appendectomy (1985), Hernia repair (2010)"
      },
      "genomic_data": {
        "gene_expression": "KRAS mutation positive",
        "mutation": "KRAS G12D mutation",
        "gene_wise_cnv": "No significant CNV",
        "methylation_data": "Hypermethylation of MLH1 promoter",
        "genomic_data_quality_score": 88.7
      },
      "treatment_information": {
        "treatment_type": "Surgery + Adjuvant chemotherapy",
        "drugs_intake": [
          {
            "drug_name": "FOLFOX",
            "dosage": "Standard protocol",
            "duration": "12 cycles"
          }
        ],
        "strain_and_data": "Completed 10/12 cycles (reduced due to neuropathy)",
        "response_to_treatment": "Good response, no evidence of disease",
        "adverse_effects": [
          "Peripheral neuropathy grade 2",
          "Fatigue grade 2",
          "Nausea grade 1",
          "Neutropenia grade 3 (required dose reduction)"
        ]
      },
      "outcome_data": {
        "survival_status": "Alive without disease",
        "last_follow_up_date": "2025-03-20",
        "follow_up_status": "3-monthly follow-up, CEA monitoring"
      }
    }
  },
  {
    "patient_profile": {
      "personal_basic": {
        "td_name": "Arjun Nair",
        "age": 28,
        "sex": "male",
        "geographic_location": "Kochi, Kerala",
        "family_history_of_cancer": "None",
        "addictive_use": "None",
        "job_profile": "IT professional",
        "food_lifestyle": "Pescatarian, health-conscious",
        "mediolain": "optional",
        "emotional_factors": "High-stress work environment",
        "allergic_reaction": "None known"
      },
      "clinical_data": {
        "cancer_type": "Hodgkin Lymphoma",
        "stage": "Stage IIB",
        "tumor_description": "Nodular sclerosis",
        "grade": "Not applicable",
        "diagnosis_date": "2024-07-12",
        "recurrence": "No",
        "other_diseases": "None",
        "symptom_time": "4 months prior to diagnosis",
        "benign_malignant": "Malignant",
        "tumor_shape": "Multiple enlarged lymph nodes",
        "p2o_test_type": "Excisional lymph node biopsy, PET-CT",
        "cancer_site": "Cervical and mediastinal lymph nodes",
        "pat_full_or_not": "Full assessment completed",
        "previous_surgical_operations": "None"
      },
      "genomic_data": {
        "gene_expression": "Standard Hodgkin profile",
        "mutation": "No significant mutations",
        "gene_wise_cnv": "No significant CNV",
        "methylation_data": "Not assessed",
        "genomic_data_quality_score": 82.3
      },
      "treatment_information": {
        "treatment_type": "Chemotherapy",
        "drugs_intake": [
          {
            "drug_name": "ABVD regimen",
            "dosage": "Standard protocol",
            "duration": "6 cycles"
          }
        ],
        "strain_and_data": "Completed planned treatment",
        "response_to_treatment": "Complete response",
        "adverse_effects": [
          "Neutropenia grade 2",
          "Hair loss",
          "Fatigue grade 2",
          "Nausea grade 1"
        ]
      },
      "outcome_data": {
        "survival_status": "Alive without disease",
        "last_follow_up_date": "2025-02-15",
        "follow_up_status": "3-monthly follow-up, PET-CT at 6 months"
      }
    }
  },
  {
    "patient_profile": {
      "personal_basic": {
        "td_name": "Sunita Patel",
        "age": 57,
        "sex": "female",
        "geographic_location": "Ahmedabad, Gujarat",
        "family_history_of_cancer": "Sister - ovarian cancer at 49",
        "addictive_use": "None",
        "job_profile": "Homemaker",
        "food_lifestyle": "Vegetarian, traditional Gujarati diet",
        "mediolain": "optional",
        "emotional_factors": "Family support, positive outlook",
        "allergic_reaction": "Iodine contrast"
      },
      "clinical_data": {
        "cancer_type": "Ovarian Cancer",
        "stage": "Stage IIIC",
        "tumor_description": "High-grade serous carcinoma",
        "grade": "G3",
        "diagnosis_date": "2024-05-18",
        "recurrence": "No",
        "other_diseases": "Hypothyroidism",
        "symptom_time": "3 months prior to diagnosis",
        "benign_malignant": "Malignant",
        "tumor_shape": "Complex cystic and solid mass",
        "p2o_test_type": "CT abdomen/pelvis, CA-125, surgical staging",
        "cancer_site": "Bilateral ovaries with peritoneal spread",
        "pat_full_or_not": "Full assessment completed",
        "previous_surgical_operations": "Hysterectomy (2010), Cholecystectomy (2015)"
      },
      "genomic_data": {
        "gene_expression": "BRCA1 mutation positive",
        "mutation": "BRCA1 185delAG",
        "gene_wise_cnv": "No significant CNV",
        "methylation_data": "Not assessed",
        "genomic_data_quality_score": 94.1
      },
      "treatment_information": {
        "treatment_type": "Surgery + Chemotherapy + Maintenance therapy",
        "drugs_intake": [
          {
            "drug_name": "Carboplatin",
            "dosage": "AUC 5 every 3 weeks",
            "duration": "6 cycles"
          },
          {
            "drug_name": "Paclitaxel",
            "dosage": "175mg/m² every 3 weeks",
            "duration": "6 cycles"
          },
          {
            "drug_name": "Olaparib",
            "dosage": "300mg twice daily",
            "duration": "Maintenance - ongoing"
          }
        ],
        "strain_and_data": "Completed primary treatment, on maintenance",
        "response_to_treatment": "Complete response to primary treatment",
        "adverse_effects": [
          "Peripheral neuropathy grade 2",
          "Fatigue grade 2",
          "Anemia grade 2",
          "Nausea grade 1"
        ]
      },
      "outcome_data": {
        "survival_status": "Alive without disease",
        "last_follow_up_date": "2025-04-10",
        "follow_up_status": "3-monthly follow-up, CA-125 monitoring"
      }
    }
  },
  {
    "patient_profile": {
      "personal_basic": {
        "td_name": "Mohammed Khan",
        "age": 45,
        "sex": "male",
        "geographic_location": "Hyderabad, Telangana",
        "family_history_of_cancer": "None",
        "addictive_use": "Former smoker (quit 2 years ago)",
        "job_profile": "Restaurant owner",
        "food_lifestyle": "Non-vegetarian, high spice consumption",
        "mediolain": "optional",
        "emotional_factors": "Business stress, family support",
        "allergic_reaction": "None known"
      },
      "clinical_data": {
        "cancer_type": "Gastric Cancer",
        "stage": "Stage II",
        "tumor_description": "Diffuse type adenocarcinoma",
        "grade": "G3",
        "diagnosis_date": "2024-10-08",
        "recurrence": "No",
        "other_diseases": "Gastroesophageal reflux disease",
        "symptom_time": "5 months prior to diagnosis",
        "benign_malignant": "Malignant",
        "tumor_shape": "Ulcerative lesion",
        "p2o_test_type": "Upper endoscopy with biopsy, Endoscopic ultrasound, CT scan",
        "cancer_site": "Gastric antrum",
        "pat_full_or_not": "Full assessment completed",
        "previous_surgical_operations": "None"
      },
      "genomic_data": {
        "gene_expression": "HER2 negative",
        "mutation": "CDH1 mutation",
        "gene_wise_cnv": "No significant CNV",
        "methylation_data": "Hypermethylation of multiple CpG islands",
        "genomic_data_quality_score": 86.5
      },
      "treatment_information": {
        "treatment_type": "Surgery + Adjuvant chemoradiation",
        "drugs_intake": [
          {
            "drug_name": "FLOT regimen",
            "dosage": "Standard protocol",
            "duration": "4 cycles preoperative, 4 cycles postoperative"
          }
        ],
        "strain_and_data": "Completed preoperative treatment, post-surgery treatment ongoing",
        "response_to_treatment": "Good response to preoperative treatment",
        "adverse_effects": [
          "Neutropenia grade 3",
          "Nausea grade 2",
          "Fatigue grade 2",
          "Peripheral neuropathy grade 1"
        ]
      },
      "outcome_data": {
        "survival_status": "Alive with disease",
        "last_follow_up_date": "2025-01-25",
        "follow_up_status": "Monthly follow-up during treatment"
      }
    }
  },
  {
    "patient_profile": {
      "personal_basic": {
        "td_name": "Lakshmi Venkatesh",
        "age": 72,
        "sex": "female",
        "geographic_location": "Chennai, Tamil Nadu",
        "family_history_of_cancer": "None",
        "addictive_use": "None",
        "job_profile": "Retired school principal",
        "food_lifestyle": "Vegetarian, traditional South Indian diet",
        "mediolain": "optional",
        "emotional_factors": "Strong family support system",
        "allergic_reaction": "Penicillin"
      },
      "clinical_data": {
        "cancer_type": "Multiple Myeloma",
        "stage": "Stage III (ISS)",
        "tumor_description": "IgG kappa",
        "grade": "Not applicable",
        "diagnosis_date": "2024-04-15",
        "recurrence": "No",
        "other_diseases": "Osteoporosis, Chronic kidney disease stage 2",
        "symptom_time": "6 months prior to diagnosis",
        "benign_malignant": "Malignant",
        "tumor_shape": "Multiple lytic bone lesions",
        "p2o_test_type": "Serum protein electrophoresis, bone marrow biopsy, skeletal survey",
        "cancer_site": "Bone marrow with multiple bone lesions",
        "pat_full_or_not": "Full assessment completed",
        "previous_surgical_operations": "Cataract surgery (2018)"
      },
      "genomic_data": {
        "gene_expression": "High-risk cytogenetics",
        "mutation": "t(4;14), del(17p)",
        "gene_wise_cnv": "Multiple chromosomal abnormalities",
        "methylation_data": "Not assessed",
        "genomic_data_quality_score": 90.2
      },
      "treatment_information": {
        "treatment_type": "Chemotherapy + Stem cell transplant",
        "drugs_intake": [
          {
            "drug_name": "VRD regimen (Bortezomib, Lenalidomide, Dexamethasone)",
            "dosage": "Standard protocol with age adjustment",
            "duration": "4 cycles pre-transplant"
          },
          {
            "drug_name": "Lenalidomide",
            "dosage": "10mg daily",
            "duration": "Maintenance - ongoing"
          }
        ],
        "strain_and_data": "Completed induction, underwent autologous stem cell transplant, on maintenance",
        "response_to_treatment": "Very good partial response",
        "adverse_effects": [
          "Peripheral neuropathy grade 2",
          "Fatigue grade 2",
          "Thrombocytopenia grade 3",
          "Infections requiring hospitalization"
        ]
      },
      "outcome_data": {
        "survival_status": "Alive with disease",
        "last_follow_up_date": "2025-03-05",
        "follow_up_status": "Monthly follow-up, serum protein monitoring"
      }
    }
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB for seeding');

    // Clear existing patients (optional - remove this line if you want to keep existing data)
    await Patient.deleteMany({});
    console.log('🗑️ Cleared existing patient data');

    // Add sample patients
    const allPatients = [samplePatientData, ...additionalSamplePatients];
    
    for (const patientData of allPatients) {
      const patient = new Patient(patientData);
      await patient.save();
      console.log(`✅ Added patient: ${patientData.patient_profile.personal_basic.td_name}`);
    }

    console.log(`🎉 Successfully seeded ${allPatients.length} patients to the database`);
    
    // Show summary
    const totalPatients = await Patient.countDocuments();
    console.log(`📊 Total patients in database: ${totalPatients}`);

  } catch (error) {
    console.error('❌ Error seeding database:', error);
  } finally {
    // Close connection
    await mongoose.connection.close();
    console.log('🔌 Database connection closed');
    process.exit(0);
  }
}

// Run the seeding function
seedDatabase();
