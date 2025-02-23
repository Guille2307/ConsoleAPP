import yargs, { check, option } from "yargs";
import { hideBin } from "yargs/helpers";

export const yarg = yargs(hideBin(process.argv))
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "multiplication table base",
  })
  .option("l", {
    alias: "limit",
    type: "number",
    default: 10,
    describe: "multiplication table limit",
  })
  .option("s", {
    alias: "show",
    type: "boolean",
    default: false,
    describe: "Show multiplication table",
  })
  .option("n", {
    alias: "name",
    type: "string",
    default: "multiplication-table",
    describe: "Name of the file",
  })
  .option("d", {
    alias: "destination",
    type: "string",
    default: "outputs",
    describe: "Destination of the file",
  })
  .check((argv, optons) => {
    if (argv.b < 1) throw "The base must be greater than 0";
    if (argv.l < 1) throw "The limit must be greater than 0";
    if (argv.l >= 11) throw "The limit must be equal or less than 10";

    return true;
  })
  .parseSync();
