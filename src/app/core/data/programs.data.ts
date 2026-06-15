import { Program } from '../../shared/models';

export const PROGRAMS: Program[] = [
  {
    id: 'genai-training',
    slug: 'genai-for-educators',
    title: 'GenAI Tools (Basic & Advanced)',
    subtitle: 'Master AI-Powered Teaching',
    category: 'teacher-training',
    description: 'Learn to use Generative AI tools (ChatGPT, Gemini, Claude) to make teaching more interesting and help teachers work better and faster. Both the basic and advanced training programs are designed to fit the busy schedules of educators.',
    image: '',
    icon: 'smart_toy',
    duration: '3 Hours (Basic) / 3 Hours (Advanced)',
    level: 'Beginner to Intermediate',
    outcomes: [
      'Understand and use basic generative AI tools that are already available, including ChatGPT, Gemini, and Claude',
      'Participate in hands-on activities and tasks designed for teachers during the basic session',
      'Master advanced GenAI tools to enhance student learning and engagement',
      'Improve teacher productivity to complete tasks better and faster',
      'Learn how to leverage AI tools to make classroom teaching more interesting and dynamic'
    ],
    modules: [
      {
        title: 'Basic GenAI Training (3 Hours)',
        description: 'Introducing available GenAI tools and hands-on activities for teachers.',
        topics: ['ChatGPT, Gemini & Claude Overview', 'Teacher Tasks & Interactive Activities', 'Introductory Prompts for Educators']
      },
      {
        title: 'Advanced GenAI Training (3 Hours)',
        description: 'Conducted after the basic session to teach advanced tools and student integration.',
        topics: ['Advanced AI Tools & Systems', 'Increasing Teacher Efficiency & Speed', 'Making Lessons More Interesting', 'Student Benefits & Classroom Application']
      }
    ],
    objectives: [
      'Complete basic tasks using ChatGPT, Gemini, and Claude during the session',
      'Learn how to design highly engaging and creative lesson plans',
      'Apply advanced AI techniques to grade and give feedback faster'
    ],
    resourcesIncluded: ['Teacher AI Activity Handbook', 'AI Tool Cheat Sheets', 'Sample Prompt Handouts'],
    certification: '',
    faq: [
      { question: 'Do I need prior AI experience?', answer: 'No, this program is designed for educators at all technology levels. We start from the basics.' },
      { question: 'What do I need to participate?', answer: 'A Mobile Phone with internet access.' },
      { question: 'How are the basic and advanced sessions scheduled?', answer: 'Each session is 3 hours long. The advanced training is scheduled after completion of the basic session.' }
    ],
    featured: true
  },
  {
    id: 'python-training',
    slug: 'python-programming',
    title: 'Python Programming',
    subtitle: 'Basic Coding for Schools',
    category: 'teacher-training',
    description: 'A dedicated one-week Python programming training program for teachers. Equips educators with the basic Python skills required for students to learn in school, utilizing our dedicated Python workbook.',
    image: '',
    icon: 'code',
    duration: '1 Week',
    level: 'Beginner',
    outcomes: [
      'Master the basic Python programming concepts required for the school curriculum',
      'Utilize a dedicated Python workbook designed for both teachers and students',
      'Gain confidence in teaching coding fundamentals to school students'
    ],
    modules: [
      {
        title: 'Core Python for Schools',
        description: 'Basic programming concepts required for students to learn in school.',
        topics: ['Variables & Data Types', 'Loops & Conditions', 'Basic Functions', 'Problem Solving']
      },
      {
        title: 'Teaching with the Dedicated Workbook',
        description: 'Utilizing our custom workbook exercises for teachers and students.',
        topics: ['Workbook Structure & Navigation', 'Graded Coding Exercises', 'Classroom Coding Projects']
      }
    ],
    objectives: [
      'Understand basic Python syntax and principles taught in schools',
      'Guide students effectively through the dedicated Python workbook',
      'Build hands-on coding exercises for primary and secondary classes'
    ],
    resourcesIncluded: ['Dedicated Python Workbook (Teacher Edition)', 'Dedicated Python Workbook (Student Edition)', 'Code Exercises & Solutions Booklet'],
    certification: '',
    faq: [
      { question: 'What is the duration of this training?', answer: 'This program is conducted over one week.' },
      { question: 'Who is the workbook for?', answer: 'We have a dedicated Python workbook developed for both the teachers and the students to use in school.' }
    ],
    featured: true
  },
  {
    id: 'abacus-tangram-training',
    slug: 'abacus-and-tangram-training',
    title: 'Abacus & Tangram Training',
    subtitle: 'Mental Math & Spatial Geometry for Teachers',
    category: 'teacher-training',
    description: 'A comprehensive training program for educators combining Soroban abacus techniques and Tangram geometry puzzles. Empower teachers to build students\' calculation speed, concentration, spatial reasoning, and mathematical confidence.',
    image: '',
    icon: 'calculate',
    duration: '45 Hours',
    level: 'All Levels',
    outcomes: [
      'Master Soroban abacus addition, subtraction, multiplication, and division',
      'Use Tangram puzzles to teach geometric properties, spatial relationships, and area concepts',
      'Develop mental arithmetic training methodologies for classrooms',
      'Design engaging hands-on mathematics activities and game-based learning assessments'
    ],
    modules: [
      {
        title: 'Abacus Fundamentals',
        description: 'Mastering basic operations on the Soroban abacus.',
        topics: ['Soroban Structure & Bead Placement', 'Addition & Subtraction Rules', 'Simple Multiplications']
      },
      {
        title: 'Advanced Abacus & Mental Math',
        description: 'Moving beyond physical abacus to mental calculations.',
        topics: ['Multi-digit Multiplication & Division', 'Mental Visualization Techniques', 'Speed Drills & Classroom Competitions']
      },
      {
        title: 'Tangram Geometry & Spatial Reasoning',
        description: 'Integrating Tangram puzzles for visual mathematics.',
        topics: ['Tangram Properties & Spatial Reasoning', 'Area & Perimeter Visualization', 'Cross-curricular STEAM Activities']
      }
    ],
    objectives: [
      'Teach abacus and tangram concepts to primary and middle school students',
      'Run interactive math clubs and mental calculation events',
      'Integrate physical manipulative tools into the mathematics curriculum'
    ],
    resourcesIncluded: ['Abacus & Tangram Training Manual', 'Student Worksheets & Puzzle Cards', 'Assessment Rubrics', 'Soroban Abacus & Tangram Set'],
    certification: '',
    faq: [
      { question: 'Do teachers need to purchase the kits separately?', answer: 'No, training kits including Soroban abacus and Tangram sets are provided as part of the program resources.' }
    ],
    featured: true
  },
  {
    id: 'arduino-workshop',
    slug: 'arduino-programming',
    title: 'Arduino Programming',
    subtitle: 'Where Code Meets Hardware',
    category: 'workshops',
    description: 'Learn to program Arduino microcontrollers to build interactive electronic projects. From simple LED blinkers to complex sensor-based systems, this workshop bridges coding and physical computing.',
    image: '',
    icon: 'developer_board',
    duration: '40 Hours',
    level: 'Intermediate',
    outcomes: [
      'Program Arduino boards using C/C++',
      'Interface with sensors, motors, and displays',
      'Build IoT-connected projects',
      'Design custom PCBs for prototypes',
      'Create automated systems and robots'
    ],
    modules: [
      {
        title: 'Arduino Basics',
        description: 'Introduction to Arduino platform and programming.',
        topics: ['Arduino IDE Setup', 'Digital I/O', 'Analog I/O', 'Serial Communication']
      },
      {
        title: 'Sensors & Actuators',
        description: 'Working with various sensors and output devices.',
        topics: ['Temperature Sensors', 'Ultrasonic Sensors', 'Servo Motors', 'LCD Displays']
      },
      {
        title: 'Advanced Projects',
        description: 'Building complex, real-world applications.',
        topics: ['Line Following Robot', 'Weather Station', 'Home Automation', 'Wireless Communication']
      }
    ],
    objectives: [
      'Build 10+ Arduino-based projects',
      'Design solutions for real-world problems',
      'Document and present technical projects'
    ],
    resourcesIncluded: ['Arduino Starter Kit', 'Programming Guide', 'Sensor Reference', 'Project Blueprints'],
    certification: '',
    faq: [
      { question: 'What Arduino board do we use?', answer: 'We start with Arduino Uno and progress to Nano and Mega for advanced projects.' }
    ],
    featured: true
  },
  {
    id: 'robotics-workshop',
    slug: 'robotics-engineering',
    title: 'Robotics Engineering',
    subtitle: 'Build, Program, Compete',
    category: 'workshops',
    description: 'A comprehensive robotics program covering mechanical design, electronics integration, and programming. Students design, build, and program robots from scratch, preparing for competitions and real-world applications.',
    image: '',
    icon: 'precision_manufacturing',
    duration: '60 Hours',
    level: 'Intermediate to Advanced',
    outcomes: [
      'Design and build functional robots',
      'Program robots for autonomous operation',
      'Integrate sensors for intelligent behavior',
      'Compete in robotics challenges',
      'Apply engineering design process'
    ],
    modules: [
      {
        title: 'Robot Design',
        description: 'Mechanical design principles for robotics.',
        topics: ['Chassis Design', 'Drive Systems', 'Gear Mechanisms', '3D Printing']
      },
      {
        title: 'Robot Programming',
        description: 'Programming robots for various tasks.',
        topics: ['Motor Control', 'Sensor Fusion', 'PID Control', 'Path Planning']
      }
    ],
    objectives: [
      'Design a robot from concept to prototype',
      'Program autonomous navigation',
      'Participate in a robotics competition'
    ],
    resourcesIncluded: ['Robotics Kit', 'Design Handbook', 'Programming Reference', 'Competition Guide'],
    certification: '',
    faq: [
      { question: 'Can we take the robot home?', answer: 'Robots built during the workshop belong to the student/team upon completion.' }
    ],
    featured: true
  },
  {
    id: 'speed-maths-workshop',
    slug: 'speed-maths',
    title: 'Speed Maths Workshop',
    subtitle: 'Fast & Fun Mental Arithmetic',
    category: 'workshops',
    description: 'Unleash the power of mental mathematics! This workshop teaches students rapid calculation techniques, short-cuts, and logic puzzles to build speed, accuracy, and confidence in solving math problems.',
    image: '',
    icon: 'calculate',
    duration: '1 Day (4 to 6 Hours)',
    level: 'All Levels',
    outcomes: [
      'Understand why maths is important and learn basic concepts to make students love maths and feel confident in the first half',
      'Solve games and puzzles in groups in the second half',
      'Develop group collaboration and leadership skills'
    ],
    modules: [
      {
        title: 'First Half: Loving Maths & Speed Tricks',
        description: 'Focuses on why math is important and basic concepts to make students love math and build confidence.',
        topics: ['Why Maths is Important', 'Building Math Confidence', 'Basic Speed Calculations']
      },
      {
        title: 'Second Half: Games, Puzzles & Group Work',
        description: 'Students solve math puzzles and play games in groups to foster collaboration and leadership.',
        topics: ['Math Puzzles & Logic Games', 'Group Challenges', 'Leadership & Collaboration']
      }
    ],
    objectives: [
      'Overcome math anxiety and build long-term confidence',
      'Perform mental calculations quickly and accurately',
      'Work collaboratively in teams to solve puzzles'
    ],
    resourcesIncluded: ['Speed Maths Activity Booklet', 'Group Puzzle Cards', 'Group Evaluation Board'],
    certification: '',
    faq: [
      { question: 'How long is the workshop?', answer: 'It is a one-day workshop of 4 to 6 hours.' },
      { question: 'How is it structured?', answer: 'The first half covers why maths is important and basic concepts to make students love maths. The second half features group games and puzzles to foster leadership and collaboration.' }
    ],
    featured: false
  },
  {
    id: 'quiz-competitions',
    slug: 'quiz-competitions',
    title: 'Quiz Competitions',
    subtitle: 'Challenging Minds, Building Knowledge',
    category: 'student-programs',
    description: 'A multi-stage student quiz competition featuring online screening tests and exciting offline school-level rounds with gifts and prizes.',
    image: '',
    icon: 'quiz',
    duration: 'Multiple Rounds',
    level: 'All Levels',
    outcomes: [
      'Prepare using our dedicated study material books',
      'Take screening tests online using our own specialized testing system',
      'Select the top 10 students for a live offline round at their school',
      'Award exciting gifts and prizes to the top 3 school round winners'
    ],
    modules: [
      {
        title: 'Preparation & Online Screening',
        description: 'Students study from the provided book and take an online test on our own system to select the top 10.',
        topics: ['Study Material Book', 'Custom Online Test System', 'Top 10 Selection']
      },
      {
        title: 'Offline School Finals',
        description: 'Offline buzzer rounds and quiz activities conducted in schools, rewarding the top 3 students.',
        topics: ['Offline Buzzer Rounds', 'Top 3 Student Selection', 'Gifts, Prizes & Awards']
      }
    ],
    objectives: [
      'Foster independent research and preparation skills using study material books',
      'Provide a modern online testing experience through our custom platform',
      'Celebrate student achievement locally with exciting gifts and prizes'
    ],
    resourcesIncluded: ['Topic Study Material Book', 'Online Test Platform Access Code', 'Gifts and Prizes for School Winners'],
    certification: '',
    faq: [
      { question: 'What is the screening process?', answer: 'Students study from our provided book and take an online test using our own system. The top 10 students advance to the offline round.' },
      { question: 'What are the final prizes?', answer: 'The final round is conducted offline at school, where the top 3 students are chosen and awarded exciting gifts and prizes.' }
    ],
    featured: true
  },
  {
    id: 'visual-programming-students',
    slug: 'visual-programming-for-students',
    title: 'Visual Programming',
    subtitle: 'Block Coding for Lower Standards',
    category: 'student-programs',
    description: 'Introduces block-based coding to lower-standard students. Built to make children aware of coding and help them learn the basics from fun, visual games.',
    image: '',
    icon: 'extension',
    duration: '20 Hours',
    level: 'Lower Standards (Primary)',
    outcomes: [
      'Introduce young students to coding concepts using blocks',
      'Develop early logical thinking and computational reasoning',
      'Learn basic coding principles from interactive games'
    ],
    modules: [
      {
        title: 'Introduction to Block Coding',
        description: 'Making students aware of coding through snapping visual blocks together.',
        topics: ['Visual Command Blocks', 'Events & Triggers', 'Ordering Actions']
      },
      {
        title: 'Learning Basics from Games',
        description: 'Interactive visual games that teach coding fundamentals.',
        topics: ['Basic Loops & Repetition', 'Directional Controls', 'Logic Game Challenges']
      }
    ],
    objectives: [
      'Build a solid early interest in coding and technology',
      'Teach foundational coding logic through gaming',
      'Enable students to create simple animated stories'
    ],
    resourcesIncluded: ['Visual Programming Game Guide', 'Lower Standard Activity Sheets', 'Classroom Game Playbooks'],
    certification: '',
    faq: [
      { question: 'Which standard/grade is this program for?', answer: 'This program is specially designed for lower-standard students who are new to coding.' },
      { question: 'What tools do you use?', answer: 'We use visual, block-based learning environments that allow students to learn coding logic from interactive games.' }
    ],
    featured: false
  }
];
