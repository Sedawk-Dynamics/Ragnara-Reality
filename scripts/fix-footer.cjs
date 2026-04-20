const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (file.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('<Navbar />') && !content.includes('<Footer />')) {
        // Add import
        content = content.replace(
          'import { Navbar } from "@/components/navbar"',
          'import { Navbar } from "@/components/navbar"\nimport { Footer } from "@/components/footer"'
        );
        // Find the last </div> and replace it with <Footer />\n    </div>
        const lastDivIndex = content.lastIndexOf('</div>');
        if (lastDivIndex !== -1) {
          content = content.substring(0, lastDivIndex) + '  <Footer />\n    </div>' + content.substring(lastDivIndex + 6);
          fs.writeFileSync(fullPath, content);
          console.log('Fixed', fullPath);
        }
      }
    }
  }
}

processDir(path.join(__dirname, '../app'));
