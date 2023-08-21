import styled from 'styled-components';

interface TokensGridProps {
    tokens: Record<string, string>
    hasRemValue?: boolean
}

export function TokensGrid({ tokens, hasRemValue = false }: TokensGridProps) {
    return (
        <TableGrid>
            <TokensGridHeader>
            <tr>
                <th>Name</th>
                <th>Value</th>
                {hasRemValue && <th>Pixels</th>}
            </tr>
            </TokensGridHeader>
            <TokensGridBody>
            {Object.entries(tokens).map(([key, value]) => {
                return (
                    <tr key={key}>
                        <td>{key}</td>
                        <td>{value}</td>
                        {hasRemValue && (
                            <td>{Number(value.replace('rem', '')) * 16}px</td>
                        )}
                    </tr>
                )
            })}
            </TokensGridBody>
        </TableGrid>
    )
}

export const TableGrid = styled.table`
  width: 100%;
  font-family: sans-serif;
  color: #FFF;
  border-collapse: collapse;
`;

export const TokensGridHeader = styled.thead`
  th {
    padding: 0.75rem 1rem;
    text-align: left;
  }
`;

export const TokensGridBody = styled.tbody`
  td {
    padding: 0.75rem 1rem;
    color: #ccc;
  }

  td:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  td:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  tr:nth-child(even) td {
    background: #444;
  }
`;
