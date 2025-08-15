const Reasoning = ({ reason }) => {
  if (!reason || Object.keys(reason).length === 0) {
    return null;
  }

  return (
    <div className="bg-card p-4 rounded-lg shadow-md mb-6 z-10 max-w-2xl w-full">
      <h3 className="text-lg font-semibold mb-2 text-primary text-left">Smart Filters:</h3>
      <div className="text-sm text-foreground text-left">
        {reason.content && (
          <p className="mb-2 text-left"><strong>Core Content:</strong> {reason.content}</p>
        )}
        {reason.filters && (
          <div className="space-y-1">
            {Object.entries(reason.filters).map(([key, value]) => {
              if (value !== null && value !== undefined && value !== '' && value !== 'null') {
                const displayKey = key === 'names' ? 'Key Words' : key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ');
                const displayValue = Array.isArray(value) ? value.join(', ') : value;
                return (
                  <p key={key} className="text-left">
                    <strong>{displayKey}:</strong> {displayValue}
                  </p>
                );
              }
              return null;
            })}
          </div>
        )}
      </div>
      <div className="text-xs text-muted-foreground text-right mt-6">
        * Version 1.0.0
      </div>
      <div className="text-xs text-muted-foreground text-right mt-1">
        * AI-generated filters may not be 100% accurate
      </div>
    </div>
  );
};

export default Reasoning;
