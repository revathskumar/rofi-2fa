const fs = require("fs");

const YAML = require("yaml");
var totp = require("totp-generator");

const configFilePath = `${process.env["HOME"]}/2fa.yml`;

const getConfig = filePath => {
  if (!fs.existsSync(filePath)) {
    throw new Error(
      `2fa.yml is missing in your home directory (${process.env["HOME"]})`
    );
  }

  const file = fs.readFileSync(filePath, "utf8");
  return YAML.parse(file);
};

const generateTotps = () => {
  try {
    const { apps } = getConfig(configFilePath);
    const text = apps
      .map(app => {
        const otp = totp(app.secret);
        return `${app.label} :: ${otp}`;
      })
      .join('\n');
    return text;
  } catch (error) {
    return error.message;
  }
};

module.exports = generateTotps;
