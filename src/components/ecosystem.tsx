import {
  Radio,
  FileVideo,
  MonitorPlay,
  Laptop,
  Zap,
  Wifi,
} from "lucide-react";

const pillars = [
  {
    icon: Radio,
    title: "The Central Studio Hub",
    desc: "The Studio serves as the connection point between expert teachers and remote schools. From the studio, subject experts conduct live classes and provide specialized academic support to students.",
    color: "text-red-600 bg-red-100",
  },
  {
    icon: FileVideo,
    title: "Digital Contents",
    desc: "Interactive, curriculum-aligned learning materials including HD animations, instructional videos, presentations and assessment resources.",
    color: "text-amber-600 bg-amber-100",
  },
  {
    icon: MonitorPlay,
    title: "Learning Management System",
    desc: "A centralized cloud-based platform connecting teachers and students with courses, assignments, assessments and virtual learning.",
    color: "text-green-600 bg-green-100",
  },
  {
    icon: Laptop,
    title: "Smart Classrooms",
    desc: "Technology-enabled classrooms designed to support multimedia, interactive and digital learning.",
    color: "text-blue-600 bg-blue-100",
  },
  {
    icon: Zap,
    title: "Reliable Power",
    desc: "Power back-up and solar supported solutions designed to help sustained digital learning facilities in areas with challenging electricity access.",
    color: "text-purple-600 bg-purple-100",
  },
  {
    icon: Wifi,
    title: "Connected Schools",
    desc: "Internet connectivity enabling remote schools to access online educational resources, LMS services, and virtual classes.",
    color: "text-teal-600 bg-teal-100",
  },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            One Connected Ecosystem for Better Learning
          </h2>
          <p className="mt-4 text-muted text-lg">
            Technology, content, connectivity and teacher support working
            together to create a connected learning environment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group p-6 rounded-2xl border border-border bg-white hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${p.color}`}
              >
                <p.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
