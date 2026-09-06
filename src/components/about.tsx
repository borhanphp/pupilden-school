export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-muted-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center">
          About the Project
        </h2>

        <div className="mt-10 space-y-6 text-muted text-lg leading-relaxed">
          <p>
            The e-Learning Project is designed to expand access to quality,
            technology-enabled education across 100 schools in 10 Upazilas of
            Rangamati District, Chittagong Hill Tracts (CHT). This project,
            supervised by Pro Better Life (PBL) Bangladesh, implemented by
            Rangamati Hill District Council and spearheaded by Ministry of
            Chittagong Hill Tracts Affairs, aims to address the challenges
            created by geographic remoteness by connecting schools, teachers,
            and students with digital learning opportunities and educational
            resources.
          </p>
          <p>
            At the heart of the project is a centralized, cloud-based Learning
            Management System (LMS) designed to serve 100 schools. The platform
            will provide digital access for teachers and students, including
            learning resources, interactive assignments, automated assessment,
            virtual classes, and high-quality educational content.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { value: "100", label: "Schools" },
            { value: "10", label: "Upazilas" },
            { value: "53", label: "Schools Equipped" },
            { value: "1", label: "Central LMS" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl p-6 text-center border border-border shadow-sm"
            >
              <div className="text-3xl font-extrabold text-primary">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
