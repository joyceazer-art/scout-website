import { useState } from "react";

function Leaders() {
  const [selectedLeader, setSelectedLeader] = useState(null);

  const leaders = [
    {
      id: 1,
      name: "Abouna Tarek",
      image: "/images/Leaders/user.jpg",
      description:
        "Write the leader's paragraph here. This is where you can introduce the leader, talk about their experience in scouting, their role, and anything else they would like people to know about them.",
    },
    {
      id: 2,
      name: "Chef Peter",
      image: "/images/Leaders/chef peter.jpeg",
      description:
        `
في احتفال المجموعة السابعة عشر – ٢٠٢٦
بمناسبة مرور ٨ سنوات على تأسيس المجموعة

ثماني سنوات من العمل الكشفي، والتجارب، والمواقف التي صنعت ذكريات ستظل جزءًا من حكاية المجموعة السابعة عشر. ثماني سنوات شاركت في بنائها قائدات وجوالات ومرشدات وزهرات، تركت كل واحدة منهن بصمتها وأضافت قطعة جديدة إلى هذه الرحلة.

ويأتي شعار حفلتنا هذا العام “One More Memory, One More Piece” ليذكّرنا بأن كل لقاء يضيف ذكرى، وكل تجربة تجمعنا تقرّبنا أكثر، وأن الأشخاص المميزين هم من يصنعون الذكريات التي تبقى.

ومن هنا يرتبط شعار حفلتنا بشعار حركتنا لهذا العام «محبتنا نور خدمتنا»؛ فالمحبة هي التي تجمعنا، والخدمة هي التي تمنح وجودنا معنى، والأثر الطيب هو ما يجعل ذكرياتنا ممتدة حتى بعد مرور السنوات.

ولا يفوتني في هذه المناسبة أن أتقدم بخالص الشكر والتقدير إلى الآباء الكهنة، على محبتهم ودعمهم واهتمامهم بالمجموعة، وعلى ما يقدمونه من تشجيع ومساندة يساعدان على استمرار رسالتها ونمو بناتها في جو من الإيمان والمحبة والخدمة. نصلي أن يبارك الله خدمتهم ويمنحهم القوة والحكمة لمواصلة رسالتهم.

إلى قائدات وأفراد المجموعة السابعة عشر، أتمنى أن تواصلن صناعة ذكريات جميلة، وأن تحافظن على روح الفريق والمحبة، وأن تجعلْنَ من كل تجربة فرصة للتعلم، ومن كل خدمة فرصة لترك أثر حقيقي في حياة الآخرين. ونطلب شفاعة القديسة ريتا، شفيعة المجموعة، أن تحفظ بنات المجموعة وقائداتها، وترافق خطواتهن، وتمنحهن نعمة الثبات والمحبة، ليواصلن مسيرتهن الكشفية بروح واحدة وقلب مملوء بالعطاء.

أهنئكنّ بمرور ثماني سنوات على تأسيس المجموعة السابعة عشر، وإلى سنوات قادمة نصنع فيها ذكريات أجمل، ونحقق إنجازات أكبر، وتظل محبتنا نورًا لخدمتنا.

محبتنا نور خدمتنا ❤️

القائد بيتر سكر (الصقر المنطلق)
القائد العام لحركة كشافة ومرشدات وادي النيل
٢٠٢٦

`
    },
    {

      id: 3,
      name: "Cheftaine Suzi",
      image: "/images/Leaders/suzi4.jpeg",
      lang: "ar",
      description: `عامان مرّا على وجودي في المجموعة السابعة عشر، وهذه هي الحفلة الثانية لي معكم، ومع كل عام يمر أشعر أكثر بمدى سعادتي وفخري بكوني جزءًا من هذه المجموعة.

 وخلال فترة وجودي معكم، رأيت بنفسي كمّ التطور والتقدم الذي حققتموه، وكيف أنكم دائمًا تسعون إلى الأفضل، وتحاولون في كل مرة أن تكونوا نسخة أفضل من أنفسكم. رأيت الكثير من المواقف واللحظات التي جعلتني أقدّر أكثر معنى أن يكون الإنسان جزءًا من مكان يحمل كل هذا الشغف والحماس وروح التعاون.

 وفي احتفالنا بمرور 8 سنوات على إنشاء المجموعة، أحب أن أتوجه بالشكر لكل فرد فيها، من أصغر فرد إلى أكبر فرد، على كل لحظة جميلة، وكل ضحكة، وكل موقف، وكل ذكرى صنعناها معًا. قد تبدو بعض هذه التفاصيل بسيطة، لكنها بالنسبة لي أصبحت جزءًا جميلًا من ذكرياتي، وأتمنى أن تظل معنا دائمًا.

 شكرًا لكل شخص كان سببًا في جعل هذه الرحلة أجمل، وشكرًا لكل من ساهم، ولو بشيء بسيط، في أن تصل المجموعة إلى ما هي عليه اليوم.

 أنا دائمًا فخورة بكم، وفخورة بكل ما تحققونه، والأهم أنني فخورة بوجودي معكم وكوني جزءًا من هذه العائلة الجميلة. ❤️

 كل عام والمجموعة السابعة عشر من تقدم إلى تقدم، وكل عام وأنتم تحققون المزيد من النجاح والتطور. وأتمنى أن تظل سنواتنا القادمة مليئة بالإنجازات، والضحكات، واللحظات الجميلة، وأن نصنع معًا ذكريات أكثر وأكثر، تظل معنا مهما مرّ الوقت.

 كل عام والمجموعة السابعة عشر بخير، وكل عام ونحن معًا.
 القائدة سوزى سمير
الصقر الطموح `

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
        `🎉❤️ كل سنة والمجموعة 17 بخير ❤️🎉

مبروك مرور 8 سنوات على تأسيس ونجاح المجموعة 17 🥳👏

8 سنين مليانة ذكريات، تعب، مجهود، نجاحات، وضحك وأجمل لحظات لا تتنسي ❤️

وأنا سعيدة وفخورة جدًا إني كنت من أوائل القادة اللي شاركوا في افتتاح المجموعة وبدايتها، وشوفتها وهي بتكبر وتحقق كل يوم خطوة جديدة 🌟

ربنا يبارك في كل قائدة وكل بنت كانوا وما زالوا جزء من المجموعة، ويكمل مشواركم بكل نجاح ومحبة وعطاء ❤️⚜️

كل سنة والمجموعة 17 أقوى وأجمل، وعقبال 100 سنة نجاح وتأثير ومحبة 🎂🎉⚜️

فخورة إني كنت جزء من البداية ❤️

 ق/ كارولين فؤاد شيخو و زوجي ق/دانى روبير شامية 
الدولفن المبادر و الحصان المتفانى`,
    },
    {
      id: 6,
      name: "16th Group ",
      image: "/images/sgwen16.jpeg",
      description:
        `The 16th Group SGWEN proudly congratulates the 17th Group SGWEN on its 8th Anniversary.

May your flame of scouting continue to shine brighter, your brotherhood grow stronger, and your service leave a lasting impact.

Happy 8th Anniversary, 17th Group! 🎉⚜️`},

{
      id: 7,
      name: "13th Group ",
      image: "/images/sgwen13.jpeg",
      description:
        `Congratulations to Group 17 from all of us at Group 13! ♥️⚜️
Wishing you many more years of scouting, friendship, and unforgettable memories. ⚜️`},

{
      id: 8,
      name: "Sho3ba Scouts & Guides",
      image: "/images/Leaders/cheframy.jpeg",
      description:
        `أهنئ المجموعة السابعة عشر كشافة ومرشدات وادي النيل على احتفالها بعامها الثامن ⚜️ 
ثمانية اعوام من العطاء والخدمة وبناء الأجيال، مع خالص التمنيات بمزيد من النجاح والعطاء ⚜️ 
ق / رامى هانى 
`},
{
      id: 9,
      name: "Cheftaine Monica",
      image: "/images/Leaders/monica.jpeg",
      description:
        `💚⚜️ ٨ سنين من العطاء.. ٨ سنين من الخدمة والانتماء! ⚜️💚

بنحتفل بمرور ٨ سنين على حكاية المجموعة الـ١٧، سنين مليانة نشاط، وخدمة، وذكريات، وأثر بنسيبه في كل مكان.

كل سنة ومجموعتنا أقوى بروح أفرادها، ومستمرين مع بعض في رسالتنا وعطائنا. ❤️

٨ سنين عدّوا.. والحكاية لسه مكملة! ✨⚜
`},
{
      id: 10,
      name: "Chef Ragy Khairy",
      image: "/images/Leaders/user.jpg",
      description:
        `Chef Ragy Khairy and his family congratulate the 17th Group on its 8th anniversary`},

  {
      id: 11,
      name: "Chef John Gamal",
      image: "/images/Leaders/user.jpg",
      description:
        `Chef John Gamal and his family congratulate the 17th Group on its 8th anniversary`},

        {
      id: 12,
      name: "Cheftaine Sandra Maurice",
      image: "/images/Leaders/sandra.jpeg",
      description:
        `بكل الحب والتقدير، أتقدم بخالص التهاني للمجموعة الكشفية السابعة عشرة بمناسبة الحفلة الكشفية السنوية الثامنة.

كل سنة وأنتم رمز للصداقة، والمحبة، والعطاء، وكل سنة وروح الكشافة الجميلة بتجمعنا على الخير والخدمة.

ويسعدني أن أكون جزءًا من هذه الأسرة الكشفية الجميلة، وأن أواصل معكم مسيرة الخدمة والعطاء، التي تجمعنا على قيم المحبة والانتماء والعمل بروح الفريق.

أتمنى لكم حفلة مليانة فرحة وذكريات حلوة، وسنين جاية مليانة نجاح وتميز، ونفضل دايمًا مع بعض، أخوات في الكشافة، تجمعنا روح واحدة ورسالة جميلة.

كل سنة والمجموعة السابعة عشرة بخير، وإلى مزيد من العطاء والنجاح، ونفضل دايمًا مع بعض في طريق الخدمة والمحبة.`},


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