import mongoose from 'mongoose';

const drugSchema = new mongoose.Schema({
  drug_name: {
    type: String,
    required: true
  },
  dosage: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  }
});

const patientSchema = new mongoose.Schema({
  patient_profile: {
    personal_basic: {
      td_name: {
        type: String,
        default: "optional"
      },
      age: {
        type: Number,
        required: true
      },
      sex: {
        type: String,
        required: true,
        enum: ['male', 'female', 'other']
      },
      geographic_location: {
        type: String,
        required: true
      },
      family_history_of_cancer: {
        type: String,
        required: true
      },
      addictive_use: {
        type: String,
        required: true
      },
      job_profile: {
        type: String,
        required: true
      },
      food_lifestyle: {
        type: String,
        required: true
      },
      mediolain: {
        type: String,
        default: "optional"
      },
      emotional_factors: {
        type: String,
        required: true
      },
      allergic_reaction: {
        type: String,
        default: "None known"
      }
    },
    clinical_data: {
      cancer_type: {
        type: String,
        required: true
      },
      stage: {
        type: String,
        required: true
      },
      tumor_description: {
        type: String,
        required: true
      },
      grade: {
        type: String,
        required: true
      },
      diagnosis_date: {
        type: Date,
        required: true
      },
      recurrence: {
        type: String,
        required: true
      },
      other_diseases: {
        type: String,
        required: true
      },
      symptom_time: {
        type: String,
        required: true
      },
      benign_malignant: {
        type: String,
        required: true
      },
      tumor_shape: {
        type: String,
        required: true
      },
      p2o_test_type: {
        type: String,
        required: true
      },
      cancer_site: {
        type: String,
        required: true
      },
      pat_full_or_not: {
        type: String,
        required: true
      },
      previous_surgical_operations: {
        type: String,
        default: "None"
      }
    },
    genomic_data: {
      gene_expression: {
        type: String,
        required: true
      },
      mutation: {
        type: String,
        required: true
      },
      gene_wise_cnv: {
        type: String,
        required: true
      },
      methylation_data: {
        type: String,
        required: true
      },
      genomic_data_quality_score: {
        type: Number,
        required: true
      }
    },
    treatment_information: {
      treatment_type: {
        type: String,
        required: true
      },
      drugs_intake: [drugSchema],
      strain_and_data: {
        type: String,
        required: true
      },
      response_to_treatment: {
        type: String,
        required: true
      },
      adverse_effects: [{
        type: String
      }]
    },
    outcome_data: {
      survival_status: {
        type: String,
        required: true
      },
      last_follow_up_date: {
        type: Date,
        required: true
      },
      follow_up_status: {
        type: String,
        required: true
      }
    }
  }
}, {
  timestamps: true
});

// Create a virtual field for easy access to patient name
patientSchema.virtual('name').get(function() {
  return this.patient_profile.personal_basic.td_name !== "optional" 
    ? this.patient_profile.personal_basic.td_name 
    : `Patient ${this._id}`;
});

// Create a virtual field for simplified display data (for frontend compatibility)
patientSchema.virtual('displayData').get(function() {
  const personal = this.patient_profile.personal_basic;
  const clinical = this.patient_profile.clinical_data;
  const genomic = this.patient_profile.genomic_data;
  
  return {
    name: personal.td_name !== "optional" ? personal.td_name : `Patient ${this._id}`,
    age: personal.age,
    cancer: clinical.cancer_type,
    tag: clinical.grade,
    stage: clinical.stage,
    score: Math.round(genomic.genomic_data_quality_score)
  };
});

// Ensure virtual fields are serialized
patientSchema.set('toJSON', { virtuals: true });

const Patient = mongoose.model('Patient', patientSchema);

export default Patient;
