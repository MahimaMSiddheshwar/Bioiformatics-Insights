// src/data/qcDetails.ts

import { TopicDetail } from './types';

export const qcDetails: TopicDetail[] = [
  {
    slug: 'GMP-GLP-GCP',
    summary: 'Comparison of regulated quality systems.',
    content: [
      'Good Manufacturing Practices (GMP) for production',
      'Good Laboratory Practices (GLP) for research',
      'Good Clinical Practices (GCP) for trials',
      'Quality system elements and documentation',
      'Regulatory inspections and compliance strategies'
    ],
    figures: [
      {
        src: '/images/topics/gxp_comparison.png',
        alt: 'GxP quality systems comparison',
        caption: 'Comparison of GMP, GLP, and GCP requirements'
      },
      {
        src: '/images/topics/quality_systems.png',
        alt: 'Quality system framework',
        caption: 'Integrated quality management system structure'
      }
    ]
  },
  {
    slug: 'Deviations-CAPA',
    summary: 'Root cause analysis and corrective actions.',
    content: [
      'Deviation identification and classification',
      'Root cause analysis methodologies',
      'Corrective and Preventive Action (CAPA) planning',
      'Effectiveness verification and closure',
      'CAPA metrics and continuous improvement'
    ],
    figures: [
      {
        src: '/images/topics/deviation_process.png',
        alt: 'Deviation management process',
        caption: 'Systematic approach to deviation handling'
      },
      {
        src: '/images/topics/root_cause_analysis.png',
        alt: 'Root cause analysis',
        caption: 'Tools and methods for RCA investigation'
      }
    ]
  },
  {
    slug: 'Change-control',
    summary: 'Managing controlled changes.',
    content: [
      'Change control system and procedures',
      'Change assessment and risk evaluation',
      'Documentation and approval workflows',
      'Implementation and verification activities',
      'Change effectiveness and post-implementation review'
    ],
    figures: [
      {
        src: '/images/topics/change_control.png',
        alt: 'Change control process',
        caption: 'Structured change management workflow'
      },
      {
        src: '/images/topics/risk_assessment.png',
        alt: 'Change risk assessment',
        caption: 'Risk evaluation for proposed changes'
      }
    ]
  },
  {
    slug: 'Audit-readiness',
    summary: 'Preparing for internal and external audits.',
    content: [
      'Audit preparation and planning activities',
      'Document organization and record retrieval',
      'Personnel training and mock audits',
      'Audit conduct and response strategies',
      'Findings resolution and corrective actions'
    ],
    figures: [
      {
        src: '/images/topics/audit_preparation.png',
        alt: 'Audit preparation checklist',
        caption: 'Comprehensive audit readiness activities'
      },
      {
        src: '/images/topics/audit_conduct.png',
        alt: 'Audit execution',
        caption: 'Audit process and interaction protocols'
      }
    ]
  },
  {
    slug: 'Batch-records',
    summary: 'Manufacturing documentation.',
    content: [
      'Batch record structure and content requirements',
      'Real-time documentation and data entry',
      'Review and approval workflows',
      'Record retention and archiving',
      'Electronic batch records and validation'
    ],
    figures: [
      {
        src: '/images/topics/batch_record.png',
        alt: 'Batch record format',
        caption: 'Standard batch record template and sections'
      },
      {
        src: '/images/topics/ebr_system.png',
        alt: 'Electronic batch records',
        caption: 'Electronic batch record system interface'
      }
    ]
  },
  {
    slug: 'Data-integrity-ALCOA',
    summary: 'Accurate, complete, and traceable data.',
    content: [
      'ALCOA+ principles and data quality attributes',
      'Data lifecycle management and controls',
      'Electronic records and signature requirements',
      'Audit trails and data traceability',
      'Data integrity risk assessment and mitigation'
    ],
    figures: [
      {
        src: '/images/topics/alcoa_principles.png',
        alt: 'ALCOA+ principles',
        caption: 'Data integrity framework and quality attributes'
      },
      {
        src: '/images/topics/audit_trail.png',
        alt: 'Electronic audit trail',
        caption: 'Comprehensive audit trail for data changes'
      }
    ]
  }
];