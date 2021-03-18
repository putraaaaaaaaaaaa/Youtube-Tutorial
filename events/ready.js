const client = require("../server");

client.on("ready", () => {
  client.user
    .setActivity("Tower of Demon", { type: "STREAMING" })
    .then(presence => console.log(`${client.user.username} Siap meluncur`))
    .catch(console.error);
});