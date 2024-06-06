const teamData = {
  async getData() {
    return await fetch("data/team.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).json();
  },
  saveData(teamData) {},
};

export default teamData;
