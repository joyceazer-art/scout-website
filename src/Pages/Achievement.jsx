const achievements = [
  {
    id: 1,
    title: "Entelak",
    image: "/images/enalak2.jpeg",
    description:
      'انطلاق شفتلن كرمة',
  },
  {
    id: 2,
    title: "Our Morshedat in Ruah '26",
    image: "/images/ro3ah2.jpeg",
    description:
      "مشاركة الطليعة العليا للمجموعة السابعة عشرة في معسكر الرعاة 2026، وحصولهم على المركز الرابع في الـ Pre Ruah، ومن أول عشرة مراكز في رعاة.",
  },
  {
    id: 3,
    title: "Sanabel",
    image: "/images/sanabal4.jpeg",
    description: `حصول كل من:
قائدة المرشدات چيسيكا عازر 
قائدة الزهرات كرستينا شريف
مساعدة قائدة المجموعة مونيكا عماد
رائدة الرهط القائدة كرما هاني
علي فولار سيدة السنابل`,
  },
];

function Achievements() {
  return (
    <section className="achievements-page">
      <h1>Our Achievements</h1>

      <div className="achievements-grid">
        {achievements.map((achievement) => (
          <div className="achievement-card" key={achievement.id}>
            <img src={achievement.image} alt={achievement.title} />

            <div className="achievement-content">
              <h2 dir="auto">{achievement.title}</h2>
              <p dir="auto">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;