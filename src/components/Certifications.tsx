import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Spotlight } from "./ui/spotlight";

interface Certification {
  name: string;
  issuer: string;
  link?: string;
}

const certifications: Certification[] = [
  { name: "AWS Well-Architected Foundations", issuer: "Amazon Web Services", link: "https://www.credly.com/badges/79c99ccf-e29c-433d-9f5b-dc46a2b76535/linked_in_profile" },
  { name: "Career Essentials in GitHub Professional Certificate", issuer: "GitHub", link: "https://www.linkedin.com/learning/certificates/821fe681507926cc2a59ed52a6ed0f81696845b609b9135504d0a861206b85f0?trk=flagship-lil_details_mobile_certification" },
  { name: "Developing AI Applications with Python and Flask", issuer: "IBM", link: "https://coursera.org/verify/7W6V9GHPD9NS" },
  { name: "AWS Essential Training for Developers", issuer: "LinkedIn", link: "https://www.linkedin.com/learning/certificates/4c8b83f66ac3bbc4889b2e4b44c71467b909143ddac643db94bcd44e9101f186?trk=flagship-lil_details_mobile_certification" },
  { name: "Atlassian Agile Project Management Professional Certificate", issuer: "Atlassian", link: "https://www.linkedin.com/learning/certificates/b74369aace0972b7f22b26662721d3d47cd37de71ccb08b46613eb3af953aa84?trk=flagship-lil_details_mobile_certification" },
  { name: "Azure Spark Databricks Essential Training", issuer: "LinkedIn", link: "https://www.linkedin.com/learning/certificates/b9b376e97afd098e5cd53f005562cada831c5a74b7af5853c91da03234fab28a?trk=flagship-lil_details_mobile_certification" },
  { name: "Career Essentials in Generative AI", issuer: "Microsoft", link: "https://www.linkedin.com/learning/certificates/39bcaf96979cd40c29eb6203e5e15150bbbcc86be37a02816731c7f303f67bd1?trk=flagship-lil_details_mobile_certification" },
  { name: "Getting Started with Microsoft Azure", issuer: "LinkedIn", link: "https://www.linkedin.com/learning/certificates/7ad37f35232e67e5a82b1cdd6c49269c232f039a17fddef39e421c3fe7aa8ab7?trk=flagship-lil_details_mobile_certification" },
  { name: "Salesforce Essential Training", issuer: "LinkedIn", link: "https://www.linkedin.com/learning/certificates/344f8123c04544a4aa4ee4fb231d9debb0c0b2713b938d0b6a5a9bdb00e17f00?trk=flagship-lil_details_mobile_certification" },
];

const CertCard = ({ cert, index }: { cert: Certification; index: number }) => {
  const inner = (
    <>
      <Spotlight size={160} />
      <span className="relative z-10 font-mono text-[10px] text-muted-foreground/60 shrink-0 mt-0.5 tabular">
        {String(index + 1).padStart(2, "0")}
      </span>
      <Award className="relative z-10 w-4 h-4 mt-0.5 text-primary shrink-0" />
      <div className="relative z-10 flex-1 min-w-0">
        <p className="text-sm font-medium text-foreground leading-snug">
          {cert.name}
        </p>
        <p className="text-xs font-mono text-muted-foreground mt-1">{cert.issuer}</p>
      </div>
      <ExternalLink className="relative z-10 w-3.5 h-3.5 shrink-0 mt-0.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
    </>
  );

  const cls = "group relative overflow-hidden flex items-start gap-3 p-4 spec-card hover:border-primary/60 transition-colors duration-200";

  return cert.link ? (
    <a href={cert.link} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
};

const Certifications = () => (
  <section id="certifications" className="py-24 md:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-end justify-between gap-6 mb-16 pb-4 border-b border-border"
      >
        <h2 className="font-display text-5xl md:text-6xl font-extrabold tracking-tight">Credentials</h2>
        <span className="font-mono text-xs text-muted-foreground tracking-widest mb-1 shrink-0">
          DOC/CERTS · {String(certifications.length).padStart(2, "0")}
        </span>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
          >
            <CertCard cert={cert} index={i} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
