import { GraduationCap } from "lucide-react";

const footerLinks = {
  "Quick Links": [
    { label: "Our Vision", href: "#vision" },
    { label: "About the Project", href: "#about" },
    { label: "Ecosystem", href: "#ecosystem" },
    { label: "Project Impact", href: "#impact" },
  ],
  Resources: [
    { label: "Login to LMS", href: "https://app.elearning-rhdc.com/teacher/login" },
    { label: "Leadership", href: "#leadership" },
    { label: "Gallery", href: "#gallery" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-foreground text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">
                e-Learning Rangamati
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Bringing digital learning to every corner of Rangamati.
              Supervised by Pro Better Life (PBL) Bangladesh, implemented by
              Rangamati Hill District Council, spearheaded by Ministry of
              Chittagong Hill Tracts Affairs.
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold text-white mb-4">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} e-Learning Rangamati. All rights
            reserved.
          </p>
          <p className="text-sm">
            Developed by{" "}
            <a
              href="https://viroxcloud.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-white transition-colors"
            >
              Virox Cloud
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
