import fs from "fs";

(function () {
  const input = JSON.parse(fs.readFileSync("input.json"));

  console.log("Log test")

  const result = [
    {
      notify: true,
      result: 'OK',
      result_html: "<div>Test sandbox checker</div><div>Result: OK</div>"
    }
  ];

  fs.writeFileSync("output.json", JSON.stringify(result));
})();
