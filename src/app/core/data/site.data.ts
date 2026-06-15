import { Metric, Domain, LearningStage, Leader, Testimonial, Partner, GalleryItem, Resource, Project } from '../../shared/models';

export const METRICS: Metric[] = [
  { id: 'students', label: 'Students Trained', value: 15000, suffix: '+', icon: 'school' },
  { id: 'schools', label: 'Schools Connected', value: 120, suffix: '+', icon: 'account_balance' },
  { id: 'colleges', label: 'Colleges Partnered', value: 35, suffix: '+', icon: 'domain' },
  { id: 'workshops', label: 'Workshops Conducted', value: 500, suffix: '+', icon: 'build' },
  { id: 'resources', label: 'Resources Developed', value: 200, suffix: '+', icon: 'menu_book' }
];

export const DOMAINS: Domain[] = [
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    description: 'Exploring machine learning, neural networks, and generative AI to prepare students for an AI-driven world.',
    icon: 'psychology',
    color: '#8B5CF6',
    link: '/computer-upgrade'
  },
  {
    id: 'coding',
    title: 'Coding & Programming',
    description: 'From foundational coding to Python and beyond — building computational thinking and problem-solving skills.',
    icon: 'code',
    color: '#2563EB',
    link: '/computer-upgrade'
  },
  {
    id: 'robotics',
    title: 'Robotics',
    description: 'Design, build, and program robots that solve real-world challenges through engineering and creativity.',
    icon: 'precision_manufacturing',
    color: '#EF4444',
    link: '/computer-upgrade'
  },
  {
    id: 'electronics',
    title: 'Electronics',
    description: 'Hands-on circuit design, microcontrollers, and IoT systems bringing theoretical knowledge to life.',
    icon: 'memory',
    color: '#F59E0B',
    link: '/computer-upgrade'
  },
  {
    id: 'mathematics',
    title: 'Mathematics',
    description: 'Innovative approaches to mathematics including abacus, tangrams, and computational mathematics.',
    icon: 'calculate',
    color: '#10B981',
    link: '/computer-upgrade'
  },
  {
    id: 'innovation',
    title: 'Innovation & Research',
    description: 'Fostering a culture of innovation through design thinking, research methodology, and creative problem-solving.',
    icon: 'lightbulb',
    color: '#14B8A6',
    link: '/'
  }
];

export const LEARNING_STAGES: LearningStage[] = [
  {
    stage: 'Primary School',
    description: 'Building foundations through mental arithmetic, geometry, and block coding.',
    programs: ['Abacus & Tangram Training', 'Visual Programming', 'Speed Maths'],
    icon: 'child_care'
  },
  {
    stage: 'Middle School',
    description: 'Developing coding skills, hands-on robotics, and academic curiosity.',
    programs: ['Python Programming', 'Robotics Engineering', 'Quiz Competitions'],
    icon: 'school'
  },
  {
    stage: 'High School',
    description: 'Advanced microcontroller programming, electronics, and competition prep.',
    programs: ['Arduino Programming', 'Quiz Competitions'],
    icon: 'engineering'
  },
  {
    stage: 'College',
    description: 'Practical AI applications, advanced programming, and professional development.',
    programs: ['GenAI Tools (Basic & Advanced)', 'Advanced Python', 'Robotics Engineering'],
    icon: 'account_balance'
  },
  {
    stage: 'Innovation & Research',
    description: 'Cutting-edge research, innovation labs, and industry collaboration.',
    programs: ['Innovation Lab Projects', 'Research Publications', 'Industry Partnerships'],
    icon: 'rocket_launch'
  }
];export const LEADERS: Leader[] = [
  {
    id: 'ghazala-shaikh',
    name: 'Ghazala Shaikh',
    designation: 'President',
    shortIntro: 'Educational Vision & Institutional Leadership',
    biography: 'Ghazala Shaikh, President of Zy Innovators, brings decades of experience in educational leadership and institutional development. Her vision for integrating technology with traditional education has transformed how thousands of students learn and grow. Under her guidance, Zy Innovators has established partnerships with schools and colleges, creating a network of innovation-driven educational institutions.',
    vision: 'To create an educational ecosystem where every student has access to world-class innovation and technology-driven learning, regardless of their background.',
    expertise: ['Educational Leadership', 'Institutional Development', 'Curriculum Innovation', 'Strategic Partnerships'],
    contributions: ['Founded Zy Innovators educational framework', 'Established partnerships with schools and colleges', 'Designed comprehensive teacher training programs', 'Led the development of comprehensive learning resources'],
    image: 'assets/images/ghazala.png',
    order: 1
  },
  {
    id: 'yusuf-shaikh',
    name: 'Yusuf Shaikh',
    designation: 'Chief Executive Officer',
    shortIntro: 'Strategy, Operations & Growth',
    biography: 'Yusuf Shaikh serves as the CEO of Zy Innovators, overseeing the organization\'s strategic direction and operational excellence. With a strong background in technology and education, he has been instrumental in developing scalable programs that bring AI, coding, robotics, and innovation to students and educators across the country. His approach combines entrepreneurial thinking with deep educational insight.',
    vision: 'To democratize innovation education and equip the next generation with the skills, mindset, and tools to lead in an AI-driven future.',
    expertise: ['Technology Strategy', 'Product Development', 'AI & Machine Learning', 'Educational Technology', 'Organizational Leadership'],
    contributions: ['Architected the Zy Innovators program framework', 'Developed AI and coding curriculum', 'Built the resource development pipeline', 'Established workshop delivery methodology'],
    image: 'assets/images/yusuf.png',
    order: 2
  },
  {
    id: 'zainab-shaikh',
    name: 'Zainab Shaikh',
    designation: 'Chief Technical Officer',
    shortIntro: 'Technology, Innovation & Product Development',
    biography: 'Zainab Shaikh, CTO of Zy Innovators, leads the organization\'s technical initiatives and program development. Her expertise spans robotics, electronics, programming, and educational content design. She has personally trained hundreds of educators and developed comprehensive curricula that make advanced technology accessible to learners of ages.',
    vision: 'To make technology education hands-on, inclusive, and transformative — enabling every learner to become a creator, not just a consumer of technology.',
    expertise: ['Robotics & Electronics', 'Programming Education', 'Curriculum Design', 'Technical Training', 'Content Development'],
    contributions: ['Designed robotics and electronics workshop curriculum', 'Created comprehensive educational resources', 'Led teacher training programs in educational institutions', 'Developed the Zy Innovators assessment framework'],
    image: 'assets/images/zainab.png',
    order: 3
  },
  {
    id: 'arif-shaikh',
    name: 'Arif Shaikh',
    designation: 'Resource Person',
    shortIntro: 'Technology Leadership & Engineering Excellence',
    biography: 'Arif Shaikh serves as a Key Resource Person for Zy Innovators. He is a Technology Leader at Baker Hughes, a leading multinational energy technology company, with over 29 years of global experience in engineering, technology leadership, and product development. He guides the organization’s high-level technological curriculum and mentors students in advanced engineering concepts.',
    vision: 'To bridge the gap between academic learning and multinational industry standards, preparing students for high-impact technology careers.',
    expertise: ['Technology Leadership', 'Engineering Management', 'Product Development', 'Industrial Systems', 'Global Operations'],
    contributions: ['Guides curriculum alignment with industry standards', 'Provides industry mentorship and career guidance', 'Advises on advanced engineering and robotics programs', 'Supports strategic technology roadmap development'],
    image: 'assets/images/arif.png',
    order: 4
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: 'Zy Innovators transformed our approach to STEM education. The teacher training program gave our faculty the confidence and skills to integrate AI and coding into their daily teaching practice.',
    author: 'Dr. Anita Desai',
    role: 'Principal',
    institution: 'Delhi Public School',
    rating: 5
  },
  {
    id: 't2',
    quote: 'The robotics workshop was incredible! My students went from having zero electronics experience to building autonomous robots in just four weeks. The curriculum is exceptionally well-designed.',
    author: 'Rajesh Kumar',
    role: 'Science Teacher',
    institution: 'Kendriya Vidyalaya',
    rating: 5
  },
  {
    id: 't3',
    quote: 'The quality of resources developed by Zy Innovators is outstanding. Their Python workbooks and teacher manuals have become essential materials in our computer science department.',
    author: 'Prof. Meera Shah',
    role: 'HOD Computer Science',
    institution: 'St. Xavier\'s College',
    rating: 5
  },
  {
    id: 't4',
    quote: 'Partnering with Zy Innovators for our annual innovation fest was the best decision. Their team brought energy, expertise, and genuine passion for student learning that was truly inspiring.',
    author: 'Sameer Joshi',
    role: 'Academic Director',
    institution: 'Podar International School',
    rating: 5
  },
  {
    id: 't5',
    quote: 'The GenAI tools training program opened my eyes to the possibilities of AI in education. I now use AI tools daily for lesson planning and creating personalized learning materials for my students.',
    author: 'Priya Nair',
    role: 'Mathematics Teacher',
    institution: 'Ryan International School',
    rating: 5
  }
];

export const PARTNERS: Partner[] = [
  { id: 'p1', name: 'Delhi Public School', logo: '', type: 'school' },
  { id: 'p2', name: 'Kendriya Vidyalaya', logo: '', type: 'school' },
  { id: 'p3', name: 'Podar International School', logo: '', type: 'school' },
  { id: 'p4', name: 'Ryan International School', logo: '', type: 'school' },
  { id: 'p5', name: 'St. Xavier\'s College', logo: '', type: 'college' },
  { id: 'p6', name: 'MIT Institute of Technology', logo: '', type: 'college' },
  { id: 'p7', name: 'Symbiosis University', logo: '', type: 'college' },
  { id: 'p8', name: 'National Innovation Foundation', logo: '', type: 'organization' },
  { id: 'p9', name: 'STEM Council of India', logo: '', type: 'organization' },
  { id: 'p10', name: 'Arduino Education', logo: '', type: 'collaborator' },
  { id: 'p11', name: 'Google for Education', logo: '', type: 'collaborator' },
  { id: 'p12', name: 'Microsoft Imagine Academy', logo: '', type: 'collaborator' }
];

export const RESOURCES: Resource[] = [
  {
    id: 'r1', slug: 'python-fundamentals-workbook', title: 'Python Fundamentals Workbook',
    description: 'A comprehensive student workbook covering Python programming from basics to intermediate concepts with hands-on exercises.',
    category: 'student-workbooks', tags: ['python', 'programming', 'beginner'],
    thumbnail: '', previewUrl: 'https://example.com/preview/python-fundamentals',
    author: 'Zy Innovators', publishedDate: '2024-01-15', featured: true
  },
  {
    id: 'r2', slug: 'ai-for-educators-guide', title: 'AI for Educators — Complete Guide',
    description: 'A teacher manual covering AI fundamentals, GenAI tools integration, prompt engineering, and responsible AI use in educational settings.',
    category: 'teacher-manuals', tags: ['ai', 'genai', 'teaching'],
    thumbnail: '', downloadUrl: 'assets/resources/ai-for-educators.pdf',
    author: 'Zy Innovators', publishedDate: '2024-03-10', featured: true
  },
  {
    id: 'r3', slug: 'robotics-project-handbook', title: 'Robotics Project Handbook',
    description: 'Step-by-step guide for building 15 robotics projects, from simple line followers to advanced autonomous robots.',
    category: 'books', tags: ['robotics', 'arduino', 'projects'],
    thumbnail: '', downloadUrl: 'assets/resources/robotics-handbook.pdf',
    author: 'Zy Innovators', publishedDate: '2024-02-20', featured: true
  },
  {
    id: 'r4', slug: 'electronics-components-guide', title: 'Electronics Components Reference',
    description: 'A visual guide to electronic components, circuit symbols, and common circuit configurations for students and educators.',
    category: 'books', tags: ['electronics', 'circuits', 'reference'],
    thumbnail: '',
    author: 'Zy Innovators', publishedDate: '2023-11-05', featured: false
  },
  {
    id: 'r5', slug: 'abacus-level1-workbook', title: 'Abacus Level 1 Workbook',
    description: 'Student practice workbook for abacus fundamentals including addition and subtraction on the soroban.',
    category: 'student-workbooks', tags: ['abacus', 'mathematics', 'mental-arithmetic'],
    thumbnail: '', previewUrl: 'https://example.com/preview/abacus-level1',
    author: 'Zy Innovators', publishedDate: '2023-09-01', featured: false
  },
  {
    id: 'r6', slug: 'scratch-programming-activities', title: 'Scratch Programming Activity Cards',
    description: 'A set of 30 activity cards for teaching block-based programming using Scratch, organized by difficulty level.',
    category: 'teacher-manuals', tags: ['scratch', 'visual-programming', 'activities'],
    thumbnail: '', downloadUrl: 'assets/resources/scratch-cards.pdf',
    author: 'Zy Innovators', publishedDate: '2024-04-12', featured: true
  },
  {
    id: 'r7', slug: 'python-workbook-answer-key', title: 'Python Workbook — Answer Key',
    description: 'Complete solutions and explanations for all exercises in the Python Fundamentals Workbook.',
    category: 'answer-keys', tags: ['python', 'solutions', 'teacher-resource'],
    thumbnail: '',
    author: 'Zy Innovators', publishedDate: '2024-01-20', featured: false
  },
  {
    id: 'r8', slug: 'stem-education-presentation', title: 'STEM Education Best Practices',
    description: 'A comprehensive presentation deck on implementing STEM education effectively in K-12 institutions.',
    category: 'presentations', tags: ['stem', 'education', 'best-practices'],
    thumbnail: '', previewUrl: 'https://example.com/preview/stem-best-practices',
    author: 'Zy Innovators', publishedDate: '2024-05-01', featured: false
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-pilot', slug: 'school-innovation-pilot', title: 'School Innovation Pilot',
    description: 'A comprehensive educational pilot launching in local schools this month to establish student innovation programs, custom lab structures, and teacher training pipelines.',
    category: 'robotics', images: [], technologies: ['Curriculum Design', 'Robotics Kits', 'Teacher Manuals'],
    learningOutcomes: ['STEM Program Integration', 'Teacher Empowerment', 'Hands-on Learning'], featured: true,
    status: 'pilot'
  },
  {
    id: 'proj1', slug: 'autonomous-maze-solver', title: 'Autonomous Maze Solver Robot',
    description: 'A robot that navigates complex mazes using ultrasonic sensors and a custom pathfinding algorithm, demonstrating autonomous decision-making.',
    category: 'robotics', images: [], technologies: ['Arduino', 'Ultrasonic Sensors', 'Motor Driver', 'C++'],
    learningOutcomes: ['Sensor integration', 'Algorithm design', 'Motor control', 'Autonomous navigation'], featured: true,
    status: 'active'
  },
  {
    id: 'proj2', slug: 'smart-weather-station', title: 'IoT Weather Station',
    description: 'A connected weather monitoring system that collects temperature, humidity, pressure, and air quality data, displaying it on a web dashboard.',
    category: 'iot', images: [], technologies: ['ESP32', 'DHT22', 'BMP280', 'MQTT', 'Node.js'],
    learningOutcomes: ['IoT architecture', 'Sensor data processing', 'Cloud connectivity', 'Dashboard design'], featured: true,
    status: 'active'
  },
  {
    id: 'proj3', slug: 'ai-chatbot-assistant', title: 'AI Study Assistant Chatbot',
    description: 'An AI-powered chatbot that helps students with homework, explains concepts, and generates practice questions based on their curriculum.',
    category: 'ai', images: [], technologies: ['Python', 'OpenAI API', 'Flask', 'HTML/CSS'],
    learningOutcomes: ['API integration', 'Natural language processing', 'Web development', 'Prompt engineering'], featured: true,
    status: 'active'
  },
  {
    id: 'proj4', slug: 'line-following-robot', title: 'Line Following Robot',
    description: 'A classic robotics project using IR sensors to follow a line path, with PID control for smooth navigation.',
    category: 'robotics', images: [], technologies: ['Arduino', 'IR Sensors', 'L298N Motor Driver', 'PID Algorithm'],
    learningOutcomes: ['PID control', 'Sensor calibration', 'Real-time processing', 'Mechanical design'], featured: false,
    status: 'active'
  },
  {
    id: 'proj5', slug: 'home-automation-system', title: 'Smart Home Automation',
    description: 'A complete home automation system controlling lights, fans, and appliances via smartphone app and voice commands.',
    category: 'iot', images: [], technologies: ['ESP32', 'Relay Module', 'Blynk App', 'Google Assistant'],
    learningOutcomes: ['Relay control', 'App development', 'Voice integration', 'System design'], featured: true,
    status: 'active'
  },
  {
    id: 'proj6', slug: 'data-visualization-dashboard', title: 'Educational Data Dashboard',
    description: 'A Python-based dashboard that visualizes student performance data, identifies learning gaps, and generates actionable insights for educators.',
    category: 'programming', images: [], technologies: ['Python', 'Pandas', 'Plotly', 'Streamlit'],
    learningOutcomes: ['Data analysis', 'Visualization techniques', 'Statistical thinking', 'Dashboard design'], featured: false,
    status: 'active'
  },
  {
    id: 'proj7', slug: 'led-matrix-display', title: 'LED Matrix Display Board',
    description: 'A programmable LED matrix display showing scrolling text, animations, and real-time data from connected sensors.',
    category: 'electronics', images: [], technologies: ['Arduino', 'MAX7219', 'LED Matrix', 'SPI Protocol'],
    learningOutcomes: ['SPI communication', 'Matrix addressing', 'Animation logic', 'Hardware interfacing'], featured: false,
    status: 'active'
  },
  {
    id: 'proj8', slug: 'gesture-controlled-car', title: 'Gesture-Controlled Car',
    description: 'A wirelessly controlled car that responds to hand gestures using an accelerometer-based controller.',
    category: 'arduino', images: [], technologies: ['Arduino Nano', 'MPU6050', 'NRF24L01', 'Motor Shield'],
    learningOutcomes: ['Wireless communication', 'Accelerometer data', 'Real-time control', 'System integration'], featured: true,
    status: 'active'
  },
  {
    id: 'proj-upcoming-1', slug: 'smart-agriculture-iot', title: 'Smart Agriculture & IoT Monitoring',
    description: 'An upcoming automated farming ecosystem that monitors soil hydration, ambient temperature, and crop health using low-power IoT networks.',
    category: 'iot', images: [], technologies: ['ESP32', 'Soil Sensors', 'Solar Power', 'LoRaWAN'],
    learningOutcomes: ['Sustainable Technology', 'Environmental IoT', 'Power Management'], featured: false,
    status: 'upcoming'
  },
  {
    id: 'proj-upcoming-2', slug: 'drone-mapping-ai', title: 'Autonomous Drone Mapping System',
    description: 'A research initiative building autonomous drone navigation scripts for real-time topographical analysis and obstacle avoidance algorithms.',
    category: 'ai', images: [], technologies: ['Computer Vision', 'Python', 'ROS', 'PX4 Autopilot'],
    learningOutcomes: ['Aerial Robotics', 'Pathfinding Algorithms', 'Real-time Object Detection'], featured: false,
    status: 'upcoming'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'g1', title: 'Python Training Workshop 2024', category: 'trainings', image: '', description: 'Educators learning Python programming at our intensive training session.' },
  { id: 'g2', title: 'Robotics Competition', category: 'events', image: '', description: 'Students competing in the annual Zy Innovators Robotics Challenge.' },
  { id: 'g3', title: 'Electronics Workshop', category: 'workshops', image: '', description: 'Hands-on circuit building during our electronics fundamentals workshop.' },
  { id: 'g4', title: 'AI in Education Seminar', category: 'trainings', image: '', description: 'Discussing the future of AI in education with school leaders.' },
  { id: 'g5', title: 'Arduino Project Showcase', category: 'projects', image: '', description: 'Students presenting their Arduino projects at the innovation fair.' },
  { id: 'g6', title: 'Teacher Training Graduation', category: 'events', image: '', description: 'Celebrating educators who completed the Zy Innovators training program.' },
  { id: 'g7', title: 'Coding Marathon', category: 'events', image: '', description: '48-hour coding marathon with 200+ student participants.' },
  { id: 'g8', title: 'Innovation Lab Setup', category: 'workshops', image: '', description: 'Setting up a new innovation lab at a partner school.' }
];
