export const patientsData = [
    {
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
    },
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
    },

    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Rekha Tiwari",
                "age": 73,
                "sex": "male",
                "geographic_location": "Bangalore, Karnataka",
                "family_history_of_cancer": "None",
                "addictive_use": "None",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Hepatocellular Carcinoma",
                "stage": "BCLC Stage C",
                "tumor_description": "Histologically confirmed",
                "grade": "G1",
                "diagnosis_date": "2025-08-24",
                "recurrence": "No",
                "other_diseases": "None",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Right lobe of liver",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "AFP high",
                "mutation": "TERT promoter",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 82.5
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "Atezolizumab + Bevacizumab",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    },
    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Zara Deshmukh",
                "age": 37,
                "sex": "female",
                "geographic_location": "Indore, Madhya Pradesh",
                "family_history_of_cancer": "None",
                "addictive_use": "None",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Melanoma",
                "stage": "Stage III",
                "tumor_description": "Histologically confirmed",
                "grade": "G2",
                "diagnosis_date": "2025-07-24",
                "recurrence": "No",
                "other_diseases": "Hypertension",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Skin of back",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "PD-L1 positive",
                "mutation": "NRAS mutation",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 85.5
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "Pembrolizumab",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    },
    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Ganesh Menon",
                "age": 54,
                "sex": "female",
                "geographic_location": "Mumbai, Maharashtra",
                "family_history_of_cancer": "None",
                "addictive_use": "None",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Hepatocellular Carcinoma",
                "stage": "BCLC Stage C",
                "tumor_description": "Histologically confirmed",
                "grade": "G2",
                "diagnosis_date": "2025-07-24",
                "recurrence": "No",
                "other_diseases": "Hypertension",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Right lobe of liver",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "AFP high",
                "mutation": "TERT promoter",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 95.2
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "Atezolizumab + Bevacizumab",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    },
    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Suresh Shah",
                "age": 39,
                "sex": "male",
                "geographic_location": "Chennai, Tamil Nadu",
                "family_history_of_cancer": "None",
                "addictive_use": "Occasional smoker/alcohol",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Prostate Cancer",
                "stage": "Stage IV",
                "tumor_description": "Histologically confirmed",
                "grade": "G1",
                "diagnosis_date": "2025-09-24",
                "recurrence": "No",
                "other_diseases": "Hypertension",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Prostate gland",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "TMPRSS2-ERG fusion",
                "mutation": "PTEN deletion",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 85.3
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "Abiraterone + Prednisone",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    },
    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Vihaan Menon",
                "age": 78,
                "sex": "female",
                "geographic_location": "Chennai, Tamil Nadu",
                "family_history_of_cancer": "None",
                "addictive_use": "Occasional smoker/alcohol",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Hepatocellular Carcinoma",
                "stage": "BCLC Stage B",
                "tumor_description": "Histologically confirmed",
                "grade": "G2",
                "diagnosis_date": "2025-11-24",
                "recurrence": "No",
                "other_diseases": "Hypertension",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Right lobe of liver",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "VEGF overexpression",
                "mutation": "CTNNB1 mutation",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 77.8
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "Lenvatinib",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    },
    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Ganesh Tiwari",
                "age": 41,
                "sex": "male",
                "geographic_location": "Kochi, Kerala",
                "family_history_of_cancer": "None",
                "addictive_use": "Occasional smoker/alcohol",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Hepatocellular Carcinoma",
                "stage": "BCLC Stage C",
                "tumor_description": "Histologically confirmed",
                "grade": "G1",
                "diagnosis_date": "2025-01-24",
                "recurrence": "No",
                "other_diseases": "None",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Right lobe of liver",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "VEGF overexpression",
                "mutation": "CTNNB1 mutation",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 80.5
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "Lenvatinib",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    },
    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Aadhya Kulkarni",
                "age": 78,
                "sex": "male",
                "geographic_location": "Mumbai, Maharashtra",
                "family_history_of_cancer": "Parent - Pancreatic Cancer",
                "addictive_use": "None",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Pancreatic Cancer",
                "stage": "Stage IV",
                "tumor_description": "Histologically confirmed",
                "grade": "G1",
                "diagnosis_date": "2025-10-24",
                "recurrence": "No",
                "other_diseases": "Hypertension",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Head of pancreas",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "SMAD4 loss",
                "mutation": "KRAS G12D",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 92.2
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "FOLFIRINOX",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    },
    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Ayan Tiwari",
                "age": 39,
                "sex": "male",
                "geographic_location": "Jaipur, Rajasthan",
                "family_history_of_cancer": "None",
                "addictive_use": "Occasional smoker/alcohol",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Prostate Cancer",
                "stage": "Stage IV",
                "tumor_description": "Histologically confirmed",
                "grade": "G1",
                "diagnosis_date": "2025-02-24",
                "recurrence": "No",
                "other_diseases": "None",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Prostate gland",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "AR-V7 negative",
                "mutation": "BRCA2 mutation",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 79.2
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "Olaparib + ADT",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    },
    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Amit Tiwari",
                "age": 26,
                "sex": "female",
                "geographic_location": "Kolkata, West Bengal",
                "family_history_of_cancer": "Parent - Lung Cancer (NSCLC)",
                "addictive_use": "None",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Lung Cancer (NSCLC)",
                "stage": "Stage IIIA",
                "tumor_description": "Histologically confirmed",
                "grade": "G2",
                "diagnosis_date": "2025-02-24",
                "recurrence": "No",
                "other_diseases": "None",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Right middle lobe",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "PD-L1 high",
                "mutation": "KRAS G12C",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 87.6
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "Sotorasib",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    },
    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Rohan Deshmukh",
                "age": 73,
                "sex": "male",
                "geographic_location": "Bangalore, Karnataka",
                "family_history_of_cancer": "None",
                "addictive_use": "None",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Glioblastoma Multiforme",
                "stage": "Grade IV",
                "tumor_description": "Histologically confirmed",
                "grade": "G3",
                "diagnosis_date": "2025-04-24",
                "recurrence": "No",
                "other_diseases": "Hypertension",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Right temporal lobe",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "MGMT promoter unmethylated",
                "mutation": "IDH1 wild-type",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 90.7
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "Temozolomide + Radiation",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    },
    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Rekha Menon",
                "age": 58,
                "sex": "female",
                "geographic_location": "Patna, Bihar",
                "family_history_of_cancer": "None",
                "addictive_use": "Occasional smoker/alcohol",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Hepatocellular Carcinoma",
                "stage": "BCLC Stage C",
                "tumor_description": "Histologically confirmed",
                "grade": "G1",
                "diagnosis_date": "2025-12-24",
                "recurrence": "No",
                "other_diseases": "None",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Right lobe of liver",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "VEGF overexpression",
                "mutation": "CTNNB1 mutation",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 85.8
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "Lenvatinib",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    },
    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Eva Menon",
                "age": 25,
                "sex": "male",
                "geographic_location": "Chandigarh, Punjab",
                "family_history_of_cancer": "Parent - Pancreatic Cancer",
                "addictive_use": "None",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Pancreatic Cancer",
                "stage": "Stage IV",
                "tumor_description": "Histologically confirmed",
                "grade": "G3",
                "diagnosis_date": "2025-04-24",
                "recurrence": "No",
                "other_diseases": "None",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Head of pancreas",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "SMAD4 loss",
                "mutation": "KRAS G12D",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 76.9
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "FOLFIRINOX",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    },
    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Ananya Reddy",
                "age": 77,
                "sex": "female",
                "geographic_location": "Jaipur, Rajasthan",
                "family_history_of_cancer": "None",
                "addictive_use": "Occasional smoker/alcohol",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Glioblastoma Multiforme",
                "stage": "Grade IV",
                "tumor_description": "Histologically confirmed",
                "grade": "G2",
                "diagnosis_date": "2025-02-24",
                "recurrence": "No",
                "other_diseases": "Hypertension",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Left frontal lobe",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "PTEN loss",
                "mutation": "EGFRvIII amplification",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 97.4
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "Clinical trial (Targeted)",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    },
    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Rian Kulkarni",
                "age": 28,
                "sex": "male",
                "geographic_location": "Kolkata, West Bengal",
                "family_history_of_cancer": "Parent - Glioblastoma Multiforme",
                "addictive_use": "None",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Glioblastoma Multiforme",
                "stage": "Grade IV",
                "tumor_description": "Histologically confirmed",
                "grade": "G1",
                "diagnosis_date": "2025-07-24",
                "recurrence": "No",
                "other_diseases": "None",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Parietal lobe",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "MGMT promoter unmethylated",
                "mutation": "IDH1 wild-type",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 90.5
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "Temozolomide + Radiation",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    },
    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Pooja Verma",
                "age": 45,
                "sex": "male",
                "geographic_location": "Patna, Bihar",
                "family_history_of_cancer": "None",
                "addictive_use": "None",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Lung Cancer (NSCLC)",
                "stage": "Stage IV",
                "tumor_description": "Histologically confirmed",
                "grade": "G2",
                "diagnosis_date": "2025-06-24",
                "recurrence": "No",
                "other_diseases": "Hypertension",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Left lower lobe",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "EGFR overexpression",
                "mutation": "EGFR L858R",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 89.7
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "Osimertinib",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    },
    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Diya Joshi",
                "age": 61,
                "sex": "male",
                "geographic_location": "Delhi, Delhi",
                "family_history_of_cancer": "Parent - Melanoma",
                "addictive_use": "Occasional smoker/alcohol",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Melanoma",
                "stage": "Stage III",
                "tumor_description": "Histologically confirmed",
                "grade": "G1",
                "diagnosis_date": "2025-11-24",
                "recurrence": "No",
                "other_diseases": "None",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Scalp",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "PD-L1 positive",
                "mutation": "NRAS mutation",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 98.4
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "Pembrolizumab",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    },
    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Vivaan Saxena",
                "age": 42,
                "sex": "female",
                "geographic_location": "Jaipur, Rajasthan",
                "family_history_of_cancer": "None",
                "addictive_use": "None",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Pancreatic Cancer",
                "stage": "Stage IV",
                "tumor_description": "Histologically confirmed",
                "grade": "G2",
                "diagnosis_date": "2025-10-24",
                "recurrence": "No",
                "other_diseases": "None",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Head of pancreas",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "SMAD4 loss",
                "mutation": "KRAS G12D",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 90.2
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "FOLFIRINOX",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    },
    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Rekha Sharma",
                "age": 45,
                "sex": "male",
                "geographic_location": "Ahmedabad, Gujarat",
                "family_history_of_cancer": "None",
                "addictive_use": "Occasional smoker/alcohol",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Hepatocellular Carcinoma",
                "stage": "BCLC Stage C",
                "tumor_description": "Histologically confirmed",
                "grade": "G2",
                "diagnosis_date": "2025-02-24",
                "recurrence": "No",
                "other_diseases": "None",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Liver with portal vein thrombosis",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "VEGF overexpression",
                "mutation": "CTNNB1 mutation",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 92.8
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "Lenvatinib",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    },
    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Krishna Kumar",
                "age": 79,
                "sex": "female",
                "geographic_location": "Ahmedabad, Gujarat",
                "family_history_of_cancer": "Parent - Prostate Cancer",
                "addictive_use": "None",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Prostate Cancer",
                "stage": "Stage III",
                "tumor_description": "Histologically confirmed",
                "grade": "G1",
                "diagnosis_date": "2025-12-24",
                "recurrence": "No",
                "other_diseases": "Hypertension",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Prostate with bone mets",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "TMPRSS2-ERG fusion",
                "mutation": "PTEN deletion",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 83.3
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "Abiraterone + Prednisone",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    },
    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Karan Khan",
                "age": 27,
                "sex": "female",
                "geographic_location": "Bangalore, Karnataka",
                "family_history_of_cancer": "None",
                "addictive_use": "None",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Glioblastoma Multiforme",
                "stage": "Grade IV",
                "tumor_description": "Histologically confirmed",
                "grade": "G2",
                "diagnosis_date": "2025-05-24",
                "recurrence": "No",
                "other_diseases": "None",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Parietal lobe",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "MGMT promoter unmethylated",
                "mutation": "IDH1 wild-type",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 76.7
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "Temozolomide + Radiation",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    },
    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Manoj Sharma",
                "age": 39,
                "sex": "male",
                "geographic_location": "Bhopal, Madhya Pradesh",
                "family_history_of_cancer": "None",
                "addictive_use": "Occasional smoker/alcohol",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Pancreatic Cancer",
                "stage": "Stage III",
                "tumor_description": "Histologically confirmed",
                "grade": "G1",
                "diagnosis_date": "2025-08-24",
                "recurrence": "No",
                "other_diseases": "None",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Body/Tail of pancreas",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "SMAD4 loss",
                "mutation": "KRAS G12D",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 90.8
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "FOLFIRINOX",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    },
    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Saira Deshmukh",
                "age": 76,
                "sex": "male",
                "geographic_location": "Bhopal, Madhya Pradesh",
                "family_history_of_cancer": "Parent - Glioblastoma Multiforme",
                "addictive_use": "None",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Glioblastoma Multiforme",
                "stage": "Grade IV",
                "tumor_description": "Histologically confirmed",
                "grade": "G1",
                "diagnosis_date": "2025-10-24",
                "recurrence": "No",
                "other_diseases": "Hypertension",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Left frontal lobe",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "MGMT promoter unmethylated",
                "mutation": "IDH1 wild-type",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 80.7
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "Temozolomide + Radiation",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    },
    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Pari Joshi",
                "age": 29,
                "sex": "male",
                "geographic_location": "Jaipur, Rajasthan",
                "family_history_of_cancer": "None",
                "addictive_use": "Occasional smoker/alcohol",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Pancreatic Cancer",
                "stage": "Stage IV",
                "tumor_description": "Histologically confirmed",
                "grade": "G1",
                "diagnosis_date": "2025-01-24",
                "recurrence": "No",
                "other_diseases": "Hypertension",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Head of pancreas",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "SMAD4 loss",
                "mutation": "KRAS G12D",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 83
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "FOLFIRINOX",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    },
    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Sunita Saxena",
                "age": 61,
                "sex": "male",
                "geographic_location": "Delhi, Delhi",
                "family_history_of_cancer": "None",
                "addictive_use": "None",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Lung Cancer (NSCLC)",
                "stage": "Stage IV",
                "tumor_description": "Histologically confirmed",
                "grade": "G3",
                "diagnosis_date": "2025-11-24",
                "recurrence": "No",
                "other_diseases": "Hypertension",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Right middle lobe",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "PD-L1 high",
                "mutation": "KRAS G12C",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 82.7
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "Sotorasib",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    },
    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Om Gupta",
                "age": 60,
                "sex": "male",
                "geographic_location": "Indore, Madhya Pradesh",
                "family_history_of_cancer": "Parent - Melanoma",
                "addictive_use": "None",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Melanoma",
                "stage": "Stage III",
                "tumor_description": "Histologically confirmed",
                "grade": "G2",
                "diagnosis_date": "2025-06-24",
                "recurrence": "No",
                "other_diseases": "Hypertension",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Skin of back",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "PD-L1 positive",
                "mutation": "NRAS mutation",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 84
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "Pembrolizumab",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    },
    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Anil Saxena",
                "age": 76,
                "sex": "female",
                "geographic_location": "Bangalore, Karnataka",
                "family_history_of_cancer": "None",
                "addictive_use": "None",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Pancreatic Cancer",
                "stage": "Stage IV",
                "tumor_description": "Histologically confirmed",
                "grade": "G1",
                "diagnosis_date": "2025-02-24",
                "recurrence": "No",
                "other_diseases": "Hypertension",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Body/Tail of pancreas",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "SMAD4 loss",
                "mutation": "KRAS G12D",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 96.5
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "FOLFIRINOX",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    },
    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Amara Dubey",
                "age": 55,
                "sex": "male",
                "geographic_location": "Chennai, Tamil Nadu",
                "family_history_of_cancer": "None",
                "addictive_use": "Occasional smoker/alcohol",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Leukemia (AML)",
                "stage": "Acute Phase",
                "tumor_description": "Histologically confirmed",
                "grade": "G2",
                "diagnosis_date": "2025-11-24",
                "recurrence": "No",
                "other_diseases": "None",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Peripheral blood",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "Normal karyotype",
                "mutation": "IDH2 mutation",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 80.6
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "Enasidenib",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    },
    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Amit Pandey",
                "age": 29,
                "sex": "female",
                "geographic_location": "Mumbai, Maharashtra",
                "family_history_of_cancer": "None",
                "addictive_use": "Occasional smoker/alcohol",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Lung Cancer (NSCLC)",
                "stage": "Stage IIIB",
                "tumor_description": "Histologically confirmed",
                "grade": "G2",
                "diagnosis_date": "2025-06-24",
                "recurrence": "No",
                "other_diseases": "None",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Right middle lobe",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "ALK positive",
                "mutation": "ALK fusion",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 78.4
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "Alectinib",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    },
    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Ananya Kumar",
                "age": 26,
                "sex": "female",
                "geographic_location": "Patna, Bihar",
                "family_history_of_cancer": "None",
                "addictive_use": "None",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Lung Cancer (NSCLC)",
                "stage": "Stage IIIA",
                "tumor_description": "Histologically confirmed",
                "grade": "G2",
                "diagnosis_date": "2025-07-24",
                "recurrence": "No",
                "other_diseases": "None",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Right middle lobe",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "PD-L1 high",
                "mutation": "KRAS G12C",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 95.9
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "Sotorasib",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    },
    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Ishaan Saxena",
                "age": 32,
                "sex": "female",
                "geographic_location": "Kolkata, West Bengal",
                "family_history_of_cancer": "Parent - Glioblastoma Multiforme",
                "addictive_use": "None",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Glioblastoma Multiforme",
                "stage": "Grade IV",
                "tumor_description": "Histologically confirmed",
                "grade": "G3",
                "diagnosis_date": "2025-01-24",
                "recurrence": "No",
                "other_diseases": "None",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Right temporal lobe",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "PTEN loss",
                "mutation": "EGFRvIII amplification",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 87.6
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "Clinical trial (Targeted)",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    },
    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Om Joshi",
                "age": 48,
                "sex": "female",
                "geographic_location": "Pune, Maharashtra",
                "family_history_of_cancer": "Parent - Glioblastoma Multiforme",
                "addictive_use": "None",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Glioblastoma Multiforme",
                "stage": "Grade IV",
                "tumor_description": "Histologically confirmed",
                "grade": "G3",
                "diagnosis_date": "2025-02-24",
                "recurrence": "No",
                "other_diseases": "None",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Left frontal lobe",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "PTEN loss",
                "mutation": "EGFRvIII amplification",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 75.2
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "Clinical trial (Targeted)",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    },
    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Kyra Mehta",
                "age": 49,
                "sex": "female",
                "geographic_location": "Ahmedabad, Gujarat",
                "family_history_of_cancer": "None",
                "addictive_use": "Occasional smoker/alcohol",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Leukemia (AML)",
                "stage": "Acute Phase",
                "tumor_description": "Histologically confirmed",
                "grade": "G3",
                "diagnosis_date": "2025-09-24",
                "recurrence": "No",
                "other_diseases": "None",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Peripheral blood",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "NPM1 mutation",
                "mutation": "FLT3-ITD positive",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 89.7
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "Midostaurin + Chemo",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    },
    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Diya Pillai",
                "age": 74,
                "sex": "male",
                "geographic_location": "Hyderabad, Telangana",
                "family_history_of_cancer": "Parent - Glioblastoma Multiforme",
                "addictive_use": "None",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Glioblastoma Multiforme",
                "stage": "Grade IV",
                "tumor_description": "Histologically confirmed",
                "grade": "G3",
                "diagnosis_date": "2025-07-24",
                "recurrence": "No",
                "other_diseases": "Hypertension",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Right temporal lobe",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "PTEN loss",
                "mutation": "EGFRvIII amplification",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 92.8
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "Clinical trial (Targeted)",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    },
    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Neetu Bhat",
                "age": 79,
                "sex": "female",
                "geographic_location": "Chandigarh, Punjab",
                "family_history_of_cancer": "None",
                "addictive_use": "Occasional smoker/alcohol",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Melanoma",
                "stage": "Stage IV",
                "tumor_description": "Histologically confirmed",
                "grade": "G2",
                "diagnosis_date": "2025-05-24",
                "recurrence": "No",
                "other_diseases": "None",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Skin of back",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "High tumor mutation burden",
                "mutation": "BRAF V600E",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 88
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "Dabrafenib + Trametinib",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    },
    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Ramesh Sharma",
                "age": 64,
                "sex": "female",
                "geographic_location": "Indore, Madhya Pradesh",
                "family_history_of_cancer": "None",
                "addictive_use": "Occasional smoker/alcohol",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Prostate Cancer",
                "stage": "Stage III",
                "tumor_description": "Histologically confirmed",
                "grade": "G1",
                "diagnosis_date": "2025-07-24",
                "recurrence": "No",
                "other_diseases": "None",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Prostate gland",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "TMPRSS2-ERG fusion",
                "mutation": "PTEN deletion",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 93.4
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "Abiraterone + Prednisone",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    },
    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Aaradhya Deshmukh",
                "age": 43,
                "sex": "male",
                "geographic_location": "Jaipur, Rajasthan",
                "family_history_of_cancer": "Parent - Leukemia (AML)",
                "addictive_use": "Occasional smoker/alcohol",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Leukemia (AML)",
                "stage": "Acute Phase",
                "tumor_description": "Histologically confirmed",
                "grade": "G3",
                "diagnosis_date": "2025-02-24",
                "recurrence": "No",
                "other_diseases": "None",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Peripheral blood",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "Normal karyotype",
                "mutation": "IDH2 mutation",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 96
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "Enasidenib",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    },
    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Kavya Iyer",
                "age": 64,
                "sex": "male",
                "geographic_location": "Patna, Bihar",
                "family_history_of_cancer": "None",
                "addictive_use": "Occasional smoker/alcohol",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Glioblastoma Multiforme",
                "stage": "Grade IV",
                "tumor_description": "Histologically confirmed",
                "grade": "G1",
                "diagnosis_date": "2025-01-24",
                "recurrence": "No",
                "other_diseases": "None",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Left frontal lobe",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "PTEN loss",
                "mutation": "EGFRvIII amplification",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 95.5
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "Clinical trial (Targeted)",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    },
    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Aarav Mehta",
                "age": 49,
                "sex": "female",
                "geographic_location": "Kolkata, West Bengal",
                "family_history_of_cancer": "Parent - Melanoma",
                "addictive_use": "None",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Melanoma",
                "stage": "Stage III",
                "tumor_description": "Histologically confirmed",
                "grade": "G2",
                "diagnosis_date": "2025-04-24",
                "recurrence": "No",
                "other_diseases": "None",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Skin of back",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "PD-L1 positive",
                "mutation": "NRAS mutation",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 77.9
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "Pembrolizumab",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    },
    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Karan Bhat",
                "age": 58,
                "sex": "female",
                "geographic_location": "Mumbai, Maharashtra",
                "family_history_of_cancer": "None",
                "addictive_use": "Occasional smoker/alcohol",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Lung Cancer (NSCLC)",
                "stage": "Stage IIIB",
                "tumor_description": "Histologically confirmed",
                "grade": "G2",
                "diagnosis_date": "2025-10-24",
                "recurrence": "No",
                "other_diseases": "None",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Left lower lobe",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "EGFR overexpression",
                "mutation": "EGFR L858R",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 84.3
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "Osimertinib",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    },
    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Vijay Kulkarni",
                "age": 37,
                "sex": "male",
                "geographic_location": "Bangalore, Karnataka",
                "family_history_of_cancer": "None",
                "addictive_use": "Occasional smoker/alcohol",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Pancreatic Cancer",
                "stage": "Stage IV",
                "tumor_description": "Histologically confirmed",
                "grade": "G1",
                "diagnosis_date": "2025-12-24",
                "recurrence": "No",
                "other_diseases": "None",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Head of pancreas",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "PALB2 mutation",
                "mutation": "BRCA2 germline",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 89.4
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "Gemcitabine + Cisplatin",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    },
    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Riya Patel",
                "age": 59,
                "sex": "female",
                "geographic_location": "Lucknow, Uttar Pradesh",
                "family_history_of_cancer": "None",
                "addictive_use": "None",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Leukemia (AML)",
                "stage": "Acute Phase",
                "tumor_description": "Histologically confirmed",
                "grade": "G3",
                "diagnosis_date": "2025-10-24",
                "recurrence": "No",
                "other_diseases": "None",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Peripheral blood",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "Normal karyotype",
                "mutation": "IDH2 mutation",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 97.3
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "Enasidenib",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    },
    {
        "patient_profile": {
            "personal_basic": {
                "td_name": "Anya Sharma",
                "age": 28,
                "sex": "female",
                "geographic_location": "Mumbai, Maharashtra",
                "family_history_of_cancer": "Parent - Hepatocellular Carcinoma",
                "addictive_use": "None",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": "Hepatocellular Carcinoma",
                "stage": "BCLC Stage C",
                "tumor_description": "Histologically confirmed",
                "grade": "G1",
                "diagnosis_date": "2025-01-24",
                "recurrence": "No",
                "other_diseases": "None",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": "Liver with portal vein thrombosis",
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": "VEGF overexpression",
                "mutation": "CTNNB1 mutation",
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": 75.3
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": "Lenvatinib",
                        "dosage": "Standard dose",
                        "duration": "Ongoing"
                    }
                ],
                "strain_and_data": "Treatment initiated",
                "response_to_treatment": "Monitoring",
                "adverse_effects": [
                    "Fatigue",
                    "Nausea"
                ]
            },
            "outcome_data": {
                "survival_status": "Alive",
                "last_follow_up_date": "2025-05-20",
                "follow_up_status": "Regular follow-up"
            }
        }
    }

];
