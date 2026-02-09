// src/data/biotechnologyDetails.ts

import { TopicDetail } from './types';

export const biotechnologyDetails: TopicDetail[] = [
  {
    slug: 'DNA-RNA-protein-structure',
    summary: 'Structure-function relationships in biomolecules.',
    content: [
      'DNA structure and double helix formation',
      'RNA types and single-stranded nature',
      'Protein structure levels and folding',
      'Nucleic acid-protein interactions',
      'Molecular recognition mechanisms'
    ],
    figures: [
      {
        src: '/images/topics/dna_structure.png',
        alt: 'DNA double helix structure',
        caption: 'Watson-Crick base pairing and double helix formation'
      },
      {
        src: '/images/topics/protein_structure.png',
        alt: 'Protein structure levels',
        caption: 'Primary, secondary, tertiary, and quaternary protein structure'
      }
    ]
  },
  {
    slug: 'Transcription-translation',
    summary: 'Gene to protein mechanisms.',
    content: [
      'RNA polymerase and transcription initiation',
      'Promoter recognition and enhancer elements',
      'mRNA processing and capping',
      'Ribosome structure and translation',
      'Codon-anticodon interactions'
    ],
    figures: [
      {
        src: '/images/topics/transcription.png',
        alt: 'Transcription process',
        caption: 'RNA polymerase synthesizing mRNA from DNA template'
      },
      {
        src: '/images/topics/translation.png',
        alt: 'Translation process',
        caption: 'Ribosome translating mRNA into protein'
      }
    ]
  },
  {
    slug: 'Gene-regulation',
    summary: 'Control of gene expression.',
    content: [
      'Transcription factors and DNA binding',
      'Epigenetic modifications and chromatin',
      'Promoter and enhancer interactions',
      'RNA interference and miRNA',
      'Feedback loops and network dynamics'
    ],
    figures: [
      {
        src: '/images/topics/gene_regulation.png',
        alt: 'Gene regulation mechanisms',
        caption: 'Transcription factors binding to promoter and enhancer regions'
      },
      {
        src: '/images/topics/epigenetics.png',
        alt: 'Epigenetic modifications',
        caption: 'DNA methylation and histone modification patterns'
      }
    ]
  },
  {
    slug: 'CRISPR-genome-editing',
    summary: 'Targeted genome modification.',
    content: [
      'CRISPR-Cas9 mechanism and guide RNA',
      'Double-strand break repair pathways',
      'Base editing and prime editing',
      'Off-target effects and specificity',
      'Therapeutic applications and delivery'
    ],
    figures: [
      {
        src: '/images/topics/crispr_mechanism.png',
        alt: 'CRISPR-Cas9 mechanism',
        caption: 'Guide RNA directing Cas9 to target DNA sequence'
      },
      {
        src: '/images/topics/genome_editing.png',
        alt: 'Genome editing outcomes',
        caption: 'Different repair pathways leading to gene modifications'
      }
    ]
  },
  {
    slug: 'Enzyme-kinetics',
    summary: 'Reaction rates and mechanisms.',
    content: [
      'Michaelis-Menten kinetics and Vmax',
      'Enzyme inhibition types and mechanisms',
      'Catalytic efficiency and turnover number',
      'Allosteric regulation and cooperativity',
      'Temperature and pH effects on activity'
    ],
    figures: [
      {
        src: '/images/topics/michaelis_menten.png',
        alt: 'Michaelis-Menten kinetics',
        caption: 'Enzyme velocity versus substrate concentration curve'
      },
      {
        src: '/images/topics/enzyme_inhibition.png',
        alt: 'Enzyme inhibition types',
        caption: 'Competitive, non-competitive, and uncompetitive inhibition'
      }
    ]
  },
  {
    slug: 'Metabolic-pathways',
    summary: 'Cellular metabolism.',
    content: [
      'Glycolysis and energy production',
      'TCA cycle and oxidative phosphorylation',
      'Pentose phosphate pathway and NADPH',
      'Fatty acid metabolism and beta-oxidation',
      'Amino acid catabolism and urea cycle'
    ],
    figures: [
      {
        src: '/images/topics/glycolysis.png',
        alt: 'Glycolysis pathway',
        caption: 'Ten-step pathway converting glucose to pyruvate'
      },
      {
        src: '/images/topics/tca_cycle.png',
        alt: 'TCA cycle',
        caption: 'Citric acid cycle generating NADH and FADH2'
      }
    ]
  },
  {
    slug: 'Protein-folding',
    summary: 'Structure and thermodynamics.',
    content: [
      'Primary structure and amino acid sequence',
      'Secondary structure and hydrogen bonding',
      'Tertiary structure and hydrophobic interactions',
      'Chaperones and folding assistance',
      'Protein misfolding and aggregation diseases'
    ],
    figures: [
      {
        src: '/images/topics/protein_folding.png',
        alt: 'Protein folding process',
        caption: 'From linear polypeptide to functional 3D structure'
      },
      {
        src: '/images/topics/chaperones.png',
        alt: 'Molecular chaperones',
        caption: 'Chaperonin complex assisting protein folding'
      }
    ]
  },
  {
    slug: 'Buffers-pH-reactions',
    summary: 'Experimental optimization.',
    content: [
      'Buffer systems and Henderson-Hasselbalch',
      'pH measurement and electrode calibration',
      'Ionic strength and activity coefficients',
      'Temperature effects on buffer capacity',
      'Enzyme assay optimization strategies'
    ],
    figures: [
      {
        src: '/images/topics/buffer_systems.png',
        alt: 'Buffer capacity curves',
        caption: 'Buffer capacity versus pH for different buffer systems'
      },
      {
        src: '/images/topics/ph_optimization.png',
        alt: 'pH optimization',
        caption: 'Enzyme activity profile across pH range'
      }
    ]
  },
  {
    slug: 'Mammalian-cell-culture',
    summary: 'In vitro cell maintenance.',
    content: [
      'Cell culture media composition and supplements',
      'Aseptic technique and contamination control',
      'Cell counting and viability assessment',
      'Passaging and subculture procedures',
      'Cryopreservation and cell banking'
    ],
    figures: [
      {
        src: '/images/topics/cell_culture.png',
        alt: 'Mammalian cell culture',
        caption: 'Adherent cells growing in tissue culture flask'
      },
      {
        src: '/images/topics/aseptic_technique.png',
        alt: 'Aseptic technique',
        caption: 'Laminar flow hood for sterile cell culture work'
      }
    ]
  },
  {
    slug: 'Stem-cells',
    summary: 'Pluripotency and lineage commitment.',
    content: [
      'Embryonic stem cells and pluripotency',
      'Induced pluripotent stem cells (iPSCs)',
      'Adult stem cells and tissue-specific progenitors',
      'Differentiation protocols and lineage markers',
      'Therapeutic applications and ethical considerations'
    ],
    figures: [
      {
        src: '/images/topics/stem_cells.png',
        alt: 'Stem cell colonies',
        caption: 'Pluripotent stem cell colonies with characteristic morphology'
      },
      {
        src: '/images/topics/differentiation.png',
        alt: 'Stem cell differentiation',
        caption: 'Lineage commitment and differentiation pathways'
      }
    ]
  },
  {
    slug: 'Plant-tissue-culture',
    summary: 'Callus and regeneration.',
    content: [
      'Plant tissue culture media and hormones',
      'Callus induction and maintenance',
      'Organogenesis and somatic embryogenesis',
      'Micropropagation and cloning protocols',
      'Transgenic plant production and selection'
    ],
    figures: [
      {
        src: '/images/topics/plant_culture.png',
        alt: 'Plant tissue culture',
        caption: 'Plantlets growing on sterile culture medium'
      },
      {
        src: '/images/topics/callus_formation.png',
        alt: 'Callus formation',
        caption: 'Undifferentiated plant cells forming callus tissue'
      }
    ]
  },
  {
    slug: 'Primary-vs-cell-lines',
    summary: 'Advantages and limitations.',
    content: [
      'Primary cell isolation and characterization',
      'Immortalized cell lines and transformation',
      'Genetic stability and passage number effects',
      'Physiological relevance and reproducibility',
      'Selection criteria for experimental models'
    ],
    figures: [
      {
        src: '/images/topics/primary_cells.png',
        alt: 'Primary cell culture',
        caption: 'Primary cells isolated directly from tissue'
      },
      {
        src: '/images/topics/cell_lines.png',
        alt: 'Immortalized cell lines',
        caption: 'Continuous cell lines with unlimited proliferation'
      }
    ]
  },
  {
    slug: 'Innate-adaptive-immunity',
    summary: 'Immune system overview.',
    content: [
      'Innate immune receptors and pathogen recognition',
      'Complement system and inflammatory response',
      'Adaptive immunity and antigen-specific responses',
      'B cell development and antibody production',
      'T cell maturation and cellular immunity'
    ],
    figures: [
      {
        src: '/images/topics/immune_system.png',
        alt: 'Immune system overview',
        caption: 'Innate and adaptive immunity components'
      },
      {
        src: '/images/topics/immune_cells.png',
        alt: 'Immune cell types',
        caption: 'Different immune cell populations and functions'
      }
    ]
  },
  {
    slug: 'Antibodies-antigens',
    summary: 'Recognition and specificity.',
    content: [
      'Antibody structure and variable regions',
      'Antigen-antibody binding interactions',
      'Polyclonal versus monoclonal antibodies',
      'Antibody engineering and humanization',
      'Diagnostic and therapeutic applications'
    ],
    figures: [
      {
        src: '/images/topics/antibody_structure.png',
        alt: 'Antibody structure',
        caption: 'Y-shaped antibody with variable and constant regions'
      },
      {
        src: '/images/topics/antigen_binding.png',
        alt: 'Antigen-antibody binding',
        caption: 'Specific interaction between antibody and antigen'
      }
    ]
  },
  {
    slug: 'Immune-cell-types',
    summary: 'T cells, B cells, macrophages.',
    content: [
      'T cell subsets and cytokine production',
      'B cell maturation and plasma cell differentiation',
      'Macrophage activation and phagocytosis',
      'Natural killer cells and cytotoxic responses',
      'Dendritic cells and antigen presentation'
    ],
    figures: [
      {
        src: '/images/topics/t_cells.png',
        alt: 'T cell activation',
        caption: 'T cell receptor engagement and activation cascade'
      },
      {
        src: '/images/topics/b_cells.png',
        alt: 'B cell maturation',
        caption: 'B cell development stages in bone marrow and periphery'
      }
    ]
  },
  {
    slug: 'Immunoassays',
    summary: 'Immune-based detection methods.',
    content: [
      'ELISA principles and assay formats',
      'Flow cytometry and cell analysis',
      'Western blotting and protein detection',
      'Immunohistochemistry and tissue staining',
      'Multiplex assays and high-throughput screening'
    ],
    figures: [
      {
        src: '/images/topics/elisa.png',
        alt: 'ELISA assay',
        caption: 'Enzyme-linked immunosorbent assay format and detection'
      },
      {
        src: '/images/topics/flow_cytometry.png',
        alt: 'Flow cytometry',
        caption: 'Cell analysis and sorting using fluorescent antibodies'
      }
    ]
  },
  {
    slug: 'GLP',
    summary: 'Laboratory compliance standards.',
    content: [
      'GLP principles and regulatory requirements',
      'Documentation and record keeping standards',
      'Equipment qualification and maintenance',
      'Personnel training and competency assessment',
      'Audit trails and data integrity practices'
    ],
    figures: [
      {
        src: '/images/topics/glp_principles.png',
        alt: 'GLP principles',
        caption: 'Key components of Good Laboratory Practices'
      },
      {
        src: '/images/topics/documentation.png',
        alt: 'GLP documentation',
        caption: 'Proper documentation and record keeping systems'
      }
    ]
  },
  {
    slug: 'Experimental-design',
    summary: 'Planning reproducible experiments.',
    content: [
      'Hypothesis formulation and experimental questions',
      'Sample size calculation and statistical power',
      'Control groups and experimental variables',
      'Randomization and blinding strategies',
      'Data analysis plans and interpretation'
    ],
    figures: [
      {
        src: '/images/topics/experimental_design.png',
        alt: 'Experimental design framework',
        caption: 'Systematic approach to experimental planning'
      },
      {
        src: '/images/topics/statistical_power.png',
        alt: 'Statistical power analysis',
        caption: 'Sample size calculation and power curves'
      }
    ]
  },
  {
    slug: 'Wet-lab-troubleshooting',
    summary: 'Identifying and fixing failures.',
    content: [
      'Common PCR problems and solutions',
      'Cell culture contamination identification',
      'Protein expression and purification issues',
      'Assay optimization and validation strategies',
      'Root cause analysis and systematic troubleshooting'
    ],
    figures: [
      {
        src: '/images/topics/troubleshooting.png',
        alt: 'Troubleshooting workflow',
        caption: 'Systematic approach to problem identification'
      },
      {
        src: '/images/topics/contamination.png',
        alt: 'Cell culture contamination',
        caption: 'Types of contamination and prevention strategies'
      }
    ]
  },
  {
    slug: 'Data-integrity-biotech',
    summary: 'Accuracy, traceability, and trust.',
    content: [
      'ALCOA principles for data integrity',
      'Electronic laboratory notebooks (ELNs)',
      'Audit trails and version control',
      'Data backup and recovery systems',
      'Regulatory compliance and validation'
    ],
    figures: [
      {
        src: '/images/topics/data_integrity.png',
        alt: 'Data integrity principles',
        caption: 'ALCOA framework for data quality and integrity'
      },
      {
        src: '/images/topics/eln_system.png',
        alt: 'Electronic lab notebook',
        caption: 'Modern ELN system for laboratory data management'
      }
    ]
  }
];