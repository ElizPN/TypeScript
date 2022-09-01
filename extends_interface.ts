interface NewHuman {
  name: string;
  hobbies: string[];
}

interface Developer extends NewHuman {
  code: () => void;
}

const me: Developer = {
  code: () => console.log("Headphones on. Coffee brewed. Editor open."),
  name: "Corrina",
  hobbies: ["Building rockets"],
};

console.log(me.code());
