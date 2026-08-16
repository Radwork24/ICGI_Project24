// Helper function to parse and render markdown tables
export const parseMarkdownTable = (text) => {
    const lines = text.split('\n');
    const tableLines = [];
    const nonTableLines = [];
    let inTable = false;

    lines.forEach(line => {
        if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
            inTable = true;
            tableLines.push(line);
        } else if (inTable && line.trim().match(/^[\|\-\s:]+$/)) {
            tableLines.push(line); // Separator line
        } else {
            if (inTable && tableLines.length > 0) {
                // Table ended
                inTable = false;
            }
            nonTableLines.push(line);
        }
    });

    return { tableLines, nonTableLines, hasTable: tableLines.length > 0 };
};

// Render a markdown table as HTML
export const renderMarkdownTable = (tableLines) => {
    if (tableLines.length < 2) return null;

    const parseRow = (row) => {
        return row.split('|')
            .map(cell => cell.trim())
            .filter(cell => cell.length > 0);
    };

    const headerCells = parseRow(tableLines[0]);
    const dataRows = tableLines.slice(2).map(parseRow); // Skip separator row

    return {
        headers: headerCells,
        rows: dataRows
    };
};
