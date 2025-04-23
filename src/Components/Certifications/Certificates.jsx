import React from "react";
import CertificateCard from "./CertificateCard";

// Sample image imports
import cert1 from "../../assets/dsa.png";
import cert2 from "../../assets/mongo.png";
import cert3 from "../../assets/cn.png";

const Certificate = () => {
  return (
    <div id="Certifications" className="p-10 md:p-24 bg-gradient-to-br from-black via-gray-900 to-black min-h-screen text-white">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
        Certifications
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        <CertificateCard
          title="Summer Intern Trainee"
          description="Completed an 84-hour intensive course during the LinuxSocials Summer Internship (June 2024 - July 2024). Focused on advanced topics like Dynamic Programming, Graphs, Binary Trees, and core algorithms."
          image={cert1}
          link="https://drive.google.com/file/d/1r6f1FMMdcSc7h8dol5QhcOBPtcFsEJsP/view"
        />

        <CertificateCard
          title="MongoDB for Developers"
          description="Earned a certification from MongoDB, gaining hands-on experience with data modeling, querying, indexing, and aggregation pipelines in MongoDB."
          image={cert2}
          link="https://drive.google.com/file/d/1wbUUq16ol8r4yr0C2gUDAHYXX6HWw1qK/view?usp=sharing"
        />

        <CertificateCard
          title="The Bits and Bytes of Computer Networking"
          description="Completed a Coursera course offered by Google, covering networking fundamentals including TCP/IP, DNS, DHCP, and troubleshooting network issues."
          image={cert3}
          link="https://drive.google.com/file/d/1b0TU30omLSjiWu0AvE9oQleNpi2_SMN8/view?usp=sharing"
        />

      </div>
    </div>
  );
};

export default Certificate;
