module.exports = {
  status : "idle",
  name : "ready",
  once : true,
  execute(client) {
    client.user.setActivity({
      type: "STREAMING",
      name: `Music Creator by Raveesh`,
    });
    console.log(`Ready! Logged in as ${client.user.tag}`);
  },
};
