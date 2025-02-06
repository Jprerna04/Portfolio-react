import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
AOS.init();

export default function Experience() {
  return (
    <div>
      <section id="experience" className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
        <div data-aos='fade-up' data-aos-delay='300' className='flex flex-col'>
        <h1 className="text-3xl font-medium text-gray-900 mb-6">Experience</h1>
          {/* First Experience */}
          <div className="flex justify-between items-start mb-6">
            <div className="w-3/4">
              <h2 className="text-xl font-bold">India Expansion Lead</h2>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Women In Tech India</h3>
              <p className="text-sm text-gray-500">
                Led the onboarding process and spearheaded initiatives to enhance awareness and outreach for the Women In Tech India community. 
                Implemented strategies to foster engagement and promote the organization’s mission, resulting in increased participation and impact within the community. 
                Collaborated and organized national-level events with the team, including impactful partnerships with CNN, Annalect, Omnicom, IIITD, and others.
              </p>
              <p><b>Skills: </b>Team Management, Leadership, Event Planning and Coordination, Interpersonal 
              & Communication Skills</p>
              
            </div>
            <p className="text-sm text-gray-400 w-1/4 text-right">May 2023 – Present</p>
          </div>
          {/* Second Experience */}
          <div className="flex justify-between items-start mb-6">
            <div className="w-3/4">
              <h2 className="text-xl font-bold">Social Media & Content Head</h2>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">nameSpace Community</h3>
              <p className="text-sm text-gray-500">
                Promoted to lead the content team at nameSpace Community, the most active technical society at our college. 
                Led the creation and execution of content strategies for the community's social handles, organizing both 
                online and offline events, including hackathons. As a technical content writer, I produced articles on Web3, 
                Web2, and Cybersecurity for platforms like Hashnode, Twitter, and Instagram, driving increased engagement 
                and community growth.
              </p>
              <p><b>Skills: </b>Technical Writing, Social Media Management, Event Organisation, Web Delelopment, 
              Problem-Solving</p>
            </div>
            <p className="text-sm text-gray-400 w-1/4 text-right">January 2023 - Present</p>
          </div>
        </div>
          
        </div>
      </section>
      {/* Achievements Section */}
      <section id="achievements" className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
        <div data-aos='fade-up' data-aos-delay='300' className='flex flex-col'>
        <h2 className="text-3xl font-medium text-gray-900 mb-6">Achievements</h2>
          <div className="flex justify-between gap-6">
            {/* Card 1 */}
            <div className="w-1/4 p-4 border rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">DSA</h3>
              <p className="text-sm text-gray-500">
              Solved <b>400+ DSA</b> problems across platforms like LeetCode, CodeChef, 
              and Codeforces, actively participating in multiple coding contests 
              and consistently honing my algorithmic skills.
              </p>
            </div>
            {/* Card 2 */}
            <div className="w-1/4 p-4 border rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Open Source Contributions</h3>
              <p className="text-sm text-gray-500">
              Contributed to impactful open-source projects such as <b>Hacktoberfest and GirlScript Summer 
              of Code</b>, showcasing my collaborative development skills and commitment to community-driven 
              initiatives.
              </p>
            </div>
            {/* Card 3 */}
            <div className="w-1/4 p-4 border rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Hackathons & Academics</h3>
              <p className="text-sm text-gray-500">
              Cleared the Smart India Hackathon (SIH) university-level round twice. Additionally, 
              secured a <b>top 10</b> ranking nationwide in Developer’s Augmented Hackathon. Maintained a 
              strong academic performance with a <b>CGPA of 8.88</b> over the past five semesters. 
              </p>
            </div>
            {/* Card 4 */}
            <div className="w-1/4 p-4 border rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Communities</h3>
              <p className="text-sm text-gray-500">
              Selected as a SheCodes Foundation Scholar and awarded the <b>SheCodes
              Pro Scholarship</b> for a 6-month advanced coding program. Also selected to be a mentee at Codess Cafe, 
               an exclusive community for women in tech, after being chosen from thousands of applicants. 
              </p>
            </div>
          </div>
        </div>
          
        </div>
      </section>
    </div>
  );
}
