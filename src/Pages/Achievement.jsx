
const achievements = [
  {
    id: 1,
    title: "Sanabel",
    image: "/images/sanabal4.jpeg",
    description: `حصول كل من:
    مساعدة قائدة المجموعة القائدة مونيكا عماد
قائدة المرشدات چيسيكا عازر
قائدة الزهرات كرستينا شريف
رائدة الرهط القائدة كرما هاني
علي فولار سيدة السنابل`,
  },
  {
    id: 2,
    title: "Départ",
    image: "/images/enalak2.jpeg",
    description: "حفل انطلاق شفتان كرما هاني",
  },
  {
    id: 3,
    title: "Our Morshedat in Ruah '26",
    image: "/images/ro3ah2.jpeg",
    description:
      "مشاركة الطليعة العليا للمجموعة السابعة عشرة في معسكر الرعاة 2026، وحصولهم على المركز الرابع في الـ Pre Ruah، ومن أول عشرة مراكز في رعاة.",
  },
  
];

// Add your celebration cards here
const celebrations = [
  {
    id: 1,
    title: "Chantal Alian",
    image: "/images/chantal2.jpeg",
    description: "The 17th Group would like to congratulate Cheftaine Sandra Maurice on the arrival of baby Chantal!",
  },
  
];

function AchievementSection({ title, items }) {
  return (
    <section className="achievement-section">
      <h1>{title}</h1>

      <div className="achievements-grid">
        {items.map((item) => (
          <div className="achievement-card" key={item.id}>
            <img src={item.image} alt={item.title} />

            <div className="achievement-content">
              <h2 dir="auto">{item.title}</h2>
              <p dir="auto">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section className="achievements-page">
      <AchievementSection
        title="Our Achievements"
        items={achievements}
      />

      <AchievementSection
        title="Our Celebrations"
        items={celebrations}
      />
    </section>
  );
}

export default Achievements;
