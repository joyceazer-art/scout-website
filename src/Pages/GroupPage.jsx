import groups from "../data/groups";

function GroupPage({ type }) {
  const group = groups[type];

  if (!group) {
    return <h1>Group not found</h1>;
  }

  return (
    <section className="group-page">

      {/* Title */}
      <h1>{group.title}</h1>

      {/* Landscape image */}
      <img
        className="group-main-image"
        src={group.image}
        alt={group.title}
      />

      

      {/* Subgroups */}
      <div className="subgroups">

        {group.groups.map((subgroup, index) => (
          <div className="subgroup" key={index}>

            <h2>{subgroup.name}</h2>

            <div className="subgroup-names">

              {subgroup.members.map((member, memberIndex) => (
                <p key={memberIndex}>
                  {member}
                </p>
              ))}

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default GroupPage;