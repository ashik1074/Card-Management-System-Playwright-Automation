// utils/runtime.store.js
import fs from 'fs';
import path from 'path';

// ✅ Save JS object to JSON (creates folder if missing)
export function saveRuntime(filePath, dataObject) {
  const absolutePath = path.resolve(filePath);
  const dir = path.dirname(absolutePath);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(absolutePath, JSON.stringify(dataObject, null, 2), 'utf-8');
}

// ✅ Load JSON to JS object (returns {} if file missing)
export function loadRuntime(filePath) {
  const absolutePath = path.resolve(filePath);

  if (!fs.existsSync(absolutePath)) return {};

  const raw = fs.readFileSync(absolutePath, 'utf-8');
  return JSON.parse(raw);
}
