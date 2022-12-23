const { quote } = require("shell-quote");

const isWin = process.platform === "win32";

module.exports = {
  "**/*.{js,jsx,ts,tsx,mjs,cjs,svelte}": (filenames) => {
    const escapedFileNames = filenames
      .map((filename) => `"${isWin ? filename : escape([filename])}"`)
      .join(" ");
    return [
      `prettier --plugin-search-dir . --write ${escapedFileNames}`,
      `git add ${escapedFileNames}`,
    ];
  },
};

function escape(str) {
  const escaped = quote(str);
  return escaped.replace(/\\@/g, "@");
}
