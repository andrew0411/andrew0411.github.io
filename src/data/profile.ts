// Single source of truth for About, Publication, and CV pages (and the generated cv.pdf).
// After editing, run `npm run cv:pdf` to regenerate public/cv.pdf.

export interface Link {
  label: string;
  href: string;
}

export interface Citation {
  authors: string[];
  /** index of Jaehwan Lee in `authors` (rendered in bold) */
  me: number;
  title: string;
  venue: string;
  details?: string;
  date: string;
  year: number;
  doi?: string;
  note?: string;
}

export interface Entry {
  org: string;
  location?: string;
  role: string;
  dates: string;
  lines?: string[];
  bullets?: string[];
  projects?: { title: string; dates: string; bullets?: string[] }[];
}

export const profile = {
  lastUpdated: '2026-11-16',

  name: 'Jaehwan Lee',
  position: 'Ph.D. Student',
  department: 'Department of Industrial and Systems Engineering',
  university: 'University of Wisconsin–Madison',
  address: '1513 University Avenue, Madison, WI 53706, USA',
  email: 'lee2499@wisc.edu',
  website: 'https://andrew0411.github.io',
  links: {
    github: 'https://github.com/andrew0411',
    scholar: 'https://scholar.google.com/citations?user=vHVHgLwAAAAJ&hl=en',
    linkedin: 'https://www.linkedin.com/in/jaehwan-lee-64b937193/',
  },
  photo: '/images/profile.jpg',

  advisor: { name: 'Prof. Kaibo Liu', href: 'https://kaibo.ie.wisc.edu/' },
  lab: 'System Informatics and Data Analytics Lab',
  previousAdvisor: {
    name: 'Prof. Youngdoo Son',
    href: 'https://scholar.google.com/citations?hl=en&user=Ex618skAAAAJ',
  },

  researchInterests: {
    methodology: [
      'Time-series representation learning',
      'Anomaly detection',
      'Domain generalization',
      'Machine learning surrogate modeling',
    ],
    applications: [
      'Cybersecurity of energy systems and industrial control systems (ICS)',
      'Fusion plasma experiments',
      'Reliability and prognostics of industrial systems',
    ],
  },

  news: [
    { date: 'Nov 2026', text: 'Gave an invited talk at the 2026 INFORMS Annual Meeting in San Francisco.' },
    { date: 'Oct 2026', text: 'Started serving as a reviewer for IEEE Access.' },
    { date: 'Sep 2026', text: 'Passed the Ph.D. Qualifying Exam.' },
    { date: 'Summer 2026', text: 'Joined the U.S. DOE FIRE Collaborative project with the WHAM mirror experiment.' },
    { date: 'Sep 2025', text: "Started my Ph.D. at UW–Madison with the Chancellor's Opportunity Award." },
  ],

  education: [
    {
      org: 'University of Wisconsin–Madison',
      location: 'Madison, WI, USA',
      role: 'Ph.D. in Industrial and Systems Engineering',
      dates: 'Sep 2025 – Present',
      lines: ['Advisor: Prof. Kaibo Liu', 'Passed Ph.D. Qualifying Exam, Sep 2026'],
    },
    {
      org: 'Dongguk University',
      location: 'Seoul, Korea',
      role: 'M.E. in Industrial and Systems Engineering',
      dates: 'Sep 2021 – Aug 2023',
      lines: [
        'Advisor: Prof. Youngdoo Son · GPA 4.33/4.5',
        'Thesis: Domain Generalization via Training- and Test-Time Augmentation in the Frequency Space',
      ],
    },
    {
      org: 'Dongguk University',
      location: 'Seoul, Korea',
      role: 'B.S. in Industrial and Systems Engineering',
      dates: 'Mar 2016 – Aug 2021',
      lines: ['GPA 4.03/4.5'],
    },
  ] as Entry[],

  researchExperience: [
    {
      org: 'University of Wisconsin–Madison',
      location: 'Madison, WI, USA',
      role: 'Graduate Researcher, System Informatics and Data Analytics Lab',
      dates: 'Summer 2026 – Present',
      projects: [
        {
          title:
            'Machine Learning Surrogate for Plasma Confinement Prediction, U.S. DOE FIRE Collaborative (with the WHAM mirror experiment)',
          dates: 'Summer 2026 – Present',
          bullets: [
            'Curated ~25,000 WHAM experimental shots and re-implemented the particle-balance fit for confinement-time labels (~16× faster).',
            'Developing ML surrogate models that predict particle confinement time from experimental parameters.',
          ],
        },
      ],
    },
    {
      org: 'AhnLab, Inc.',
      location: 'Seongnam, Korea',
      role: 'AI Researcher, Division of Core Development',
      dates: 'Jun 2023 – Jul 2024',
      bullets: [
        'Developed malware detection models for Microsoft Office documents with PySpark feature engineering and an automated monthly retraining pipeline (SynapseML, Kubeflow, MLflow, KServe).',
        'Fine-tuned open-source LLMs on cybersecurity data for an internal security assistant (NLU, multiple-choice QA, function calling) and deployed the best model on a TGI inference server.',
      ],
    },
    {
      org: 'Dongguk University',
      location: 'Seoul, Korea',
      role: 'Graduate Research Assistant, Data Science Laboratory (Advisor: Prof. Youngdoo Son)',
      dates: 'Jun 2021 – Jun 2023',
      projects: [
        {
          title: 'Domain generalization via frequency-space data augmentation and test-time augmentation (M.E. thesis)',
          dates: 'Sep 2022 – Jun 2023',
        },
        {
          title:
            'Graph-based feature extraction for facility-agnostic fault diagnosis, National Research Foundation of Korea',
          dates: 'Mar 2021 – Mar 2023',
        },
        {
          title:
            'Genetic descriptor search for property prediction of 2D catalyst materials, National Research Foundation of Korea',
          dates: 'Dec 2021 – Dec 2022',
        },
        {
          title: 'Binarized neural networks for low-power in-sensor facial recognition',
          dates: 'Jun 2021 – Apr 2022',
        },
        {
          title:
            'Benign and malignant classification of gastrointestinal pathology images, Ministry of Science and ICT, Korea',
          dates: 'Sep 2021 – Feb 2022',
        },
      ],
    },
  ] as Entry[],

  publications: [
    {
      authors: ['Lee, SH.', 'Lee, S.', 'Lee, J.', 'Lee, W.', 'Son, Y.'],
      me: 2,
      title: 'Graph contrastive learning with consistency regularization',
      venue: 'Pattern Recognition Letters',
      details: '181, 43–49',
      date: 'May 2024',
      year: 2024,
      doi: '10.1016/j.patrec.2024.03.014',
    },
    {
      authors: ['Lee, JH.', 'Lee, J.', 'Shin, S.', 'Son, Y.', 'Han, YK.'],
      me: 1,
      title:
        'Machine learning for the expedited screening of hydrogen evolution catalysts for transition metal-doped transition metal dichalcogenides',
      venue: 'International Journal of Energy Research',
      details: '2023(1), 6612054',
      date: 'Sep 2023',
      year: 2023,
      doi: '10.1155/2023/6612054',
    },
    {
      authors: ['Lee, J.', 'Shin, S.', 'Lee, J.', 'Han, YK.', 'Lee, W.', 'Son, Y.'],
      me: 0,
      title: 'Genetic descriptor search algorithm for predicting hydrogen adsorption free energy of 2D material',
      venue: 'Scientific Reports',
      details: '13(1), 12729',
      date: 'Aug 2023',
      year: 2023,
      doi: '10.1038/s41598-023-39696-0',
    },
    {
      authors: ['Jeong, B.', 'Lee, J.', 'Lee, S.', 'Lee, SY.', 'Son, Y.', 'Kim, S.'],
      me: 1,
      title: 'A 240 FPS in-column binarized neural network processing in CMOS image sensors',
      venue: 'IEEE Transactions on Circuits and Systems II: Express Briefs',
      date: 'Jul 2023',
      year: 2023,
      doi: '10.1109/TCSII.2023.3295391',
    },
    {
      authors: ['Jeong, B.', 'Lee, J.', 'Choi, J.', 'Song, M.', 'Son, Y.', 'Kim, S.'],
      me: 1,
      title: 'A 0.57 mW@1 FPS in-column analog CNN processor integrated into CMOS image sensor',
      venue: 'IEEE Access',
      details: '11, 61082–61090',
      date: 'Jun 2023',
      year: 2023,
      doi: '10.1109/ACCESS.2023.3286544',
    },
  ] as Citation[],

  presentations: [
    {
      authors: ['Lee, J.', 'Zebrowitz, M.', 'Zhang, F.', 'Liu, K.'],
      me: 0,
      title: 'Cross-attentive representation learning for cyberattack detection in nuclear power plants',
      venue: '2026 INFORMS Annual Meeting',
      details: 'San Francisco, CA, USA',
      date: 'Nov 2026',
      year: 2026,
      note: 'Invited talk',
    },
    {
      authors: ['Lee, J.', 'Son, Y.'],
      me: 0,
      title: 'Domain generalization using phase consistency',
      venue: 'Korean Institute of Industrial Engineers Fall Conference',
      details: 'Incheon, Korea',
      date: 'Nov 2022',
      year: 2022,
    },
    {
      authors: ['Shin, S.', 'Lee, J.', 'Choi, C.', 'Son, Y.'],
      me: 1,
      title: 'Task balancing in multitask learning using meta-learning',
      venue: 'Korean Institute of Industrial Engineers Spring Joint Conference',
      details: 'Jeju, Korea',
      date: 'Jun 2022',
      year: 2022,
    },
    {
      authors: ['Lee, J.', 'Park, H.', 'Son, Y.'],
      me: 0,
      title: 'A genetic algorithm for 2D material property prediction',
      venue: 'Korean Institute of Industrial Engineers Fall Conference',
      details: 'Seoul, Korea',
      date: 'Nov 2021',
      year: 2021,
    },
    {
      authors: ['Lee, S.', 'Lee, SH.', 'Hong, J.', 'Lee, J.', 'Son, Y.'],
      me: 3,
      title: 'Frequency-based graph feature extraction and fault detection',
      venue: 'Korean Institute of Industrial Engineers Spring Joint Conference',
      details: 'Jeju, Korea',
      date: 'Jun 2021',
      year: 2021,
    },
  ] as Citation[],

  teaching: [
    {
      org: 'University of Wisconsin–Madison',
      location: 'Madison, WI, USA',
      role: 'Teaching Assistant, Department of Industrial and Systems Engineering',
      dates: 'Sep 2025 – Present',
      lines: [
        'ISyE 312: Data Management and Analysis for Industrial Engineers (Fall 2025, Fall 2026)',
        'ISyE 412: Fundamentals of Industrial Data Analytics (Spring 2026)',
      ],
    },
    {
      org: 'Dongguk University',
      location: 'Seoul, Korea',
      role: 'Teaching Assistant, Department of Industrial and Systems Engineering',
      dates: 'Sep 2020 – Sep 2022',
      lines: [
        'Introduction to Machine Learning, Introduction to Financial Engineering, Advanced Data Science, Introduction to Data Science, Advanced Manufacturing Processes, Adventure Design',
      ],
    },
  ] as Entry[],

  honors: [
    { title: "Chancellor's Opportunity Award, University of Wisconsin–Madison", date: 'Sep 2025' },
    { title: 'Honorable Award, National Pathology Health Datathon', date: 'Nov 2021' },
    { title: 'Honors Graduation Award, Dongguk University', date: 'Aug 2021' },
    {
      title:
        'Merit Scholarships, Dongguk University (Academic Excellence, Course Top, Future Talent, Teaching Assistant)',
      date: '2019 – 2022',
    },
  ],

  service: {
    reviewer: ['Reliability Engineering & System Safety', 'Pattern Recognition Letters', 'IEEE Access'],
    memberships: [{ title: 'Institute for Operations Research and the Management Sciences (INFORMS), Student Member', date: '2025 – Present' }],
  },

  skills: [
    { label: 'Programming', items: 'Python, R, SQL, LaTeX' },
    { label: 'ML & Systems', items: 'PyTorch, PySpark, vLLM, MLflow, Kubeflow, Kubernetes, Linux' },
  ],

  military: {
    org: 'Korean Augmentation to the U.S. Army (KATUSA), Yongsan Garrison and Camp Humphreys',
    location: 'Korea',
    role: 'Sergeant',
    dates: 'Mar 2018 – Dec 2019',
    lines: ['Senior KATUSA; managed supplies and equipment for the Joint U.S. Military Affairs Group–Korea (JUSMAG-K).'],
  } as Entry,
};
