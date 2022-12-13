import React from "react";
import CodeBlock from "@theme/CodeBlock";

export const Terminal: React.FC<{ children: string }> = ({ children }) => {
  return (
    <div>
      <CodeBlock language="bash" className="code-block-terminal">
        {children}
      </CodeBlock>
    </div>
  );
};
