export default function Impact() {
  return (
    <section id="impact" className="py-20 lg:py-28 bg-muted-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center">
          Project Impact
        </h2>

        <div className="mt-10 space-y-6 text-muted text-lg leading-relaxed">
          <p>
            The E-Learning Project is designed to reduce the educational
            challenges caused by geographical remoteness by creating a connected
            and technology-enabled learning environment in CHT schools.
            Initially, 53 out of the 100 enlisted high schools have received
            the project&apos;s core facilities, including smart classroom
            equipment, internet connectivity, digital learning content, LMS
            access, and solar power support.
          </p>
          <p>
            These facilities work together to enhance classroom teaching and
            provide students with greater access to quality educational
            resources. Through the central teaching studio, subject experts and
            teachers will be able to deliver lessons to connected remote
            schools, while the LMS supports continuous access to learning
            materials, assignments, assessments, and other digital resources.
            Reliable power solutions ensure that these digital facilities remain
            functional in schools facing electricity challenges.
          </p>
          <p>
            Following successful implementation of the initial 53 schools, the
            remaining 47 high schools will gradually be brought under the
            project, extending the same facilities and services to all 100
            enlisted schools and establishing a connected digital learning
            ecosystem across Rangamati District.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-6">
          <div className="bg-primary text-white rounded-xl p-6 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold">53</div>
            <div className="mt-1 text-sm text-white/80 font-medium">
              Schools Equipped
            </div>
          </div>
          <div className="bg-secondary text-white rounded-xl p-6 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold">47</div>
            <div className="mt-1 text-sm text-white/80 font-medium">
              Schools Remaining
            </div>
          </div>
          <div className="bg-foreground text-white rounded-xl p-6 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold">100</div>
            <div className="mt-1 text-sm text-white/80 font-medium">
              Total Schools
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
