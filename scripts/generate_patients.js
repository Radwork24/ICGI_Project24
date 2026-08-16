
const fs = require('fs');
const path = require('path');

const firstNames = [
    "Aarav", "Vivaan", "Aditya", "Vihaan", "Arjun", "Sai", "Reyansh", "Ayan", "Krishna", "Ishaan",
    "Shaurya", "Atharv", "Dhruv", "Kabir", "Rian", "Aaryamann", "Om", "Ganesh", "Rohan", "Karan",
    "Saanvi", "Anya", "Aadhya", "Aaradhya", "Ananya", "Pari", "Riya", "Diya", "Myra", "Eva",
    "Shanaya", "Kyra", "Saira", "Amara", "Naina", "Kavya", "Meera", "Zara", "Tara", "Nisha",
    "Rahul", "Suresh", "Ramesh", "Pankaj", "Amit", "Deepak", "Sanjay", "Manoj", "Vijay", "Anil",
    "Sunita", "Geeta", "Seema", "Rita", "Usha", "Anita", "Pooja", "Neetu", "Rekha", "Suman"
];

const lastNames = [
    "Patel", "Sharma", "Singh", "Kumar", "Gupta", "Verma", "Mishra", "Reddy", "Nair", "Iyer",
    "Khan", "Das", "Roy", "Chowdhury", "Mehta", "Shah", "Jain", "Agarwal", "Joshi", "Kulkarni",
    "Deshmukh", "Pillai", "Menon", "Acharya", "Bhat", "Rao", "Saxena", "Tiwari", "Dubey", "Pandey"
];

const cities = [
    "Mumbai, Maharashtra", "Delhi, Delhi", "Bangalore, Karnataka", "Hyderabad, Telangana", "Chennai, Tamil Nadu",
    "Kolkata, West Bengal", "Pune, Maharashtra", "Ahmedabad, Gujarat", "Jaipur, Rajasthan", "Lucknow, Uttar Pradesh",
    "Kochi, Kerala", "Chandigarh, Punjab", "Indore, Madhya Pradesh", "Bhopal, Madhya Pradesh", "Patna, Bihar"
];

const cancers = [
    {
        type: "Lung Cancer (NSCLC)",
        stages: ["Stage IIIA", "Stage IIIB", "Stage IV"],
        genes: [
            { mutation: "EGFR L858R", expression: "EGFR overexpression", drug: "Osimertinib" },
            { mutation: "KRAS G12C", expression: "PD-L1 high", drug: "Sotorasib" },
            { mutation: "ALK fusion", expression: "ALK positive", drug: "Alectinib" }
        ],
        sites: ["Right upper lobe", "Left lower lobe", "Right middle lobe"],
        symptoms: ["Persistent cough", "Shortness of breath", "Hemoptysis"]
    },
    {
        type: "Glioblastoma Multiforme",
        stages: ["Grade IV"],
        genes: [
            { mutation: "IDH1 wild-type", expression: "MGMT promoter unmethylated", drug: "Temozolomide + Radiation" },
            { mutation: "EGFRvIII amplification", expression: "PTEN loss", drug: "Clinical trial (Targeted)" }
        ],
        sites: ["Right temporal lobe", "Left frontal lobe", "Parietal lobe"],
        symptoms: ["Seizures", "Headache", "Memory loss"]
    },
    {
        type: "Prostate Cancer",
        stages: ["Stage III", "Stage IV"],
        genes: [
            { mutation: "BRCA2 mutation", expression: "AR-V7 negative", drug: "Olaparib + ADT" },
            { mutation: "PTEN deletion", expression: "TMPRSS2-ERG fusion", drug: "Abiraterone + Prednisone" }
        ],
        sites: ["Prostate gland", "Prostate with bone mets"],
        symptoms: ["Urinary retention", "Back pain", "Hematuria"]
    },
    {
        type: "Leukemia (AML)",
        stages: ["Acute Phase"],
        genes: [
            { mutation: "FLT3-ITD positive", expression: "NPM1 mutation", drug: "Midostaurin + Chemo" },
            { mutation: "IDH2 mutation", expression: "Normal karyotype", drug: "Enasidenib" }
        ],
        sites: ["Bone marrow", "Peripheral blood"],
        symptoms: ["Fatigue", "Bruising", "Fever"]
    },
    {
        type: "Melanoma",
        stages: ["Stage III", "Stage IV"],
        genes: [
            { mutation: "BRAF V600E", expression: "High tumor mutation burden", drug: "Dabrafenib + Trametinib" },
            { mutation: "NRAS mutation", expression: "PD-L1 positive", drug: "Pembrolizumab" }
        ],
        sites: ["Skin of back", "Scalp", "Lower leg"],
        symptoms: ["Changing mole", "Ulcerated lesion"]
    },
    {
        type: "Hepatocellular Carcinoma",
        stages: ["BCLC Stage B", "BCLC Stage C"],
        genes: [
            { mutation: "TERT promoter", expression: "AFP high", drug: "Atezolizumab + Bevacizumab" },
            { mutation: "CTNNB1 mutation", expression: "VEGF overexpression", drug: "Lenvatinib" }
        ],
        sites: ["Right lobe of liver", "Liver with portal vein thrombosis"],
        symptoms: ["Jaundice", "Abdominal pain", "Weight loss"]
    },
    {
        type: "Pancreatic Cancer",
        stages: ["Stage III", "Stage IV"],
        genes: [
            { mutation: "KRAS G12D", expression: "SMAD4 loss", drug: "FOLFIRINOX" },
            { mutation: "BRCA2 germline", expression: "PALB2 mutation", drug: "Gemcitabine + Cisplatin" }
        ],
        sites: ["Head of pancreas", "Body/Tail of pancreas"],
        symptoms: ["Jaundice", "Back pain", "Weight loss"]
    }
];

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generatePatient(id) {
    const firstName = getRandom(firstNames);
    const lastName = getRandom(lastNames);
    const fullName = `${firstName} ${lastName}`;
    const age = Math.floor(Math.random() * (80 - 25) + 25);
    const sex = ["male", "female"][Math.floor(Math.random() * 2)];

    const cancer = getRandom(cancers);
    const variant = getRandom(cancer.genes);

    const diagnosisDate = new Date();
    diagnosisDate.setMonth(diagnosisDate.getMonth() - Math.floor(Math.random() * 12));

    const formattedDate = diagnosisDate.toISOString().split('T')[0];

    return {
        "patient_profile": {
            "personal_basic": {
                "td_name": fullName,
                "age": age,
                "sex": sex,
                "geographic_location": getRandom(cities),
                "family_history_of_cancer": Math.random() > 0.7 ? `Parent - ${cancer.type}` : "None",
                "addictive_use": Math.random() > 0.5 ? "None" : "Occasional smoker/alcohol",
                "job_profile": "Service/Business",
                "food_lifestyle": "Varied diet",
                "mediolain": "optional",
                "emotional_factors": "Anxiety related to diagnosis",
                "allergic_reaction": "None known"
            },
            "clinical_data": {
                "cancer_type": cancer.type,
                "stage": getRandom(cancer.stages),
                "tumor_description": "Histologically confirmed",
                "grade": ["G1", "G2", "G3"][Math.floor(Math.random() * 3)],
                "diagnosis_date": formattedDate,
                "recurrence": "No",
                "other_diseases": Math.random() > 0.6 ? "Hypertension" : "None",
                "symptom_time": "Months prior to diagnosis",
                "benign_malignant": "Malignant",
                "tumor_shape": "Lesion identified",
                "p2o_test_type": "Biopsy and Imaging",
                "cancer_site": getRandom(cancer.sites),
                "pat_full_or_not": "Full assessment",
                "previous_surgical_operations": "None relevant"
            },
            "genomic_data": {
                "gene_expression": variant.expression,
                "mutation": variant.mutation,
                "gene_wise_cnv": "Analysis pending",
                "methylation_data": "Standard profile",
                "genomic_data_quality_score": parseFloat((Math.random() * (99 - 75) + 75).toFixed(1))
            },
            "treatment_information": {
                "treatment_type": "Standard Protocol",
                "drugs_intake": [
                    {
                        "drug_name": variant.drug,
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
    };
}

const dataFilePath = path.join(__dirname, '../src/data/patientsData.js');
let fileContent = fs.readFileSync(dataFilePath, 'utf8');

// Use lastIndexOf to find the last occurrence of '];' more reliably
const lastBracketIndex = fileContent.lastIndexOf('];');

if (lastBracketIndex !== -1) {
    const prefix = fileContent.substring(0, lastBracketIndex).trim();
    // remove potential trailing comma
    const cleanPrefix = prefix.replace(/,$/, '');

    const newPatients = [];
    for (let i = 0; i < 42; i++) {
        newPatients.push(generatePatient(i + 8));
    }

    let newPatientsStr = JSON.stringify(newPatients, null, 4);
    newPatientsStr = newPatientsStr.substring(1, newPatientsStr.length - 1); // remove [ and ]

    const newContent = cleanPrefix + ",\n" + newPatientsStr + "\n];\n";
    fs.writeFileSync(dataFilePath, newContent);
    console.log('Successfully appended 42 new patients.');
} else {
    console.error('Could not find closing bracket in patientsData.js');
}
