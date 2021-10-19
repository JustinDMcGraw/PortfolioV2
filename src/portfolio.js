/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Daniel McGraw",
  logo_name: "daniel.m()",
  nickname: "Slaughter / Rex",
  full_name: "Daniel McGraw",
  subTitle: "Full Stack Developer, Open Source Enthusiast 🔥. Always learning.",
  resumeLink:
    "https://docs.google.com/document/d/1kcA00qiSJRZFDrfXZ0UPRw6QY4VKWMaDcrQpwVifx5U/edit?usp=sharing",
  mail: "mailto:justindanielmcgraw@gmail.com",
};

const socialMediaLinks = {
  github: "https://github.com/JustinDMcGraw",
  linkedin: "https://www.linkedin.com/in/justindmcgraw/",
  gmail: "justindanielmcgraw@gmail.com",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using ReactJS",
        // "⚡ Developing mobile applications using Flutter and Android",
        "⚡ Creating application backend in Node & Express",
        // "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        // {
        //   skillName: "PHP",
        //   fontAwesomeClassname: "simple-icons:php",
        //   style: {
        //     color: "#7377AD",
        //   },
        // },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        // {
        //   skillName: "MongoDB",
        //   fontAwesomeClassname: "simple-icons:mongodb",
        //   style: {
        //     color: "#439743",
        //   },
        // },
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },
        // {
        //   skillName: "Android",
        //   fontAwesomeClassname: "simple-icons:android",
        //   style: {
        //     color: "#3DDC84",
        //   },
        // },
        // {
        //   skillName: "Java",
        //   fontAwesomeClassname: "simple-icons:java",
        //   style: {
        //     color: "#f89820",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
        // {
        //   skillName: "Dart",
        //   fontAwesomeClassname: "simple-icons:dart",
        //   style: {
        //     color: "#29B0EE",
        //   },
        // },
        // {
        //   skillName: "Visual Basic",
        //   fontAwesomeClassname: "simple-icons:dot-net",
        //   style: {
        //     color: "#029FCE",
        //   },
        // },
        // {
        //   skillName: "MySQL",
        //   fontAwesomeClassname: "simple-icons:mysql",
        //   style: {
        //     color: "#4479A1",
        //   },
        // },
        // {
        //   skillName: "jQuery",
        //   fontAwesomeClassname: "simple-icons:jquery",
        //   style: {
        //     color: "#0865A6",
        //   },
        // },
        // {
        //   skillName: "Wordpress",
        //   fontAwesomeClassname: "simple-icons:wordpress",
        //   style: {
        //     color: "#207297",
        //   },
        // },
        // {
        //   skillName: "Apache",
        //   fontAwesomeClassname: "simple-icons:apache",
        //   style: {
        //     color: "#CA1A22",
        //   },
        // },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        // {
        //   skillName: "C",
        //   fontAwesomeClassname: "simple-icons:c",
        //   style: {
        //     color: "#E94E32",
        //   },
        // },
        // {
        //   skillName: "C++",
        //   fontAwesomeClassname: "simple-icons:cplusplus",
        //   style: {
        //     color: "#E94E32",
        //   },
        // },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Multiple projects with hosting and managing websites",
        "⚡ Trained with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        // {
        //   skillName: "Firebase",
        //   fontAwesomeClassname: "simple-icons:firebase",
        //   style: {
        //     color: "#FFCA28",
        //   },
        // },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        // {
        //   skillName: "MongoDB",
        //   fontAwesomeClassname: "simple-icons:mongodb",
        //   style: {
        //     color: "#47A248",
        //   },
        // },
        // {
        //   skillName: "Docker",
        //   fontAwesomeClassname: "simple-icons:docker",
        //   style: {
        //     color: "#1488C6",
        //   },
        // },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Lambda School",
      subtitle: "Technical Degree in Full-Stack Web Development",
      logo_path: "LambdaLogo.png",
      alt_name: "Lambda School Logo",
      duration: "March 2021 - August 2021",
      descriptions: [
        "⚡ I studied core subjects ranging from HTML, CSS, and JavaScript; to Advanced React, Redux, and Node",
        "⚡ Completed a number of build weeks, working as a team to create a mock product, and a Labs month as an Intern building a real product for a Non-Profit with a full team of interdisciplinary engineers using AGILE methods. ",
        "⚡ I have implemented several projects based on what I've learned under my Full-Stack Web Development course. ",
      ],
      website_link: "https://lambdaschool.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "M0001: MongoDB Basics",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link: "#",
      alt_name: "MongoDB University",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    },
    {
      title: "Hackathon",
      subtitle: "Hack The Mountains",
      logo_path: "hackathon1.svg",
      certificate_link: "#",
      alt_name: "hackathon",
      color_code: "#E2405F",
    },
    {
      title: "A300: Atlas Security",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link: "#",
      alt_name: "MongoDB University",
      // color_code: "#F6B808",
      color_code: "#47A048",
    },
    {
      title: "Cyber Security & Cyber Forensics",
      subtitle: "Workshop at IIT Bombay",
      logo_path: "iit.png",
      certificate_link: "#",
      alt_name: "Workshop",
      color_code: "#2AAFED",
    },
    {
      title: "MLH Local Hack Day: Build",
      subtitle: "Major League Hacking",
      logo_path: "mlh-logo.svg",
      certificate_link: "#",
      alt_name: "Google",
      color_code: "#fe0037",
    },
    {
      title: "Hack20",
      subtitle: "Flutter Internation Hackathon",
      logo_path: "flutter.png",
      certificate_link: "#",
      alt_name: "Flutter Internation Hackathon",
      color_code: "#2AAFED",
    },
    {
      title: "Postman Student Expert",
      subtitle: "Postman",
      logo_path: "postman.png",
      certificate_link: "#",
      alt_name: "Postman",
      // color_code: "#f36c3d",
      color_code: "#fffbf3",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed one internship. I've mostly done projects on my own and I am actively looking for full-time work.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "IT Software Solutions (Contract)",
          company: "Teksystems",
          company_url: "https://www.teksystems.com/en",
          logo_path: "teksystems.jpg",
          duration: "Oct 2021 - Current",
          location: "Calvert, AL",
          description:
            "Worked alongside the rest of the IT department at AM/NS Calvert to upgrade the entire list of outdated systems on Windows 7 to Windows 10 using a Powershell script and install needed software to the new systems to get the users ready to work with their new equipment.",
          color: "#ee3c26",
        },
        {
          title: "UX Engineer/Front-End Engineer/Project Lead (Intern)",
          company: "Human Rights First",
          company_url: "https://www.humanrightsfirst.org/asylum",
          logo_path: "HRF.png",
          duration: "Aug 2021",
          location: "Remote",
          description:
            "I worked on the UX/UI of the project which helped better serve our users by helping limit eye fatigue while using the app. I also took on a leadership position as a Project Lead coordinating large sprints comprising of Data Scientists, Back-end Engineers, and Front-end Engineers. Finally, led our team much closer to deployment by bringing down the mountain of a backlog to a very small list of changes.",
          color: "#0071C5",
        },
        // {
        //   title: "Full Stack Developer (Freelancer)",
        //   company: "NightOwls",
        //   company_url: "http://nightowls.company/",
        //   logo_path: "nightowls.jpg",
        //   duration: "Sep 2020 - Oct 2020",
        //   location: "Work From Home",
        //   description:
        //     "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
        //   color: "#ee3c26",
        // },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Software Developer",
          company: "UOAF",
          company_url: "https://uoaf.net/",
          logo_path: "300px-UOAF_Roundel_clean2.png",
          duration: "Feb 2021 - Present",
          location: "Remote",
          description:
            "Various personal projects to better serve my hobby community.",
          color: "#4285F4",
        },
        // {
        //   title: "Cross Winter of Code Mentor",
        //   company: "CWOC",
        //   company_url: "https://crosswoc.ieeedtu.in/",
        //   logo_path: "cwoc.png",
        //   duration: "Feb 2021 - Present",
        //   location: "Work From Home",
        //   description:
        //     "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
        //   color: "#4285F4",
        // },
        // {
        //   title: "Campus Hustler",
        //   company: "Skillenza",
        //   company_url: "https://skillenza.com/",
        //   logo_path: "skillenza.png",
        //   duration: "Feb 2021 - Present",
        //   location: "Work from Home",
        //   description:
        //     "Spread Awareness of new Technologies and new Opportunities to Students and Grow Skillenza Community.",
        //   color: "#196acf",
        // },
        // {
        //   title: "GitHub Student Developer",
        //   company: "GitHub",
        //   company_url: "https://github.com/",
        //   logo_path: "github.png",
        //   duration: "Nov 2019 - Present",
        //   location: "Work from Home",
        //   description:
        //     "Contribute to Open Source Community and Open Source Project.",
        //   color: "#040f26",
        // },
        // {
        //   title: "Google Local Guide",
        //   company: "Google Map",
        //   company_url: "https://maps.google.com/localguides/",
        //   logo_path: "localguide.png",
        //   duration: "Sep 2018 - Present",
        //   location: "Work From Home",
        //   description:
        //     "Day-to-day responsibilities of helping local businesses to spread their business to the world. Helping users by writing reviews about different locations and spaces such as shops, malls, etc.",
        //   color: "#D83B01",
        // },
        // {
        //   title: "GDG Student Volunteer",
        //   company: "Google Developer Groups",
        //   company_url: "https://gdg.community.dev/",
        //   logo_path: "gdg.png",
        //   duration: "Feb 2021 - Present",
        //   location: "Work From Home",
        //   description:
        //     "Google Developer Group Surat Student Volunteer and Member.",
        //   color: "#D83B01",
        // },
        // {
        //   title: "E. F. I. Student Volunteer",
        //   company: "ENVIRONMENTALIST FOUNDATION OF INDIA",
        //   company_url: "https://indiaenvironment.org/",
        //   logo_path: "efi.png",
        //   duration: "Apr 2017 - Present",
        //   location: "Work From Home",
        //   description:
        //     "Take time out over weekends to join a gang of nation builders, nature enthusiasts to conserve what is left.",
        //   color: "#5a900f",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects and React Projects. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "DanielandMurph.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "I don't blog really, but I'll occasionally post something helpful, funny, or thought-provoking to my LinkedIn",
  //   link: "https://www.linkedin.com/in/justindmcgraw/",
  //   avatar_image_path: "blogs_image.svg",
  // },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Human Rights First - Asylum",
      url: "https://github.com/JustinDMcGraw/human-rights-first-asylum-fe-a",
      description:
        "This is the project developed for the Non-Profit. It is a tool for Asylum Seeking lawyers to find judges in their district, complete with visualizations to see where the judge tends to lean to approve asylum to the seeker.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "1",
      name: "React-Components-Insta-Clone",
      url: "https://github.com/JustinDMcGraw/React-Components-Insta-Clone",
      description: "A simple Instagram clone using React.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "2",
      name: "Component Side Effects- NASA APOD",
      url: "https://github.com/JustinDMcGraw/nasa-photo-of-the-day",
      description:
        "A simple Website that consumes the NASA API to fetch the Astronomy Photo Of The Day or APOD.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "3",
      name: "Client Side Routing w/ React Router v.5",
      url: "https://github.com/JustinDMcGraw/React-Router-Movies",
      description:
        "A project that shows usage of Routing with React Router showing details of various Star Wars movies.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "4",
      name: "React Components and Components State",
      url: "https://github.com/JustinDMcGraw/react-stateful-widgets",
      description: "This module explores React components and component state.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "5",
      name: "Express Middleware Module Project",
      url: "https://github.com/JustinDMcGraw/node-api3-project",
      description:
        "This project allowed me to build an API and write custom middleware that met specific endpoints achieving MVP.",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "6",
      name: "UOAF Weather Bot",
      url: "https://github.com/JustinDMcGraw/UOAF-WeatherBot",
      description:
        "A fun project that allows my community embed any local weather data that the user will specify within Discord, by pulling data directly from Microsoft.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "7",
      name: "Authentication and Testing Sprint Challenge",
      url:
        "https://github.com/JustinDMcGraw/web-sprint-challenge-authentication-and-testing",
      description:
        "This sprint explored Authentication and Testing. During this sprint, I studied authentication, JSON web tokens, unit testing, and backend testing.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    // {
    //   id: "6",
    //   name: "Automate Attendace",
    //   url: "https://github.com/harikanani/Node_Python",
    //   description: "Automation of Online Attendance using node js and python",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    // },
    // {
    //   id: "7",
    //   name: "Automate Discord Bot",
    //   url: "https://github.com/harikanani/AutomateDiscordBot",
    //   description:
    //     "A Discord Bot to send Automatic messages to serer channel in regular time difference.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Python Selenium",
    //       iconifyClass: "logos-selenium",
    //     },
    //     {
    //       name: "Chromium Browser",
    //       iconifyClass: "openmoji-chromium",
    //     },
    //   ],
    // },
    // {
    //   id: "8",
    //   name: "Flask Blog",
    //   url: "https://github.com/harikanani/flask_blog",
    //   description: "A Simple Blog Web Application made using Flask Framework",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Flask",
    //       iconifyClass: "cib-flask",
    //     },
    //     {
    //       name: "HTML5",
    //       iconifyClass: "vscode-icons:file-type-html",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "vscode-icons:file-type-css",
    //     },
    //   ],
    // },
    // {
    //   id: "9",
    //   name: "Netflix top series",
    //   url: "https://github.com/harikanani/netflix-top-series",
    //   description: "List of Top Netflix Series which is deployed to vercel.",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //   ],
    // },
    // {
    //   id: "10",
    //   name: "COVID-19 Tracker",
    //   url: "https://github.com/harikanani/Covid19TrackerReact",
    //   description:
    //     "Simple Covid-19 Tracker made using React and deployed to Vercel.",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //   ],
    // },
    // {
    //   id: "11",
    //   name: "Food Order Static Website",
    //   url: "https://github.com/harikanani/food-order-website",
    //   description:
    //     "A simple static website related to food restaurants service. this is responsive as well.",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "PHP",
    //       iconifyClass: "logos-php",
    //     },
    //   ],
    // },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
