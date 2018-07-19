const emojisList = require("emojis-list");
const { map } = require("ramda");
const uuid = require("uuid");

const createEmojis = e => ({
  id: uuid.v4(),
  name: e
});

const emojis = map(createEmojis, emojisList);

module.exports = app => {
  app.get("/emojis", (req, res) => res.send(emojis));
};
