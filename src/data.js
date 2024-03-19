// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (uncomment below and import your image)
// import newLogo from "./images/yourFileName"

// Projects Images (add your images to the images directory and import below)
//import Logo from "./images/logo.svg";
import Logo from "./images/GH.svg";
import LogoOutpace from "./images/outpace.png";
import LogoISS from "./images/space-station.png";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "toma-demagn";


// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I'm a Software and Data engineer. I enjoy learning about new technologies that " +
    "could benefit my creating abilities. In parallel, I am also a cyclist and calisthenics practionner, I have worked on " +
    "personal projects I can use to improve in these fields. Take a look at my projects below !";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="logos:python" className="display-4" />,
    name: "Python",
  },
  {
    id: 2,
    skill: <Icon icon="carbon:sql" className="display-4" />,
    name: "SQL",
  },
  {
    id: 3,
    skill: <Icon icon="cib:mongodb" className="display-4" />,
    name: "MongoDB",
  },
  {
    id: 4,
    skill: <Icon icon="fa-brands:docker" className="display-4" />,
    name: "Docker",
  },
  {
    id: 5,
    skill: <Icon icon="fa-brands:github" className="display-4" />,
    name: "GitHub",
  },
  {
    id: 6,
    skill: <Icon icon="cib:gitlab" className="display-4" />,
    name: "GitLab CI/CD",
  },
  {
    id: 7,
    skill: <Icon icon="logos:java" className="display-4" />,
    name: "Java",
  },
  {
    id: 8,
    skill: <Icon icon="logos:react" className="display-4" />,
    name: "React",
  },
  {
    id: 9,
    skill: <Icon icon="logos:nodejs-icon" className="display-4" />,
    name: "Node.js",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["outpace", "ISS_status", "Calisthenics-Posture-Fixer"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "outpace",
    image: LogoOutpace,
  },
  {
    name: "ISS_status",
    image: LogoISS,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/YourEndpoint";
