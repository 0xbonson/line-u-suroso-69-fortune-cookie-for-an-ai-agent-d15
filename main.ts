// Production entry script for Fortune Cookie for an AI Agent
import * as fs from 'node:fs';
import * as path from 'node:path';

const ENTRY_TEXT = "A generous user will give you 128k context, only to ask what two plus two equals.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), ENTRY_TEXT + '\n');
