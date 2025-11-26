import './PatientDetail.css';

const PatientDetail = ({ patient, onClose }) => {
  if (!patient) return null;

  const { patient_profile } = patient;
  const { personal_basic, clinical_data, genomic_data, treatment_information, outcome_data } = patient_profile;

  return (
    <div className="patient-detail-overlay" onClick={onClose}>
      <div className="patient-detail-panel" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="patient-detail-header">
          <div className="patient-detail-title">
            <h2>{personal_basic.td_name !== "optional" ? personal_basic.td_name : `Patient ${patient._id}`}</h2>
            <p className="patient-detail-subtitle">Complete Patient Profile</p>
          </div>
          <button className="patient-detail-close" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="patient-detail-content">
          
          {/* Personal Information */}
          <section className="detail-section">
            <h3 className="detail-section-title">Personal Information</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <span className="detail-label">Age</span>
                <span className="detail-value">{personal_basic.age} years</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Sex</span>
                <span className="detail-value">{personal_basic.sex}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location</span>
                <span className="detail-value">{personal_basic.geographic_location}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Occupation</span>
                <span className="detail-value">{personal_basic.job_profile}</span>
              </div>
              <div className="detail-item full-width">
                <span className="detail-label">Family History</span>
                <span className="detail-value">{personal_basic.family_history_of_cancer}</span>
              </div>
              <div className="detail-item full-width">
                <span className="detail-label">Lifestyle</span>
                <span className="detail-value">{personal_basic.food_lifestyle}</span>
              </div>
              <div className="detail-item full-width">
                <span className="detail-label">Addictive Use</span>
                <span className="detail-value">{personal_basic.addictive_use}</span>
              </div>
              <div className="detail-item full-width">
                <span className="detail-label">Emotional Factors</span>
                <span className="detail-value">{personal_basic.emotional_factors}</span>
              </div>
              <div className="detail-item full-width">
                <span className="detail-label">Allergic Reactions</span>
                <span className="detail-value">{personal_basic.allergic_reaction}</span>
              </div>
            </div>
          </section>

          {/* Clinical Data */}
          <section className="detail-section">
            <h3 className="detail-section-title">Clinical Information</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <span className="detail-label">Cancer Type</span>
                <span className="detail-value">{clinical_data.cancer_type}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Stage</span>
                <span className="detail-badge stage">{clinical_data.stage}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Grade</span>
                <span className="detail-badge grade">{clinical_data.grade}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Diagnosis Date</span>
                <span className="detail-value">{new Date(clinical_data.diagnosis_date).toLocaleDateString()}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Cancer Site</span>
                <span className="detail-value">{clinical_data.cancer_site}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Recurrence</span>
                <span className="detail-value">{clinical_data.recurrence}</span>
              </div>
              <div className="detail-item full-width">
                <span className="detail-label">Tumor Description</span>
                <span className="detail-value">{clinical_data.tumor_description}</span>
              </div>
              <div className="detail-item full-width">
                <span className="detail-label">Other Diseases</span>
                <span className="detail-value">{clinical_data.other_diseases}</span>
              </div>
              <div className="detail-item full-width">
                <span className="detail-label">Test Type</span>
                <span className="detail-value">{clinical_data.p2o_test_type}</span>
              </div>
              <div className="detail-item full-width">
                <span className="detail-label">Previous Surgical Operations</span>
                <span className="detail-value">{clinical_data.previous_surgical_operations}</span>
              </div>
            </div>
          </section>

          {/* Genomic Data */}
          <section className="detail-section">
            <h3 className="detail-section-title">Genomic Analysis</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <span className="detail-label">Quality Score</span>
                <span className="detail-badge score">{Math.round(genomic_data.genomic_data_quality_score)}%</span>
              </div>
              <div className="detail-item full-width">
                <span className="detail-label">Gene Expression</span>
                <span className="detail-value">{genomic_data.gene_expression}</span>
              </div>
              <div className="detail-item full-width">
                <span className="detail-label">Mutations</span>
                <span className="detail-value">{genomic_data.mutation}</span>
              </div>
              <div className="detail-item full-width">
                <span className="detail-label">Copy Number Variation</span>
                <span className="detail-value">{genomic_data.gene_wise_cnv}</span>
              </div>
              <div className="detail-item full-width">
                <span className="detail-label">Methylation Data</span>
                <span className="detail-value">{genomic_data.methylation_data}</span>
              </div>
            </div>
          </section>

          {/* Treatment Information */}
          <section className="detail-section">
            <h3 className="detail-section-title">Treatment Information</h3>
            <div className="detail-grid">
              <div className="detail-item full-width">
                <span className="detail-label">Treatment Type</span>
                <span className="detail-value">{treatment_information.treatment_type}</span>
              </div>
              <div className="detail-item full-width">
                <span className="detail-label">Treatment Status</span>
                <span className="detail-value">{treatment_information.strain_and_data}</span>
              </div>
              <div className="detail-item full-width">
                <span className="detail-label">Response to Treatment</span>
                <span className="detail-value">{treatment_information.response_to_treatment}</span>
              </div>
              
              {/* Drugs */}
              <div className="detail-item full-width">
                <span className="detail-label">Medications</span>
                <div className="drugs-list">
                  {treatment_information.drugs_intake.map((drug, index) => (
                    <div key={index} className="drug-item">
                      <div className="drug-name">{drug.drug_name}</div>
                      <div className="drug-details">
                        <span>Dosage: {drug.dosage}</span>
                        <span>Duration: {drug.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Adverse Effects */}
              <div className="detail-item full-width">
                <span className="detail-label">Adverse Effects</span>
                <div className="effects-list">
                  {treatment_information.adverse_effects.map((effect, index) => (
                    <span key={index} className="effect-badge">{effect}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Outcome Data */}
          <section className="detail-section">
            <h3 className="detail-section-title">Outcome & Follow-up</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <span className="detail-label">Survival Status</span>
                <span className="detail-badge outcome">{outcome_data.survival_status}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Last Follow-up</span>
                <span className="detail-value">{new Date(outcome_data.last_follow_up_date).toLocaleDateString()}</span>
              </div>
              <div className="detail-item full-width">
                <span className="detail-label">Follow-up Status</span>
                <span className="detail-value">{outcome_data.follow_up_status}</span>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PatientDetail;
