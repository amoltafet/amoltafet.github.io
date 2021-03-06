// Navigation Bar SECTION
const navBar = {
  show: false,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Ahmad",
  middleName: "",
  lastName: "Moltafet",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/amoltafet",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/ahmad-moltafet-63b7b619a",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/AhmadMoltafet",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/ahmad.jpeg"),
  imageSize: 375,
  profilePictureLink: require("../editable-stuff/ahmad.jpeg"),
  message:
    "My name is Ahmad Moltafet. I’m currently a senior at Gonzaga University pursuing a B.S. in Computer Science. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like working and designing open source projects.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "amoltafet", 
  reposLength: 0,
  specificRepos: [ "Oval-Dashboard", "GUIC-Website", "RockWater", "OvalMobile"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Education",
  message: "Gonzaga University", 
  images: [
    { 
      img: require('../assets/img/gonzaga.jpeg'),
      label: "", 
      paragraph: "" 
    },
    
  ],
  imageSize: {
    width:"200",
    height:"250",
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 60 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React/React Native", value: 85 },
    { name: "HTML/CSS", value: 65 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Azure Cloud Services", value: 90 },
    { name: "Azure DevOps", value: 75 },
    { name: "Azure Pipelines", value: 85 },
    { name: "Wordpress", value: 75 },
    { name: "Docker", value: 90 },
    
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "moltafet.ahmad2015@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer Intern',
      companylogo: require('../assets/img/intellitect.jpeg'),
      date: 'February 2022 – Present',
    },
    {
      role: 'Real Estate Agent',
      companylogo: require('../assets/img/synergy.png'),
      date: 'May 2019 – May 2021',
    },
    {
      role: 'Lead Manager',
      companylogo: require('../assets/img/nwc.png'),
      date: 'July 2018 – October 2020',
    },
    {
      role: 'Lab Technician Assistant',
      companylogo: require('../assets/img/gonzaga.jpeg'),
      date: 'July 2021 – May 2022',
    },
  ]
}

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
