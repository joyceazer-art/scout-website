import { useState } from "react";

function Leaders() {
  const [selectedLeader, setSelectedLeader] = useState(null);

  const leaders = [
    {
      id: 1,
      name: "Abouna Nabil",
      image: "/images/Leaders/user.jpg",
      description:
        "Write the leader's paragraph here. This is where you can introduce the leader, talk about their experience in scouting, their role, and anything else they would like people to know about them.",
    },
    {
      id: 2,
      name: "Chef Peter",
      image: "/images/Leaders/chef peter.jpeg",
      description:
        "Write the leader's paragraph here. This is where you can introduce the leader, talk about their experience in scouting, their role, and anything else they would like people to know about them.",
    },
    {

      id: 3,
      name: "Cheftaine Suzi",
      image: "/images/Leaders/user.jpg",
      lang: "ar",
      description: `عامان مرّا على وجودي في المجموعة السابعة عشر، وهذه هي الحفلة الثانية لي معكم، ومع كل عام يمر أشعر أكثر بمدى سعادتي وفخري بكوني جزءًا من هذه المجموعة.

 وخلال فترة وجودي معكم، رأيت بنفسي كمّ التطور والتقدم الذي حققتموه، وكيف أنكم دائمًا تسعون إلى الأفضل، وتحاولون في كل مرة أن تكونوا نسخة أفضل من أنفسكم. رأيت الكثير من المواقف واللحظات التي جعلتني أقدّر أكثر معنى أن يكون الإنسان جزءًا من مكان يحمل كل هذا الشغف والحماس وروح التعاون.

 وفي احتفالنا بمرور 8 سنوات على إنشاء المجموعة، أحب أن أتوجه بالشكر لكل فرد فيها، من أصغر فرد إلى أكبر فرد، على كل لحظة جميلة، وكل ضحكة، وكل موقف، وكل ذكرى صنعناها معًا. قد تبدو بعض هذه التفاصيل بسيطة، لكنها بالنسبة لي أصبحت جزءًا جميلًا من ذكرياتي، وأتمنى أن تظل معنا دائمًا.

 شكرًا لكل شخص كان سببًا في جعل هذه الرحلة أجمل، وشكرًا لكل من ساهم، ولو بشيء بسيط، في أن تصل المجموعة إلى ما هي عليه اليوم.

 أنا دائمًا فخورة بكم، وفخورة بكل ما تحققونه، والأهم أنني فخورة بوجودي معكم وكوني جزءًا من هذه العائلة الجميلة. ❤️

 كل عام والمجموعة السابعة عشر من تقدم إلى تقدم، وكل عام وأنتم تحققون المزيد من النجاح والتطور. وأتمنى أن تظل سنواتنا القادمة مليئة بالإنجازات، والضحكات، واللحظات الجميلة، وأن نصنع معًا ذكريات أكثر وأكثر، تظل معنا مهما مرّ الوقت.

 كل عام والمجموعة السابعة عشر بخير، وكل عام ونحن معًا. `

    },
    {
      id: 4,
      name: "Chef Kenzi",
      image: "/images/Leaders/user.jpg",
      description:
        `I would like to wish you and all the 17th Group a happy group anniversary.
Your hard work and dedication will never go unnoticed.
Here’s to another year of success, growth, and happiness.
Keep up the good work and spirit.`},
{
      id: 5,
      name: "Cheftaine Kouki & Chef Dany",
      image: "/images/Leaders/cheftaine kouki.jpeg",
      description:
        `عامان مرّا على وجودي في المجموعة السابعة عشر، وهذه هي الحفلة الثانية لي معكم، ومع كل عام يمر أشعر أكثر بمدى سعادتي وفخري بكوني جزءًا من هذه المجموعة.

 وخلال فترة وجودي معكم، رأيت بنفسي كمّ التطور والتقدم الذي حققتموه، وكيف أنكم دائمًا تسعون إلى الأفضل، وتحاولون في كل مرة أن تكونوا نسخة أفضل من أنفسكم. رأيت الكثير من المواقف واللحظات التي جعلتني أقدّر أكثر معنى أن يكون الإنسان جزءًا من مكان يحمل كل هذا الشغف والحماس وروح التعاون.

 وفي احتفالنا بمرور 8 سنوات على إنشاء المجموعة، أحب أن أتوجه بالشكر لكل فرد فيها، من أصغر فرد إلى أكبر فرد، على كل لحظة جميلة، وكل ضحكة، وكل موقف، وكل ذكرى صنعناها معًا. قد تبدو بعض هذه التفاصيل بسيطة، لكنها بالنسبة لي أصبحت جزءًا جميلًا من ذكرياتي، وأتمنى أن تظل معنا دائمًا.

 شكرًا لكل شخص كان سببًا في جعل هذه الرحلة أجمل، وشكرًا لكل من ساهم، ولو بشيء بسيط، في أن تصل المجموعة إلى ما هي عليه اليوم.

 أنا دائمًا فخورة بكم، وفخورة بكل ما تحققونه، والأهم أنني فخورة بوجودي معكم وكوني جزءًا من هذه العائلة الجميلة. ❤️

 كل عام والمجموعة السابعة عشر من تقدم إلى تقدم، وكل عام وأنتم تحققون المزيد من النجاح والتطور. وأتمنى أن تظل سنواتنا القادمة مليئة بالإنجازات، والضحكات، واللحظات الجميلة، وأن نصنع معًا ذكريات أكثر وأكثر، تظل معنا مهما مرّ الوقت.

 كل عام والمجموعة السابعة عشر بخير، وكل عام ونحن معًا. ❤️✨`,
    },

  ];

  /* =========================
     INDIVIDUAL LEADER
     ========================= */

  if (selectedLeader) {
    return (
      <section className="leader-detail">

        <div className="leader-detail-content">

          <img
            src={selectedLeader.image}
            alt={selectedLeader.name}
            className="leader-detail-image"
          />

          <h1>{selectedLeader.name}</h1>

          <div className="leader-text">
  {selectedLeader.description
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line, index) => (
      <p key={index} dir="auto">
        {line}
      </p>
    ))}
</div>

          {/* Back button */}
          <button
            className="leader-back-button"
            onClick={() => setSelectedLeader(null)}
          >
            ← Back to Leaders
          </button>

        </div>

      </section>
    );
  }

  /* =========================
     LEADERS LIST
     ========================= */

  return (
    <section className="leaders-page">

      <h1>Our Leaders</h1>

      <div className="leaders-grid">

        {leaders.map((leader) => (
          <div
            className="leader-card"
            key={leader.id}
            onClick={() => setSelectedLeader(leader)}
          >

            <img
              src={leader.image}
              alt={leader.name}
            />

            <h2>{leader.name}</h2>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Leaders;