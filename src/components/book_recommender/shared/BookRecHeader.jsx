import { useState } from "react";
import { GithubIcon, BookText, ChevronDown, ChevronUp } from "lucide-react";

const BookRecHeader = ({ 
  version, 
  title, 
  description, 
  versionInfo, 
  attentionPoints, 
  sampleInputs,
  githubUrl,
  mediumUrl
}) => {
  const [showDescription, setShowDescription] = useState(false);
  const [showSamples, setShowSamples] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between gap-3 mb-2 z-10 w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-left">
          {title}
        </h1>
      </div>

      <div className="w-full max-w-2xl mb-6 z-10">
        <div className="flex items-center gap-4 mb-2">
          <button
            onClick={() => setShowDescription(!showDescription)}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>Learn more</span>
            {showDescription ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          
          <button
            onClick={() => setShowSamples(!showSamples)}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>Sample Inputs</span>
            {showSamples ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>
          )}

          {mediumUrl && (
            <a 
              href={mediumUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <BookText size={16} />
              <span>Version Blog</span>
            </a>
          )}
        </div>
        
        {showDescription && (
          <div className="text-left mt-3 p-4 bg-card rounded-lg border animate-in slide-in-from-top-2 duration-200">
            <p className="text-sm text-foreground mb-3">
              {description}
            </p>

            <div className="space-y-2 text-xs text-muted-foreground mb-3">
              <p><strong>Current Version ({version}):</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                {versionInfo.map((info, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: info }} />
                ))}
              </ul>
            </div>

            {attentionPoints && attentionPoints.length > 0 && (
              <div className="space-y-2 text-xs text-muted-foreground mb-3">
                <p><strong>Try to Pay Attention:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  {attentionPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {showSamples && (
          <div className="text-left mt-3 p-4 bg-card rounded-lg border animate-in slide-in-from-top-2 duration-200">
            <div className="space-y-2 text-xs text-muted-foreground mb-3">
              <p><strong>Sample Inputs:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                {sampleInputs.map((sample, index) => (
                  <li key={index}>{sample}</li>
                ))}
              </ul>

              <p className="text-sm text-foreground mb-3">
                (Experiment with different wording to see how the results change)
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BookRecHeader;
