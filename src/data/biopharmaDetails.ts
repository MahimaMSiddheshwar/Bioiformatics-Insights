// src/data/biopharmaDetails.ts

import { TopicDetail } from './types';

export const biopharmaDetails: TopicDetail[] = [
  {
    slug: 'Drug-discovery-pipeline',
    summary: 'From target identification to lead optimization.',
    content: [
      'Target identification and validation strategies',
      'High-throughput screening and assay development',
      'Hit-to-lead optimization and SAR studies',
      'Lead optimization and ADME/Tox profiling',
      'Preclinical candidate selection and IND filing'
    ],
    figures: [
      {
        src: '/images/topics/drug_discovery.png',
        alt: 'Drug discovery pipeline',
        caption: 'Complete drug discovery process from target to candidate'
      },
      {
        src: '/images/topics/hts_screening.png',
        alt: 'High-throughput screening',
        caption: 'Automated screening of compound libraries'
      }
    ]
  },
  {
    slug: 'Preclinical-development',
    summary: 'Safety and efficacy testing before clinical trials.',
    content: [
      'In vitro pharmacology and mechanism of action',
      'In vivo efficacy studies in disease models',
      'Toxicology and safety pharmacology assessment',
      'Pharmacokinetics and bioavailability studies',
      'GLP compliance and regulatory toxicology'
    ],
    figures: [
      {
        src: '/images/topics/preclinical_testing.png',
        alt: 'Preclinical testing',
        caption: 'In vitro and in vivo studies for safety and efficacy'
      },
      {
        src: '/images/topics/toxicology.png',
        alt: 'Toxicology studies',
        caption: 'Safety assessment and toxicology testing'
      }
    ]
  },
  {
    slug: 'Clinical-trials-phases',
    summary: 'Human studies from Phase I to approval.',
    content: [
      'Phase I: Safety and dose escalation studies',
      'Phase II: Efficacy and dose optimization',
      'Phase III: Pivotal trials and regulatory approval',
      'Phase IV: Post-marketing surveillance',
      'Clinical trial design and statistical considerations'
    ],
    figures: [
      {
        src: '/images/topics/clinical_phases.png',
        alt: 'Clinical trial phases',
        caption: 'Four phases of clinical development'
      },
      {
        src: '/images/topics/trial_design.png',
        alt: 'Clinical trial design',
        caption: 'Randomized controlled trial methodology'
      }
    ]
  },
  {
    slug: 'Biologics-manufacturing',
    summary: 'Large-scale production of biologic drugs.',
    content: [
      'Cell line development and upstream processing',
      'Bioreactor design and process optimization',
      'Downstream purification and chromatography',
      'Formulation development and stability testing',
      'Process validation and GMP manufacturing'
    ],
    figures: [
      {
        src: '/images/topics/bioreactor.png',
        alt: 'Bioreactor manufacturing',
        caption: 'Large-scale bioreactor for biologics production'
      },
      {
        src: '/images/topics/purification.png',
        alt: 'Protein purification',
        caption: 'Chromatography steps for biologics purification'
      }
    ]
  },
  {
    slug: 'Regulatory-affairs',
    summary: 'Navigating regulatory requirements and submissions.',
    content: [
      'Regulatory strategy and pathway selection',
      'IND/CTA preparation and submission',
      'NDA/BLA filing and review process',
      'Regulatory interactions and advisory committees',
      'Global regulatory harmonization and ICH guidelines'
    ],
    figures: [
      {
        src: '/images/topics/regulatory_process.png',
        alt: 'Regulatory approval process',
        caption: 'FDA review and approval timeline'
      },
      {
        src: '/images/topics/ich_guidelines.png',
        alt: 'ICH guidelines',
        caption: 'International Council for Harmonisation standards'
      }
    ]
  },
  {
    slug: 'Pharmacovigilance',
    summary: 'Drug safety monitoring and risk management.',
    content: [
      'Adverse event reporting and signal detection',
      'Risk evaluation and mitigation strategies (REMS)',
      'Periodic safety update reports (PSURs)',
      'Pharmacovigilance systems and databases',
      'Post-marketing safety surveillance'
    ],
    figures: [
      {
        src: '/images/topics/pharmacovigilance.png',
        alt: 'Pharmacovigilance system',
        caption: 'Drug safety monitoring and adverse event tracking'
      },
      {
        src: '/images/topics/risk_management.png',
        alt: 'Risk management',
        caption: 'Risk evaluation and mitigation strategies'
      }
    ]
  },
  {
    slug: 'Pharmacogenomics',
    summary: 'Genetics influencing drug response.',
    content: [
      'Pharmacokinetic genes and drug metabolism',
      'Pharmacodynamic genes and drug targets',
      'Biomarker development and companion diagnostics',
      'Population genetics and ethnic variability',
      'Personalized medicine and genotype-guided therapy'
    ],
    figures: [
      {
        src: '/images/topics/pharmacogenomics.png',
        alt: 'Pharmacogenomics concept',
        caption: 'Genetic influence on drug response and metabolism'
      },
      {
        src: '/images/topics/companion_diagnostics.png',
        alt: 'Companion diagnostics',
        caption: 'Biomarker testing for personalized therapy'
      }
    ]
  }
];