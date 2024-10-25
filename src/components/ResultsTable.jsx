import React from "react";

const ResultsTable = ({ results, query }) => {
  if (!query) {
    return <p>Start searching</p>;
  }

  if (results.length === 0) {
    return <p>No result found</p>;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th data-label="#">#</th>
            <th data-label="Place Name">Place Name</th>
            <th data-label="Country">Country</th>
          </tr>
        </thead>
      </table>
      <table className="data">
        <tbody>
          {results.map((result, index) => (
            <React.Fragment key={result.id}>
              <tr>
                <td className="sl-no" data-label="#">
                  {index + 1}
                </td>
                <td className="place" data-label="Place Name">
                  {result.name}
                </td>
                <td className="country" data-label="Country">
                  <img
                    src={`https://flagsapi.com/${result.countryCode}/flat/64.png`}
                    alt={result.country}
                    className="flag-icon"
                  />
                  {result.country}
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;
