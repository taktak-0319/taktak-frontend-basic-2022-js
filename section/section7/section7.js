const character = {
  id: 1,
  name: "スライム",
  hp: 50,
};

const addMP = (x) => {
  added = {
    ...character,
    mp: x,
  };
  return added;
};

const updateHP = (x) => {
  character.hp -= 15;
  return character;
};

const LookUpName = () => {
  return character.name;
};

module.exports = { character, addMP, updateHP, LookUpName };
