const moment = require("moment");

function main() {
  for (let i = 0; i < 10; i++) {
    console.log("compteur", i + 1);
                   console.log("moment", moment().format("DD/MM"));
                 console.log("hey                  ho!!");
  }
}

main();
