import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto p-6 mt-16">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">About Me</h2>
      <p className="text-lg text-gray-700 mb-8">
      I am a Telecommunication Engineer with 9+ years of experience in network deployment, 
      commissioning, and operations. Specializing in BBU commissioning, microwave backhaul, 
      IP configuration, and subcontractor supervision, I ensure seamless
       network expansion and optimization.

With a Master’s degree in Communication Systems Engineering and certifications 
from Huawei, NEC, and industry leaders, I bring expertise in optical transport,
 wireless communication, and network security. Passionate about innovation, 
 I thrive in fast-paced environments, delivering high-quality solutions for reliable network performance.
      </p>

      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <Image
            src="/sample.jpg"
            alt="Sample Image"
            width={200}
            height={200}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Information Section */}
        <div className="bg-white p-6 rounded-lg shadow-md flex-grow">
          <ul className="space-y-2 text-gray-700">
            <li>
              <span className="font-semibold">Birthday:</span> 23 November 1988
            </li>
            <li>
              <span className="font-semibold">Website:</span>{" "}
              <a
                href="http://melkamusisay.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                http://melkamusisay.vercel.app/
              </a>
            </li>
            <li>
              <span className="font-semibold">Phone:</span> +251912811970 / +251904919192
            </li>
            <li>
              <span className="font-semibold">City:</span> Addis Ababa ,Ethiopia
            </li>
            <li>
              <span className="font-semibold">Age:</span> 30
            </li>
            <li>
              <span className="font-semibold">Degree:</span> Master
            </li>
            <li>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:email@example.com"
                className="text-blue-500 hover:underline"
              >
                melkamuonly@gmail.com
              </a>
            </li>
            <li>
              <span className="font-semibold">Freelance:</span> Available
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-16">
  <h3 className="text-2xl font-semibold text-gray-800 mb-6">Work Experience</h3>
  <div className="space-y-12">
    {/* ZTE Site Engineer and Subcontractor Supervisor */}
    <div>
      <h4 className="text-xl font-semibold text-gray-700">
        ZTE Site Engineer and Subcontractor Supervisor
      </h4>
      <p className="text-sm text-gray-500">From: 01/01/2025 – Present</p>
      <ul className="list-disc pl-6 mt-4 space-y-2">
        <li>BBU (Baseband Unit) Commissioning: Commissioned BBUs using UniDeploy, iTech, and BS Burning Tool to integrate and update network components.</li>
        <li>ZTE Microwave Commissioning (Backhaul Setup): Installed and configured ZTE microwave equipment to ensure stable communication links.</li>
        <li>IP Commissioning Using MobaXterm: Configured IP-based communication systems for smooth device integration and network communication.</li>
        <li>Subcontractor Supervising: Managed subcontractor teams, ensuring they met deadlines, quality standards, and project timelines.</li>
      </ul>
    </div>

    {/* Safaricom Project in Nokia (ACME Network Services) */}
    <div>
      <h4 className="text-xl font-semibold text-gray-700">
        Safaricom Project in Nokia (ACME Network Services) – Active Field Mobile Network Engineer
      </h4>
      <p className="text-sm text-gray-500">From: 2022 – 2024</p>
      <ul className="list-disc pl-6 mt-4 space-y-2">
        <li>Network Equipment Configuration: Worked with UBT-T, Nokia routers (7250 IXR-eC, 7250 IXR-R4), and BTS systems.</li>
        <li>Generator & Rectifier Monitoring: Configured and maintained various generator systems (ASCOT, TEKSAN, etc.) and rectifiers.</li>
        <li>Optical Transport & SWDM: Managed SWDM systems, working with photonic service switches (PSS 1830), amplifiers, and multiplexers.</li>
        <li>Monitoring and Troubleshooting: Experienced with router management, network monitoring, and troubleshooting using platforms like NSP, NFMP, and Rainbow Software.</li>
      </ul>
    </div>

    {/* Transmission Specialist, Operation and Maintenance Division */}
    <div>
      <h4 className="text-xl font-semibold text-gray-700">
        Transmission Specialist, Operation and Maintenance Division – Ethio Telecom
      </h4>
      <p className="text-sm text-gray-500">From: 2014 – 2019</p>
      <ul className="list-disc pl-6 mt-4 space-y-2">
        <li>Radio Network Configuration and Maintenance: Set up and maintained radio network systems and performed alarm management.</li>
        <li>Network Monitoring: Monitored EPON, E1, and data networks to ensure efficient operation and troubleshoot issues.</li>
      </ul>
    </div>
  </div>
</div>


      {/* Skills Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  <li className="flex items-center">
    <span className="text-blue-500">🌍</span> 2G/3G/4G/5G Technologies
  </li>
  <li className="flex items-center">
    <span className="text-blue-500">📡</span> BBU Commissioning & Integration
  </li>
  <li className="flex items-center">
    <span className="text-blue-500">🔗</span> Microwave Backhaul & Transmission
  </li>
  <li className="flex items-center">
    <span className="text-blue-500">🖧</span> IP Configuration & Routing
  </li>
  <li className="flex items-center">
    <span className="text-blue-500">💡</span> Network Deployment & Optimization
  </li>
  <li className="flex items-center">
    <span className="text-blue-500">⚡</span> Fiber Optic Networks
  </li>
  <li className="flex items-center">
    <span className="text-blue-500">📊</span> RF Planning & Optimization
  </li>
  <li className="flex items-center">
    <span className="text-blue-500">🔍</span> Network Security & Troubleshooting
  </li>
  <li className="flex items-center">
    <span className="text-blue-500">🛠️</span> Huawei & NEC Equipment
  </li>
  <li className="flex items-center">
    <span className="text-blue-500">🔎</span> Site Surveys & Field Testing
  </li>
</ul>

      </div>

      {/* Education Section */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Education
          </h3>
          <div className="relative">
            {/* Vertical Line on the Left */}
            {/* <div className="absolute left-0 transform -translate-x-1/2 w-1 h-full bg-gray-300"></div> */}
            <ul className="space-y-8">
              <li className="flex items-center">
                {/* Circle with bullet point */}
                <div
                  className="w-6 h-6 bg-blue-300 rounded-full 
              text-white flex items-center justify-center mb-4 mt-[-104px]"
                >
                  <span className="text-sm">•</span>
                </div>
                <div className="absolute left-0  w-1 h-3/4 bg-gray-300 mt-[100px] ml-2 z-[-1]"></div>
                <div className="ml-8">
                  <span className="font-semibold">
                  Masters of Science in Communication Systems Engineering (MSC) 
                  </span>
                  <br />
                  <span className="font-semibold">Bahir-Dar Institute of Technology (BioT), Bahir Dar (Ethiopia)
                  </span>
                  <br />
                  <span className="font-semibold">2014 - 2018</span>
                </div>
              </li>
              <li className="flex items-center">
                <div
                  className="w-6 h-6 bg-blue-300 rounded-full mt-2 
              text-white flex items-center justify-center"
                >
                  <span className="text-sm">•</span>
                </div>
                <div className="ml-8">
                  <span className="font-semibold">
                  Bachelor Degree in Electrical Engineering (BSC)
                  </span>
                  <br />
                  <span className="font-semibold">
                  Adama Science & Technology University (ASTU), Adama, Ethiopia

                  </span>
                  <br />
                  <span className="font-semibold">2008 - 2013</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* certificate */}
        <div className="mt-16">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Certifications</h3>
      <div className="relative">
        <ul className="space-y-8">
          {/* Advanced Solar Training */}
          <li className="flex items-center">
            <div
              className="w-6 h-6 bg-blue-300 rounded-full text-white flex 
              items-center justify-center mb-4 mt-[-156px]"
            >
              <span className="text-sm">•</span>
            </div>
            <div className="absolute left-0 w-1 h-3/4 bg-gray-300 mt-[9rem] ml-2 mb-4 z-[-1]"></div>
            <div className="ml-8">
              <span className="font-semibold">
                Advanced Solar Training (AST) 2019
              </span>
              <br />
              <span className="font-semibold">University of Applied Sciences and Art Lucerne (HSLU), Switzerland</span>
              <br />
              <span className="font-semibold">2019</span>
              <ul className="list-disc ml-6 mt-2 text-gray-600">
                <li>Knowledge of PV-Technology, Electrical Characteristics, and Solar System Design.</li>
                <li>Practical group exercises for off-grid systems sizing and use cases.</li>
              </ul>
            </div>
          </li>

          {/* Microwave O&M Engineer Training */}
          <li className="flex items-center">
            <div
              className="w-6 h-6 bg-blue-300 rounded-full mt-2 text-white flex items-center justify-center"
            >
              <span className="text-sm">•</span>
            </div>
            <div className="ml-8">
              <span className="font-semibold">Microwave O&M Engineer Training</span>
              <br />
              <span className="font-semibold">Huawei University, Addis Ababa</span>
              <br />
              <span className="font-semibold">Date: 2017</span>
              <ul className="list-disc ml-6 mt-2 text-gray-600">
                <li>OptiX RTN 900 configuration and troubleshooting (First and Proficient levels).</li>
                <li>Experience in iManager U2000 monitoring and mobile backhaul synchronization.</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto mt-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Downloadable Form of My Resume
        </h1>
        <p className="text-gray-700 mb-6">
          You can download the PDF format of my Resume and print it for your
          convenience.
        </p>
        <a
          href="https://drive.google.com/file/d/11_2BYbaEyGCTlesJuZjF_j4ZbbwLh7Ry/view?usp=sharing" target="_blank"
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          download
        >
          Click here to download
        </a>
      </div>
    </section>
  );
}
