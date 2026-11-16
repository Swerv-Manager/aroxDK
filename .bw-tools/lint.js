// Usage: node lint.js <files...>  — parses Liquid with Shopify's parser, validates JSON (templates/groups, section schema)
const fs = require('fs');
const { toLiquidHtmlAST } = require('@shopify/liquid-html-parser');
let bad = 0;
for (const f of process.argv.slice(2)) {
  const s = fs.readFileSync(f, 'utf8');
  try {
    if (f.endsWith('.json')) { JSON.parse(s.replace(/^\s*\/\*[\s\S]*?\*\//, '')); }
    else if (f.endsWith('.liquid')) {
      toLiquidHtmlAST(s);
      const m = s.match(/{%-?\s*schema\s*-?%}([\s\S]*?){%-?\s*endschema\s*-?%}/);
      if (m) JSON.parse(m[1]);
    }
    console.log('ok   ' + f);
  } catch (e) { bad++; console.log('FAIL ' + f + ': ' + String(e.message).split('\n').slice(0, 4).join(' | ')); }
}
process.exit(bad ? 1 : 0);
