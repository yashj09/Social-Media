import codephoto from 'codephoto';

const htmlCode = `
// Your JavaScript code to be captured
function greet() {
  console.log('Hello, CodePhoto!');
}
<p>
// Call the function
greet();
`;

const codeType = 'javascript';

const screenshotBuffer = await codephoto.takeScreenshot(htmlCode, codeType);

import fs from 'fs';

fs.writeFileSync('screenshot.png', screenshotBuffer);
