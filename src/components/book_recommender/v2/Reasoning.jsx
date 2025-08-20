const Reasoning = ({ reason, loading }) => {
  const hasReason = reason && Object.keys(reason).length > 0;
  
  return (
    <div className="bg-card p-4 rounded-lg shadow-md mb-6 z-10 max-w-2xl w-full">
      <h3 className="text-lg font-semibold mb-2 text-primary text-left">Smart Filters:</h3>
      
      {loading ? (
        <div className="text-sm text-muted-foreground text-left">
          <div className="animate-pulse">
            <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-muted rounded w-1/2"></div>
          </div>
        </div>
      ) : hasReason ? (
        <div className="text-sm text-foreground text-left">
          {reason.content && (
            <p className="mb-2 text-left"><strong>core content:</strong> {reason.content}</p>
          )}
          {reason.filters && (
            <div className="space-y-1">
              {Object.entries(reason.filters).map(([key, value]) => {
                // Return null if value is null, undefined, empty string, or 'null'
                if (value === null || value === undefined || value === '' || value === 'null') {
                  return null;
                }

                let displayKey = key;
                let displayValue = value;

                if (key === "pages_min"){
                    displayKey = "pages (min)";
                }
                if (key === "pages_max"){
                    displayKey = "pages (max)";
                }

                // Special handling for authors field
                if (key == 'author' && Array.isArray(value) && value.length > 1) {
                    displayKey = "authors" // with the s
                    displayValue = value.join(', ');
                }

                // Special handling for names field
                if (key == 'names') {
                    displayKey = "key words"
                    if (Array.isArray(value) && value.length > 1) {
                      displayValue = value.join(', ');
                    }
                }

                // Special handling for children field
                if (key === 'children' && value === true) {
                    displayKey = 'children\'s book';
                    displayValue = 'true';
                }

                return (
                  <p key={key} className="text-left">
                    <strong>{displayKey}:</strong> {displayValue}
                  </p>
                );
              })}
            </div>
          )}
        </div>
      ) : (
        <div className="text-sm text-muted-foreground text-left">
          <p>Submit a query to see smart filters in action!</p>
        </div>
      )}
      
      <div className="text-xs text-muted-foreground text-right mt-6">
        * Version 2.0.0
      </div>
      <div className="text-xs text-muted-foreground text-right mt-1">
        * AI-generated filters may not be 100% accurate
      </div>
    </div>
  );
};

export default Reasoning;
