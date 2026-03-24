const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace font-medium with font-accent font-medium
  content = content.replace(/(?<!font-accent\s)font-medium/g, 'font-accent font-medium');
  
  // Replace font-bold with font-accent font-bold
  content = content.replace(/(?<!font-accent\s)font-bold/g, 'font-accent font-bold');
  
  // Replace font-serif font-accent font-bold with font-serif font-bold (fix for headings)
  content = content.replace(/font-serif font-accent font-bold/g, 'font-serif font-bold');
  
  // Replace font-serif font-accent font-medium with font-serif font-medium (fix for headings)
  content = content.replace(/font-serif font-accent font-medium/g, 'font-serif font-medium');

  fs.writeFileSync(file, content, 'utf8');
});

console.log('Done updating fonts!');
