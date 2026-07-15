// src/components/TopicContent.tsx
import React from 'react';

interface TopicContentProps {
  content: string[];
}

type Block = { type: 'code'; lines: string[] } | { type: 'prose'; lines: string[] };

// Case-sensitive by design: real code uses consistent casing (lowercase
// `process`/`params.`, uppercase `FROM`/`LABEL`) that ordinary sentences
// starting with the same word, capitalized, never match.
const CODE_START_RE =
  /^(import |from |def |class |print\(|return[ (]|for |while |try:|except|@\w|#!|process |params\.|workflow\s*\{|nextflow\.|tuple\(|val\(|path\(|channel\(|FROM |RUN |COPY |WORKDIR |CMD |ENTRYPOINT |ENV |ARG |EXPOSE |LABEL |VOLUME |USER |SHELL |library\(|install\.packages|git (init|clone|add|commit|push|pull|checkout|branch|status|log)\b|docker (build|run|pull|push|exec)\b|singularity |snakemake|rule \w+:)/;

// Heuristic: distinguishes literal code samples embedded in content arrays
// (e.g. Nextflow/Python/Dockerfile snippets) from ordinary prose paragraphs,
// since both are stored as plain strings in the same array.
function isCodeLine(rawLine: string): boolean {
  const line = rawLine.trim();
  if (!line) return false;
  if (/^(\s{2,}|\t)/.test(rawLine)) return true;
  if (/^[{}]$/.test(line)) return true;
  if (/^"""$/.test(line)) return true;
  if (/\\$/.test(line)) return true;
  if (/^#/.test(line)) return true;
  if (CODE_START_RE.test(line)) return true;
  if (/<-\s*\S/.test(line) && !/[.!?]$/.test(line)) return true;
  if (/^[A-Za-z_][\w.]*\s*=\s*.+[)\]"'\d]$/.test(line) && /[(){}[\]]/.test(line)) return true;
  if (/^[A-Za-z_]\w*\s*=\s*[A-Za-z_]\w*(\[[^\]]*\]|\.[A-Za-z_]\w*)+$/.test(line)) return true;
  if (/^[A-Za-z_][\w.]*\(.*\)[;,]?$/.test(line)) return true;
  if (/^[A-Za-z_][\w.]*\(.*,$/.test(line)) return true;
  if (/\s--[a-zA-Z][\w-]*/.test(line) && !/[.!?]$/.test(line)) return true;
  return false;
}

function groupContent(content: string[]): Block[] {
  const items = content.map(raw => ({
    raw,
    blank: raw.trim() === '',
    code: raw.trim() !== '' && isCodeLine(raw),
  }));

  const nextNonBlankIsCode = (fromIdx: number): boolean | null => {
    for (let j = fromIdx; j < items.length; j++) {
      if (!items[j].blank) return items[j].code;
    }
    return null;
  };

  const blocks: Block[] = [];
  let current: Block | null = null;

  items.forEach((item, i) => {
    if (item.blank) {
      // Keep the blank line only if it sits between two code lines (internal
      // spacing); otherwise it's just a paragraph separator and can be dropped.
      if (current?.type === 'code' && nextNonBlankIsCode(i + 1) === true) {
        current.lines.push('');
      }
      return;
    }

    const type: 'code' | 'prose' = item.code ? 'code' : 'prose';
    if (current && current.type === type) {
      current.lines.push(item.raw);
    } else {
      if (current) blocks.push(current);
      current = { type, lines: [item.raw] };
    }
  });
  if (current) blocks.push(current);
  return blocks;
}

const TopicContent: React.FC<TopicContentProps> = ({ content }) => {
  const blocks = groupContent(content);

  return (
    <>
      {blocks.map((block, idx) =>
        block.type === 'code' ? (
          <pre key={idx}>
            <code>{block.lines.join('\n')}</code>
          </pre>
        ) : (
          <React.Fragment key={idx}>
            {block.lines.map((line, j) => (
              <p key={j} className="text-base md:text-lg leading-relaxed text-gray-700">
                {line}
              </p>
            ))}
          </React.Fragment>
        )
      )}
    </>
  );
};

export default TopicContent;
