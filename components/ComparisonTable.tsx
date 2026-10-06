/** Tabla de 2 columnas; la segunda va resaltada en teal (ops). */
export default function ComparisonTable({
  caption,
  headers,
  rows,
}: {
  caption: string;
  headers: [string, string];
  rows: [string, string][];
}) {
  return (
    <div className="overflow-hidden rounded-2xl shadow-card">
      <table className="w-full table-fixed border-collapse text-left text-sm sm:text-base">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr>
            <th scope="col" className="bg-white px-4 py-4 font-semibold text-ink sm:px-6">
              {headers[0]}
            </th>
            <th scope="col" className="bg-ops px-4 py-4 font-semibold text-white sm:px-6">
              {headers[1]}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([before, after]) => (
            <tr key={before}>
              <th
                scope="row"
                className="border-t border-ink/10 bg-white px-4 py-4 align-top font-normal text-muted sm:px-6"
              >
                {before}
              </th>
              <td className="border-t border-white/15 bg-ops px-4 py-4 align-top font-medium text-white sm:px-6">
                {after}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
