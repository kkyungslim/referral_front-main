import React from 'react';

interface ObjectViewerProps {
  data: unknown;
  depth?: number;
}

export const ObjectViewer: React.FC<ObjectViewerProps> = ({
  data,
  depth = 0,
}) => {
  const indent = depth * 20; // 20px per level

  if (data === null) {
    return <div style={{ marginLeft: indent }}>null</div>;
  }

  if (typeof data !== 'object') {
    return <div style={{ marginLeft: indent }}>{String(data)}</div>;
  }

  if (Array.isArray(data)) {
    return (
      <div style={{ marginLeft: indent }}>
        [
        {data.map((item, index) => (
          <ObjectViewer key={index} data={item} depth={depth + 1} />
        ))}
        ]
      </div>
    );
  }

  // It's a regular object
  return (
    <div style={{ marginLeft: indent }}>
      {'{'}
      {Object.entries(data).map(([key, value]) => (
        <div key={key}>
          <span style={{ marginLeft: indent + 20 }}>
            <strong>{key}:</strong>
          </span>
          <ObjectViewer data={value} depth={depth + 1} />
        </div>
      ))}
      {'}'}
    </div>
  );
};
