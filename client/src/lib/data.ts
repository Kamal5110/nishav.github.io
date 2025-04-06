import { assetPath } from "@/config";

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  features: string[];
  detailedDescription?: string;
  benefits?: string[];
  process?: {
    title: string;
    description: string;
  }[];
  faq?: {
    question: string;
    answer: string;
  }[];
  image?: string;
}

export interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  rating: number;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  content?: string;
}

export interface Client {
  id: number;
  name: string;
  logo: string;
}

// Features
export const features: Feature[] = [
  {
    icon: "fa-shield-alt",
    title: "Financial Security",
    description: "Expert financial oversight to protect and grow your business assets."
  },
  {
    icon: "fa-chart-line",
    title: "Growth-Focused",
    description: "Strategic financial insights to accelerate your business expansion."
  },
  {
    icon: "fa-sync",
    title: "Streamlined Process",
    description: "Efficient workflows that save time and eliminate financial headaches."
  }
];

// Services
export const services: Service[] = [
  {
    id: 1,
    icon: "fa-calculator",
    title: "Tax Preparation & Planning",
    description: "Comprehensive tax services to minimize liability and ensure compliance with current tax laws.",
    features: [
      "Individual & Business Tax Returns",
      "Strategic Tax Planning",
      "Tax Compliance",
      "Tax Strategy Development",
      "Quarterly Tax Planning",
      "Deduction Optimization"
    ],
    detailedDescription: "Our comprehensive Tax Planning & Preparation services help businesses and individuals navigate complex tax regulations to minimize liabilities while ensuring full compliance. We work proactively throughout the year, not just during tax season, to identify strategic opportunities for tax efficiency and long-term savings.",
    benefits: [
      "Reduce tax liabilities through strategic planning and legitimate deductions",
      "Avoid costly penalties and interest through timely and accurate filings",
      "Receive year-round tax advisory to adapt to changing regulations",
      "Access specialized knowledge for industry-specific tax considerations",
      "Ensure proper documentation and support in case of audit",
      "Free up valuable time to focus on core business activities"
    ],
    process: [
      {
        title: "Initial Assessment",
        description: "We thoroughly review your financial situation, tax history, and business structure to identify opportunities and potential issues."
      },
      {
        title: "Strategy Development",
        description: "Based on our assessment, we create a customized tax strategy aligned with your financial goals and specific circumstances."
      },
      {
        title: "Implementation",
        description: "We execute the strategy through proper documentation, timely filings, and ongoing adjustments as needed."
      },
      {
        title: "Review & Optimization",
        description: "Regular reviews ensure your tax strategy remains optimal as regulations change and your financial situation evolves."
      }
    ],
    faq: [
      {
        question: "How often should tax planning be reviewed?",
        answer: "We recommend quarterly reviews for businesses and at least annual reviews for individuals, with additional sessions after major life events or business changes."
      },
      {
        question: "What documents do I need to provide for tax preparation?",
        answer: "Required documents typically include income statements, expense records, investment information, and prior year tax returns. We'll provide a comprehensive checklist based on your specific situation."
      },
      {
        question: "How do you handle tax law changes?",
        answer: "Our team stays continuously updated on tax legislation changes at federal, state, and local levels. We proactively inform clients of relevant changes and adjust strategies accordingly."
      },
      {
        question: "What makes your tax services different from other providers?",
        answer: "We combine technical expertise with a consultative approach, focusing on year-round tax planning rather than just annual tax preparation. Our offshore model provides exceptional value without compromising quality."
      }
    ],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80"
  },
  {
    id: 2,
    icon: "fa-chart-pie",
    title: "Bookkeeping & Accounting",
    description: "Accurate financial record-keeping and reporting to support informed business decisions.",
    features: [
      "Monthly Financial Statements",
      "General Ledger Maintenance",
      "Accounts Payable/Receivable",
      "Bank Reconciliations",
      "Financial Analysis",
      "Year-End Closing"
    ],
    detailedDescription: "Our Bookkeeping & Accounting services provide the foundation for sound financial management and decision-making. We handle day-to-day transactions, maintain accurate records, and generate timely reports that give you clear visibility into your financial position and performance. Our approach combines technical precision with business insights to deliver more than just numbers.",
    benefits: [
      "Access accurate, up-to-date financial information for better decision-making",
      "Save valuable time by outsourcing complex financial record-keeping",
      "Reduce costly accounting errors and compliance issues",
      "Gain insights through professional financial analysis and reporting",
      "Scale your accounting function efficiently as your business grows",
      "Establish a solid financial foundation for funding or expansion opportunities"
    ],
    process: [
      {
        title: "Setup & Assessment",
        description: "We evaluate your current accounting system, chart of accounts, and financial processes to identify opportunities for improvement."
      },
      {
        title: "Data Collection",
        description: "We establish secure channels for regular receipt of financial documents and transaction data."
      },
      {
        title: "Processing & Recording",
        description: "Our team accurately records transactions, reconciles accounts, and maintains your general ledger according to accounting standards."
      },
      {
        title: "Reporting & Review",
        description: "We generate customized financial reports on your preferred schedule and review key findings and metrics with you."
      }
    ],
    faq: [
      {
        question: "Which accounting software do you work with?",
        answer: "We have expertise in all major accounting platforms including QuickBooks, Xero, Sage, NetSuite, and many others. We can adapt to your existing system or recommend one that best fits your needs."
      },
      {
        question: "How frequently will I receive financial reports?",
        answer: "We typically provide monthly financial statements, but can adjust the frequency to weekly, quarterly, or custom schedules based on your business needs."
      },
      {
        question: "How do you ensure data security and confidentiality?",
        answer: "We implement bank-level encryption, secure data transmission protocols, strict access controls, and comprehensive confidentiality agreements. Our team follows rigorous security practices certified by ISO 27001 standards."
      },
      {
        question: "Can you handle industry-specific accounting needs?",
        answer: "Yes, our team includes specialists with experience in various industries including construction, healthcare, professional services, retail, manufacturing, and nonprofit organizations."
      }
    ],
    image: "https://images.unsplash.com/photo-1554224155-1696413565d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80"
  },
  {
    id: 3,
    icon: "fa-landmark",
    title: "Audit & Assurance",
    description: "Independent verification of financial statements to enhance credibility and identify opportunities.",
    features: [
      "Financial Statement Audits",
      "Internal Control Reviews",
      "Compliance Audits",
      "Due Diligence Support",
      "Risk Assessment",
      "Fraud Investigation"
    ],
    detailedDescription: "Our Audit & Assurance services provide independent verification of financial information, giving stakeholders confidence in the accuracy and reliability of your financial statements. Beyond compliance, our approach identifies business risks, control weaknesses, and opportunities for operational improvements that add tangible value to your organization.",
    benefits: [
      "Enhance credibility with investors, lenders, and other stakeholders",
      "Identify and address financial reporting risks and control weaknesses",
      "Improve financial reporting processes and internal controls",
      "Gain insights into operational efficiency and business performance",
      "Meet regulatory requirements and industry standards",
      "Detect and prevent fraud through enhanced scrutiny"
    ],
    process: [
      {
        title: "Planning & Risk Assessment",
        description: "We develop an understanding of your business, industry, and environment to identify key risk areas and determine appropriate audit procedures."
      },
      {
        title: "Control Evaluation",
        description: "We assess the design and implementation of internal controls relevant to financial reporting."
      },
      {
        title: "Testing & Evidence Gathering",
        description: "We perform substantive procedures and tests of controls to obtain sufficient appropriate evidence regarding the assertions being examined."
      },
      {
        title: "Reporting & Recommendations",
        description: "We present our findings, issue the appropriate audit report, and provide actionable recommendations for improvements."
      }
    ],
    faq: [
      {
        question: "What types of audits do you perform?",
        answer: "We offer financial statement audits, compliance audits, internal audits, operational audits, and specialized reviews tailored to specific industry requirements or organizational needs."
      },
      {
        question: "How long does an audit typically take?",
        answer: "The timeline varies based on the size and complexity of the organization, typically ranging from 2-8 weeks. We establish a clear schedule at the outset and work efficiently to minimize disruption to your operations."
      },
      {
        question: "What is the difference between an audit and a review?",
        answer: "An audit provides a high level of assurance through extensive testing and verification, whereas a review provides limited assurance based on analytical procedures and inquiries without detailed testing of transactions."
      },
      {
        question: "How do you ensure audit independence?",
        answer: "We maintain strict adherence to professional standards for independence, objectively evaluate information without bias, and implement safeguards to prevent conflicts of interest in our engagement team."
      }
    ],
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
  },
  {
    id: 4,
    icon: "fa-keyboard",
    title: "Data Entry Specialist",
    description: "Meticulous data entry services to ensure accurate financial records and database management.",
    features: [
      "Receipt and Invoice Processing",
      "Financial Data Entry",
      "Document Digitization",
      "Database Management",
      "Data Validation & Cleansing",
      "OCR & Automation Support"
    ],
    detailedDescription: "Our Data Entry Specialist services provide accurate, efficient processing of financial data and documents. We transform paper-based or unstructured digital information into organized, searchable data that integrates seamlessly with your accounting systems. Our specialists combine attention to detail with process efficiency to deliver high-quality results with quick turnaround times.",
    benefits: [
      "Increase accuracy and reduce errors in financial data",
      "Free up staff time for higher-value activities",
      "Scale data processing capacity without adding headcount",
      "Accelerate document processing and information flow",
      "Ensure consistent data formatting and organization",
      "Enable better data analysis through improved data quality"
    ],
    process: [
      {
        title: "Requirement Analysis",
        description: "We assess your data entry needs, current processes, and system requirements to establish clear specifications."
      },
      {
        title: "Process Design",
        description: "We develop efficient workflows, templates, and quality control measures tailored to your specific data requirements."
      },
      {
        title: "Data Processing",
        description: "Our specialists accurately enter, validate, and categorize data according to established protocols."
      },
      {
        title: "Quality Assurance",
        description: "We perform multiple levels of verification to ensure data accuracy, completeness, and consistency."
      }
    ],
    faq: [
      {
        question: "How do you ensure data security during the entry process?",
        answer: "We implement end-to-end encryption, secure access controls, and follow strict confidentiality protocols. Our facilities and processes comply with ISO 27001 security standards to protect your sensitive information."
      },
      {
        question: "What is your data accuracy rate?",
        answer: "We maintain a 99.95% accuracy rate through our multi-tiered quality control system, which includes automated validation and human verification stages."
      },
      {
        question: "Can you handle high volumes of data entry on short notice?",
        answer: "Yes, our scalable team structure allows us to quickly adjust capacity to handle peak volumes or urgent projects without compromising quality."
      },
      {
        question: "How do you handle different file formats and systems?",
        answer: "Our specialists are proficient in working with diverse document formats (PDF, scanned images, etc.) and can input data into virtually any accounting system or database platform you use."
      }
    ],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 5,
    icon: "fa-chart-line",
    title: "Virtual CFO & Fractional CFO Services",
    description: "Executive-level financial guidance without the full-time cost of an in-house CFO.",
    features: [
      "Financial Strategy Development",
      "Cash Flow Management",
      "Financial Performance Analysis",
      "Budgeting & Forecasting",
      "Financial Systems Optimization",
      "Investor/Board Reporting"
    ],
    detailedDescription: "Our Virtual CFO & Fractional CFO Services provide executive-level financial leadership on a flexible, part-time basis. We deliver strategic guidance, financial planning, and performance management expertise that would normally require a high-salaried full-time CFO, but at a fraction of the cost. This model is ideal for growing businesses that need sophisticated financial management but aren't ready for a full-time executive hire.",
    benefits: [
      "Access strategic financial expertise at a fraction of full-time CFO cost",
      "Improve critical financial metrics through expert guidance",
      "Make data-driven decisions with enhanced financial analytics",
      "Optimize cash flow and working capital management",
      "Create robust financial systems and controls as you scale",
      "Gain credibility with investors and lenders through professional financial leadership"
    ],
    process: [
      {
        title: "Strategic Assessment",
        description: "We evaluate your current financial position, goals, and challenges to identify key focus areas."
      },
      {
        title: "Roadmap Development",
        description: "Based on the assessment, we create a strategic financial roadmap with specific initiatives, metrics, and milestones."
      },
      {
        title: "Implementation",
        description: "We work with your team to execute the roadmap, providing hands-on guidance and oversight of financial operations."
      },
      {
        title: "Ongoing Advisory",
        description: "We provide regular strategic reviews, performance analysis, and financial guidance to support continuing growth."
      }
    ],
    faq: [
      {
        question: "How much time will a Virtual CFO dedicate to my business?",
        answer: "Our engagement models typically range from 10-40 hours per month, depending on your business size, complexity, and specific needs. We can adjust the time commitment as your requirements evolve."
      },
      {
        question: "Will my Virtual CFO be available for board meetings or investor presentations?",
        answer: "Yes, our Virtual CFOs regularly participate in board meetings, investor presentations, and funding discussions. These strategic activities are a core part of our service offering."
      },
      {
        question: "What qualifications do your Virtual CFOs have?",
        answer: "Our Virtual CFOs are experienced financial executives with at least 15 years of experience, typically holding CPA credentials and often MBA degrees. Many have served as CFOs in various industries and company stages."
      },
      {
        question: "How does the Virtual CFO integrate with our existing team?",
        answer: "Your Virtual CFO will establish regular communication cadences with key team members, provide clear direction to your accounting staff, and collaborate closely with your leadership team while respecting your company culture."
      }
    ],
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 6,
    icon: "fa-file-invoice-dollar",
    title: "Sr. Accountant Services",
    description: "Advanced accounting expertise for complex financial needs and high-level oversight.",
    features: [
      "Financial Statement Preparation",
      "Complex Transaction Processing",
      "Accounting System Management",
      "Technical Accounting Support",
      "Month-End Close Process",
      "Financial Analysis & Reporting"
    ],
    detailedDescription: "Our Sr. Accountant Services provide high-level accounting expertise to handle complex financial requirements and deliver sophisticated financial reporting and analysis. Our senior accountants manage critical accounting functions, ensure compliance with accounting standards, and provide insights that support strategic decision-making. This service is ideal for businesses with complex accounting needs that require specialized knowledge.",
    benefits: [
      "Ensure accuracy in complex financial reporting and compliance",
      "Resolve technical accounting issues with expert guidance",
      "Strengthen internal controls and accounting processes",
      "Improve financial analysis and management reporting",
      "Streamline month-end close and reporting cycles",
      "Access specialized expertise without hiring expensive full-time staff"
    ],
    process: [
      {
        title: "Needs Assessment",
        description: "We evaluate your accounting requirements, current processes, and pain points to define the scope of senior accountant support needed."
      },
      {
        title: "Process Enhancement",
        description: "We develop and implement improved accounting procedures, internal controls, and reporting frameworks."
      },
      {
        title: "Financial Management",
        description: "Our senior accountants handle complex transactions, prepare financial statements, and manage accounting functions according to best practices."
      },
      {
        title: "Analysis & Advisory",
        description: "We provide financial analysis, identify trends, and offer insights to improve financial performance and decision-making."
      }
    ],
    faq: [
      {
        question: "How does a senior accountant differ from a regular accountant?",
        answer: "Senior accountants have advanced training, deeper technical knowledge, and substantial experience handling complex accounting matters, including advanced financial statement preparation, technical research, and analytical skills."
      },
      {
        question: "Can your senior accountants handle industry-specific accounting requirements?",
        answer: "Yes, our team includes senior accountants with specialized experience in various industries including construction, manufacturing, software/technology, professional services, and healthcare."
      },
      {
        question: "Do you provide guidance on accounting standards like GAAP or IFRS?",
        answer: "Absolutely. Our senior accountants are well-versed in both GAAP and IFRS frameworks and can provide guidance on proper application, implementation of new standards, and compliance with complex accounting requirements."
      },
      {
        question: "Can senior accountants help with accounting software implementation or optimization?",
        answer: "Yes, our senior accountants have extensive experience implementing, configuring, and optimizing major accounting systems. They can help select the right platform, design the chart of accounts, establish workflows, and train your team."
      }
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80"
  },
  {
    id: 7,
    icon: "fa-money-check-alt",
    title: "Accounts Receivable",
    description: "Comprehensive management of accounts receivable to improve cash flow and reduce outstanding balances.",
    features: [
      "Invoice Generation",
      "Payment Collection",
      "Aging Reports & Analysis",
      "Customer Statement Preparation",
      "Credit Management",
      "Collections Process Management"
    ],
    detailedDescription: "Our Accounts Receivable services provide end-to-end management of your customer invoicing and collection processes. We implement systematic approaches to invoice generation, payment tracking, and follow-up that accelerate cash flow and reduce outstanding balances. Our professional AR specialists maintain positive customer relationships while ensuring timely payments to improve your working capital position.",
    benefits: [
      "Accelerate cash flow through faster invoice processing and collections",
      "Reduce DSO (Days Sales Outstanding) and improve working capital",
      "Minimize bad debt write-offs through proactive monitoring",
      "Free up internal resources from time-consuming AR tasks",
      "Gain better visibility into customer payment patterns",
      "Maintain consistent, professional customer communications"
    ],
    process: [
      {
        title: "Process Review",
        description: "We analyze your current invoicing and collections processes to identify opportunities for improvement."
      },
      {
        title: "System Setup",
        description: "We establish or optimize your AR infrastructure, including invoice templates, aging categories, and collection protocols."
      },
      {
        title: "Daily Management",
        description: "Our team handles invoice generation, payment application, account reconciliation, and customer inquiries."
      },
      {
        title: "Monitoring & Reporting",
        description: "We provide regular aging reports, collection statistics, and cashflow forecasts based on AR data."
      }
    ],
    faq: [
      {
        question: "How quickly can you implement AR services for our business?",
        answer: "Typical implementation takes 2-3 weeks, including process assessment, system setup, and transition. We can expedite in urgent situations to ensure minimal disruption to your cash flow."
      },
      {
        question: "How do you handle difficult collection situations?",
        answer: "We employ a structured, professional approach that escalates appropriately, from gentle reminders to more formal notices. We prioritize maintaining positive customer relationships while pursuing payment, and we can customize the collection approach based on your preferences."
      },
      {
        question: "Can you integrate with our existing accounting or ERP system?",
        answer: "Yes, we work with all major accounting and ERP platforms including QuickBooks, Xero, NetSuite, Sage, and many others. We can either access your system directly or establish efficient data transfer processes."
      },
      {
        question: "How do you ensure accurate application of customer payments?",
        answer: "We follow detailed payment application protocols, match payments to specific invoices, resolve discrepancies promptly, and perform regular reconciliations to ensure 100% accuracy in customer accounts."
      }
    ],
    image: "https://images.unsplash.com/photo-1561414927-6d86591d0c4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80"
  },
  {
    id: 8,
    icon: "fa-user-tie",
    title: "Individual Tax Return",
    description: "Expert preparation of individual tax returns to ensure compliance and maximize deductions.",
    features: [
      "Personal Income Tax Preparation",
      "Tax Planning for Individuals",
      "Tax Credit Identification",
      "Deduction Optimization",
      "Electronic Filing",
      "Audit Support"
    ],
    detailedDescription: "Our Individual Tax Return services provide comprehensive preparation and filing of personal tax returns with a focus on accuracy, compliance, and tax-saving opportunities. Our experienced tax professionals stay current with ever-changing tax laws to identify all applicable deductions and credits while ensuring your returns meet all regulatory requirements. We handle simple to complex individual tax situations with the same attention to detail and commitment to minimizing your tax burden.",
    benefits: [
      "Ensure accurate, compliant tax filings that minimize audit risk",
      "Maximize legitimate deductions and credits to reduce tax liability",
      "Save time and eliminate the stress of tax preparation",
      "Receive expert guidance on tax planning opportunities",
      "Get prompt responses to tax notices or questions",
      "Access professional representation in case of audit"
    ],
    process: [
      {
        title: "Information Gathering",
        description: "We provide a comprehensive tax organizer and conduct a thorough interview to ensure we capture all relevant information."
      },
      {
        title: "Tax Analysis",
        description: "Our tax professionals analyze your information to identify applicable deductions, credits, and tax planning opportunities."
      },
      {
        title: "Preparation & Review",
        description: "We prepare your returns with careful attention to detail, followed by a rigorous multi-level review process."
      },
      {
        title: "Filing & Planning",
        description: "After your approval, we file your returns electronically and provide recommendations for future tax planning."
      }
    ],
    faq: [
      {
        question: "What information do I need to provide for my tax return?",
        answer: "You'll need to provide income documents (W-2s, 1099s), expense records, investment statements, prior year tax returns, and personal information including dependents. We'll provide a detailed checklist tailored to your specific situation."
      },
      {
        question: "How long does it take to prepare an individual tax return?",
        answer: "Standard returns are typically completed within 5-7 business days after we receive all necessary information. Complex returns may take 7-10 business days. We also offer expedited service for urgent situations."
      },
      {
        question: "Do you provide tax planning throughout the year?",
        answer: "Yes, we offer year-round tax planning services to help you make informed financial decisions that optimize your tax position. This proactive approach often identifies significant tax-saving opportunities beyond the annual tax filing."
      },
      {
        question: "What if I receive a notice from the IRS or state tax authority?",
        answer: "Simply forward the notice to us, and we'll review it, explain it in plain language, and prepare an appropriate response. If necessary, we can represent you before the tax authorities to resolve the issue efficiently."
      }
    ],
    image: "https://images.unsplash.com/photo-1586486855514-8c633cc6fd29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1072&q=80"
  },
  {
    id: 9,
    icon: "fa-file-invoice-dollar",
    title: "Payroll Services",
    description: "Comprehensive payroll management to ensure accuracy, compliance, and employee satisfaction.",
    features: [
      "Payroll Processing",
      "Tax Filing & Payments",
      "Employee Benefits Administration",
      "Time & Attendance Tracking",
      "Payroll Tax Compliance",
      "Reporting & Analytics"
    ],
    detailedDescription: "Our Payroll Services provide end-to-end management of your payroll process, from calculating wages and deductions to filing tax forms and generating reports. We ensure accurate, timely processing while maintaining compliance with all applicable regulations. Our comprehensive approach handles the complexities of payroll taxation, benefits administration, and reporting so you can focus on your core business activities.",
    benefits: [
      "Ensure accurate and timely payment to employees",
      "Maintain compliance with federal, state, and local tax regulations",
      "Reduce risk of penalties through proper tax filing and payments",
      "Free up internal resources from complex payroll administration",
      "Access detailed payroll reports for financial planning",
      "Simplify benefits administration and deductions tracking"
    ],
    process: [
      {
        title: "Setup & Configuration",
        description: "We establish your payroll system, including employee data, tax settings, deductions, and reporting requirements."
      },
      {
        title: "Data Collection",
        description: "We implement efficient processes for gathering hours, commissions, and other variable pay information each pay period."
      },
      {
        title: "Processing & Verification",
        description: "Our specialists calculate wages, taxes, and deductions with rigorous verification to ensure accuracy."
      },
      {
        title: "Distribution & Compliance",
        description: "We manage direct deposits or check generation, provide pay stubs, and handle all required tax filings and payments."
      }
    ],
    faq: [
      {
        question: "How do you ensure payroll tax compliance?",
        answer: "We maintain current tax tables for all jurisdictions, perform automatic calculations based on the latest rates, file all required tax forms punctually, and stay updated on changing regulations to ensure complete compliance."
      },
      {
        question: "Can you handle complex payroll situations?",
        answer: "Yes, we manage multi-state payrolls, various pay types (hourly, salary, commission), complex benefits deductions, garnishments, and special tax situations with expertise and attention to detail."
      },
      {
        question: "What payroll reports will I receive?",
        answer: "Standard reports include payroll registers, employee earnings records, tax liability summaries, and department/location analyses. We can also create custom reports to meet your specific management or planning needs."
      },
      {
        question: "How do you ensure data security in payroll processing?",
        answer: "We implement bank-level encryption, secure data transmission protocols, strict access controls, and comprehensive confidentiality agreements. Our payroll systems and processes comply with ISO 27001 security standards."
      }
    ],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  }
];

// Testimonials
export const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Nishav Business Solutions transformed our financial operations. Their expert team helped us optimize our tax strategy, resulting in significant savings. Highly recommended!",
    author: "Nidhi Singh",
    role: "HR Director, Parceldeck Solutions",
    rating: 5
  },
  {
    id: 2,
    content: "As a small business owner, I needed comprehensive accounting support without the overhead of an in-house team. Nishav Business Solutions delivered exactly what I needed.",
    author: "Priya Sharma",
    role: "CTO, Techsolutions, India",
    rating: 5
  },
  {
    id: 3,
    content: "The business advisory services from Nishav Business Solutions helped us navigate a complex expansion. Their strategic guidance was invaluable to our success.",
    author: "Arjun Singh",
    role: "Founder & CEO, Maintedge Techlabs",
    rating: 5
  }
];

// Blog Posts
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "7 Tax Planning Strategies for Small Businesses in 2023",
    excerpt: "Discover effective tax planning strategies that can help your small business minimize tax liability and maximize profitability.",
    date: "May 15, 2023",
    category: "Tax Planning",
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    content: `
      <h2>Introduction to Tax Planning</h2>
      <p>Tax planning is a critical aspect of financial management for small businesses. Effective tax planning strategies can significantly reduce your tax liability and improve your bottom line.</p>
      
      <h2>1. Maximize Business Deductions</h2>
      <p>One of the most effective ways to reduce your tax burden is to take advantage of all available business deductions. These can include expenses related to office space, equipment, supplies, travel, and more.</p>
      
      <h2>2. Choose the Right Business Structure</h2>
      <p>The legal structure of your business has significant tax implications. Each structure — sole proprietorship, partnership, LLC, S corporation, or C corporation — has its own tax rules and advantages.</p>
      
      <h2>3. Implement Retirement Plans</h2>
      <p>Setting up a retirement plan for yourself and your employees can provide tax advantages while also helping you save for the future.</p>
      
      <h2>4. Time Your Income and Expenses</h2>
      <p>Timing when you receive income and when you incur expenses can affect your tax liability for a specific year.</p>
      
      <h2>5. Hire Family Members</h2>
      <p>Hiring family members can be a legitimate way to reduce your overall family tax burden while keeping the money in the family.</p>
      
      <h2>6. Use Tax Credits</h2>
      <p>Tax credits directly reduce your tax bill, making them more valuable than deductions. Look for credits that apply to your business, such as the Small Business Health Care Tax Credit or the Work Opportunity Tax Credit.</p>
      
      <h2>7. Plan for Estimated Taxes</h2>
      <p>If you're self-employed or a business owner, you may need to make quarterly estimated tax payments to avoid penalties.</p>
      
      <h2>Conclusion</h2>
      <p>By implementing these seven tax planning strategies, small business owners can minimize their tax liability while remaining compliant with tax laws. Remember, effective tax planning is a year-round activity, not just something to consider at tax time.</p>
    `
  },
  {
    id: 2,
    title: "Understanding Financial Statements: A Guide for Business Owners",
    excerpt: "Learn how to interpret your financial statements and use this information to make informed business decisions.",
    date: "April 28, 2023",
    category: "Financial Analysis",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    content: `
      <h2>Introduction to Financial Statements</h2>
      <p>Financial statements are essential tools for understanding the financial health of your business. These documents provide valuable insights into your company's performance, profitability, and overall financial position.</p>
      
      <h2>The Balance Sheet</h2>
      <p>The balance sheet provides a snapshot of your company's financial position at a specific point in time. It lists your assets (what you own), liabilities (what you owe), and equity (the difference between assets and liabilities).</p>
      
      <h2>The Income Statement</h2>
      <p>Also known as the profit and loss statement, the income statement shows your company's revenues, expenses, and profits over a specific period. It helps you understand whether your business is profitable and how those profits are generated.</p>
      
      <h2>The Cash Flow Statement</h2>
      <p>The cash flow statement tracks the movement of cash in and out of your business. It helps you understand where your cash is coming from and where it's going, which is crucial for maintaining liquidity.</p>
      
      <h2>Key Financial Ratios</h2>
      <p>Financial ratios derived from your statements can provide deeper insights into your business's performance. Common ratios include liquidity ratios, profitability ratios, efficiency ratios, and leverage ratios.</p>
      
      <h2>Using Financial Statements for Decision-Making</h2>
      <p>Understanding how to interpret your financial statements allows you to make informed decisions about pricing, cost control, investments, and growth strategies.</p>
      
      <h2>Conclusion</h2>
      <p>Financial statements are powerful tools for business owners. By understanding and regularly reviewing these documents, you can gain valuable insights into your business's financial health and make more informed decisions to drive success.</p>
    `
  },
  {
    id: 3,
    title: "5 Effective Cash Flow Management Techniques for Growing Businesses",
    excerpt: "Explore practical strategies to optimize your business cash flow and ensure financial stability during growth periods.",
    date: "March 12, 2023",
    category: "Cash Flow",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    content: `
      <h2>The Importance of Cash Flow Management</h2>
      <p>Cash flow management is critical for business success, especially during periods of growth. Without adequate cash flow, even profitable businesses can fail.</p>
      
      <h2>1. Create Detailed Cash Flow Projections</h2>
      <p>Develop comprehensive cash flow forecasts to anticipate potential shortfalls and plan accordingly. Regularly update these projections based on actual performance.</p>
      
      <h2>2. Optimize Your Billing and Collection Processes</h2>
      <p>Streamline your invoicing process and establish clear payment terms. Consider offering incentives for early payment and implement follow-up procedures for late payments.</p>
      
      <h2>3. Manage Inventory Efficiently</h2>
      <p>Excess inventory ties up cash that could be used elsewhere in your business. Implement just-in-time inventory practices and regularly review your inventory levels to minimize holding costs.</p>
      
      <h2>4. Negotiate Favorable Payment Terms with Suppliers</h2>
      <p>Work with your suppliers to establish payment terms that align with your cash flow. This might include extended payment periods or installment plans for large purchases.</p>
      
      <h2>5. Establish a Cash Reserve</h2>
      <p>Build a cash buffer to help your business weather unexpected expenses or temporary downturns. Aim for a reserve that can cover at least three to six months of operating expenses.</p>
      
      <h2>Conclusion</h2>
      <p>Effective cash flow management is essential for sustainable business growth. By implementing these strategies, you can ensure your business has the cash it needs to seize opportunities and navigate challenges.</p>
    `
  },
  {
    id: 4,
    title: "Cost-Cutting Benefits of Offshore Accounting Services",
    excerpt: "Learn how offshore accounting can significantly reduce operational costs while maintaining high-quality financial management for your firm.",
    date: "February 25, 2023",
    category: "Offshore Accounting",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    content: `
      <h2>The Financial Case for Offshore Accounting</h2>
      <p>In today's competitive business environment, CPA firms are constantly looking for ways to optimize operations and reduce costs without sacrificing quality. Offshore accounting services present a compelling solution that can deliver substantial cost savings while maintaining or even improving service quality.</p>
      
      <h2>Significant Salary Differentials</h2>
      <p>One of the most immediate and substantial benefits of offshore accounting is the significant difference in salary scales. Accounting professionals in offshore locations can cost 40-60% less than their U.S. counterparts with comparable qualifications and experience. This salary differential translates directly to your bottom line.</p>
      
      <h2>Elimination of Overhead Expenses</h2>
      <p>When you partner with an offshore accounting service provider, you eliminate the considerable overhead costs associated with maintaining in-house staff. These savings include office space, equipment, software licenses, utilities, insurance, and other employee-related expenses that can significantly impact your operational budget.</p>
      
      <h2>Reduced Training and Recruitment Costs</h2>
      <p>The accounting industry faces high turnover rates, and the costs of recruiting, hiring, and training new staff can be substantial. Offshore service providers handle these aspects, providing pre-trained professionals who are ready to contribute immediately, eliminating these recurring expenses for your firm.</p>
      
      <h2>Scalability Without Proportional Cost Increases</h2>
      <p>Offshore accounting services offer remarkable scalability. During tax season or periods of increased workload, you can scale up resources without the proportional increase in costs that would come with hiring temporary or permanent staff locally. Conversely, you can scale down during slower periods without the difficulties of reducing staff.</p>
      
      <h2>Technology and Infrastructure Savings</h2>
      <p>Modern accounting requires substantial investments in software, security systems, and IT infrastructure. Offshore service providers make these investments on your behalf, spreading the costs across multiple clients and providing you with access to cutting-edge technology without the full financial burden.</p>
      
      <h2>Conclusion: A Strategic Financial Decision</h2>
      <p>The decision to implement offshore accounting services represents not just a cost-cutting measure but a strategic financial move that can transform your firm's profitability and competitive position. By reducing operational costs by 40-60% while maintaining or improving service quality, offshore accounting enables CPA firms to invest more in client relationships, business development, and value-added services that drive growth.</p>
    `
  },
  {
    id: 5,
    title: "Industry-Specific Offshore Accounting Services: Tailored Solutions for Specialized Needs",
    excerpt: "Discover how offshore accounting services are evolving to provide specialized expertise for different industries with unique financial requirements.",
    date: "January 18, 2023",
    category: "Offshore Accounting",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    content: `
      <h2>Beyond General Accounting: The Rise of Specialization</h2>
      <p>The offshore accounting industry has evolved significantly from its origins as a provider of general bookkeeping services. Today, leading offshore accounting partners offer deep industry-specific expertise that addresses the unique financial challenges and regulatory requirements of various sectors.</p>
      
      <h2>Healthcare Accounting Specialization</h2>
      <p>The healthcare industry faces unique accounting challenges, including complex insurance billing, stringent regulatory compliance requirements, and specialized revenue cycle management. Offshore accounting teams with healthcare specialization bring expertise in medical billing, HIPAA compliance, and healthcare-specific financial reporting that enables practices and facilities to optimize their financial operations while remaining compliant.</p>
      
      <h2>Construction Industry Expertise</h2>
      <p>Construction accounting requires specialized knowledge of project-based accounting, progress billing, retention management, and job costing. Offshore accounting professionals specializing in this sector understand the complexities of construction contracts, change orders, and the critical importance of accurate job cost tracking to ensure profitability on each project.</p>
      
      <h2>Nonprofit Organization Accounting</h2>
      <p>Nonprofit organizations have distinct accounting needs, including fund accounting, grant management, and specialized reporting for donors and regulatory bodies. Offshore accounting teams with nonprofit expertise ensure accurate tracking of restricted and unrestricted funds, compliance with grant requirements, and proper preparation of Forms 990 and other essential documentation.</p>
      
      <h2>Real Estate and Property Management</h2>
      <p>The real estate sector requires specialized accounting for property acquisitions, dispositions, depreciation, tenant management, and CAM reconciliations. Offshore accounting specialists in this field bring expertise in complex lease accounting, property tax management, and financial reporting that highlights key performance indicators specific to property portfolios.</p>
      
      <h2>Manufacturing and Inventory Management</h2>
      <p>Manufacturing companies face accounting challenges related to inventory valuation, cost accounting, and production efficiency measurement. Specialized offshore accounting teams understand the nuances of manufacturing cost flows, absorption costing, and inventory control systems that are essential for accurate financial reporting and strategic decision-making in this sector.</p>
      
      <h2>The Benefits of Industry Specialization</h2>
      <p>When offshore accounting teams bring industry-specific expertise to their work, clients benefit from more strategic insights, improved compliance, and accounting processes that align perfectly with their business operations. This specialized knowledge transforms offshore accounting from a cost-saving measure to a strategic advantage that drives better business decisions.</p>
    `
  },
  {
    id: 6,
    title: "The Future of Offshore Accounting: Trends and Innovations Reshaping the Industry",
    excerpt: "Explore emerging technologies and trends that are transforming offshore accounting services and creating new opportunities for CPA firms.",
    date: "December 5, 2022",
    category: "Offshore Accounting",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    content: `
      <h2>A Transformation in Progress</h2>
      <p>The offshore accounting industry is experiencing a profound transformation driven by technological innovation, changing client expectations, and evolving regulatory frameworks. Understanding these trends is essential for CPA firms seeking to leverage offshore resources effectively in the coming years.</p>
      
      <h2>AI and Machine Learning Integration</h2>
      <p>Artificial intelligence and machine learning are revolutionizing routine accounting tasks through intelligent automation. Leading offshore providers are implementing AI-powered systems for data extraction, categorization, anomaly detection, and even preliminary analysis. This technology shift enables offshore teams to focus on higher-value activities like analysis and strategic advisory, rather than data processing.</p>
      
      <h2>Blockchain for Enhanced Security and Transparency</h2>
      <p>Blockchain technology is addressing one of the historical concerns about offshore accounting: security and transparency. By creating immutable records of transactions and implementing smart contracts for accounting processes, blockchain is enabling more secure, transparent collaboration between offshore teams and their clients, building greater trust in the offshore model.</p>
      
      <h2>Advanced Analytics and Business Intelligence</h2>
      <p>The future of offshore accounting extends well beyond compliance and record-keeping. Sophisticated analytics capabilities are enabling offshore teams to provide clients with valuable business intelligence, predictive insights, and data-driven recommendations that support strategic decision-making and proactive financial management.</p>
      
      <h2>Regulatory Technology (RegTech) Solutions</h2>
      <p>As regulatory requirements grow increasingly complex, offshore accounting providers are implementing RegTech solutions that automate compliance processes, monitor regulatory changes, and ensure adherence to evolving standards across multiple jurisdictions. This technology-driven approach to compliance reduces risk while improving efficiency.</p>
      
      <h2>Collaborative Platforms and Real-Time Communication</h2>
      <p>The perception of offshore accounting as distant and disconnected is disappearing as advanced collaborative platforms enable seamless, real-time interaction between offshore teams and client firms. These technologies are creating truly integrated global teams that work together regardless of physical location.</p>
      
      <h2>The Human Element: Evolution of Skills</h2>
      <p>As technology automates routine tasks, the skill profile of offshore accounting professionals is evolving. The offshore accountant of the future combines technical accounting knowledge with technological proficiency, analytical capabilities, and strong communication skills. This evolution is elevating the value that offshore teams can deliver to client firms.</p>
      
      <h2>Sustainable and Responsible Offshore Practices</h2>
      <p>Environmental, Social, and Governance (ESG) considerations are becoming increasingly important in the selection of offshore partners. Progressive offshore accounting providers are implementing sustainable practices, ethical employment policies, and responsible business models that align with clients' values and corporate social responsibility goals.</p>
      
      <h2>Conclusion: Strategic Positioning for the Future</h2>
      <p>For CPA firms, the evolving landscape of offshore accounting presents an opportunity to develop a more strategic approach to global resource utilization. By partnering with forward-thinking offshore providers who are embracing these trends, firms can access not just cost savings, but innovative capabilities that transform their service offerings and client relationships.</p>
    `
  },
  {
    id: 7,
    title: "Building a Successful Offshore Accounting Team: Best Practices for Seamless Integration",
    excerpt: "Learn proven strategies for selecting, onboarding, and managing offshore accounting professionals to create a cohesive global team.",
    date: "November 10, 2022",
    category: "Offshore Accounting",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    content: `
      <h2>The Foundation of Successful Offshore Accounting</h2>
      <p>Building an effective offshore accounting team requires more than simply hiring remote professionals. The most successful implementations treat offshore staff as integral team members and create systems that enable seamless collaboration across geographical boundaries.</p>
      
      <h2>Strategic Talent Selection</h2>
      <p>The foundation of a successful offshore accounting team begins with selecting the right talent. Beyond technical accounting skills, look for professionals with excellent English communication abilities, cultural adaptability, problem-solving capabilities, and a proactive mindset. These soft skills are often as important as accounting expertise in determining success.</p>
      
      <h2>Comprehensive Onboarding Programs</h2>
      <p>Effective onboarding is critical to offshore team success. Develop a structured program that familiarizes offshore team members with your firm's systems, processes, client base, and cultural norms. Include both technical training and cultural integration activities that help offshore staff understand your firm's values and expectations.</p>
      
      <h2>Clear Process Documentation</h2>
      <p>Detailed process documentation is essential for offshore success. Create comprehensive, step-by-step guides for all accounting processes, complete with screenshots, video tutorials, and examples of both standard and exception cases. These resources ensure consistency and quality while reducing the learning curve for new team members.</p>
      
      <h2>Technology Infrastructure for Collaboration</h2>
      <p>Invest in robust collaboration technology that minimizes the impact of distance. This includes secure document sharing platforms, project management tools, video conferencing systems, and instant messaging applications that enable real-time communication. The right technology stack creates a virtual work environment where location becomes largely irrelevant.</p>
      
      <h2>Establishing Communication Protocols</h2>
      <p>Develop clear communication protocols that address the challenges of different time zones and cultural backgrounds. Establish expectations for response times, communication channels for different types of information, regular meeting schedules, and escalation procedures for urgent issues. Well-defined protocols prevent misunderstandings and ensure important matters receive timely attention.</p>
      
      <h2>Building Cultural Awareness</h2>
      <p>Invest time in developing mutual cultural understanding between onshore and offshore team members. This includes awareness of cultural holidays, communication styles, and work practices. Cultural intelligence on both sides of the relationship strengthens teamwork and prevents misunderstandings that can impact productivity.</p>
      
      <h2>Performance Measurement and Feedback</h2>
      <p>Implement clear performance metrics and regular feedback mechanisms for offshore team members. Establish KPIs that align with your firm's quality standards and client expectations, and provide consistent, constructive feedback on performance. Regular performance discussions keep offshore staff aligned with your objectives and provide opportunities for professional development.</p>
      
      <h2>Recognition and Integration</h2>
      <p>Make a deliberate effort to recognize and celebrate the contributions of offshore team members. Include them in company meetings, share firm-wide announcements and achievements, and acknowledge their successes. This inclusivity fosters a sense of belonging and commitment that enhances retention and performance.</p>
      
      <h2>Continuous Improvement Mindset</h2>
      <p>Establish mechanisms for continuous improvement of your offshore operations. Regularly solicit feedback from both offshore team members and onshore staff about challenges and opportunities for enhancement. This collaborative approach to refinement ensures your offshore model evolves and improves over time.</p>
      
      <h2>Conclusion: A Strategic Asset</h2>
      <p>When implemented with careful planning and ongoing attention, offshore accounting teams become more than a cost-saving measure—they become a strategic asset that enhances your firm's capabilities and competitive position. By following these best practices, CPA firms can build offshore teams that deliver exceptional value and enable sustainable growth.</p>
    `
  }
];

// Clients
export const clients: Client[] = [
  {
    id: 1,
    name: "Parceldeck",
    logo: assetPath("images/parceldeck.jpg")
  },
  {
    id: 2,
    name: "Shreehari Education",
    logo: assetPath("images/shreehari_education.jpg")
  },
  {
    id: 3,
    name: "Radiance Technologies",
    logo: assetPath("images/radiance_technologies.jpg")
  },
  {
    id: 4,
    name: "Maintedge Techlabs",
    logo: assetPath("images/maintedge_techlabs.jpg")
  },
  {
    id: 5,
    name: "AavGO",
    logo: assetPath("images/aavgo_11.png")
  },
  {
    id: 6,
    name: "TeroTAM Technolabs",
    logo: assetPath("images/terotam_technolabs.jpg")
  },
  {
    id: 7,
    name: "Astics Techlabs",
    logo: assetPath("images/astics_techlabs.jpg")
  },
  {
    id: 8,
    name: "Abilities India Pistons & Rings",
    logo: assetPath("images/abilities_india_pistons_rings.png")
  },
  {
    id: 9,
    name: "Joyam",
    logo: assetPath("images/joyam.png")
  },
  {
    id: 10,
    name: "Oizom",
    logo: assetPath("images/oizom.jpg")
  },
  {
    id: 11,
    name: "Fitcast",
    logo: assetPath("images/fitcast.jpg")
  },
  {
    id: 12,
    name: "Comptech Equipments",
    logo: assetPath("images/comptech_equipments.jpg")
  },
  {
    id: 13,
    name: "QLTech",
    logo: assetPath("images/qltech.jpg")
  },
  {
    id: 14,
    name: "System Protection",
    logo: assetPath("images/system_protection.png")
  },
  {
    id: 15,
    name: "Webosphere",
    logo: assetPath("images/webosphere.jpg")
  },
  {
    id: 16,
    name: "TDC Contracting",
    logo: assetPath("images/tdc_contracting.jpg")
  },
  {
    id: 17,
    name: "The Leela Corpo",
    logo: assetPath("images/the_leela_corpo.jpg")
  },
  {
    id: 18,
    name: "Kalintis",
    logo: assetPath("images/kalintis_logo.jpg")
  }
];

// Accounting Software Expertise
export interface Software {
  name: string;
  icon: string;
  description: string;
}

export const accountingSoftware: Software[] = [
  {
    name: "Zoho Books",
    icon: "fa-laptop-code",
    description: "Comprehensive financial management with invoicing, expense tracking, and reporting."
  },
  {
    name: "QuickBooks",
    icon: "fa-file-invoice-dollar",
    description: "Leading accounting software for small and medium businesses with robust payroll features."
  },
  {
    name: "Xero",
    icon: "fa-chart-bar",
    description: "Cloud-based accounting platform with real-time collaboration and bank connections."
  },
  {
    name: "Wave Accounting",
    icon: "fa-wave-square",
    description: "Free accounting software ideal for small businesses and freelancers."
  },
  {
    name: "Datarails",
    icon: "fa-database",
    description: "Excel-based financial planning and analysis platform for budgeting and forecasting."
  }
];
