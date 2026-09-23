import { useState } from "react";

function Leaders() {
  const [selectedLeader, setSelectedLeader] = useState(null);

  const leaders = [
    {
      id: 1,
      name: "Leader Name",
      image: "/images/Leaders/chef peter.jpeg",
      description:
        "Write the leader's paragraph here. This is where you can introduce the leader, talk about their experience in scouting, their role, and anything else they would like people to know about them.",
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

          <p>{selectedLeader.description}</p>

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