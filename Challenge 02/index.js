// Challenge 02 Shorthand Property Names

function formatMessage(name, id, avatar) {
  return {
    name,
    id,
    avatar,
    timestamp: Date.now(),
    save() {
      console.log('Message saved');
    },
  };
}
