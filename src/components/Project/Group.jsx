import React from 'react';
import { Empty } from 'antd';

export default function Group({ group }) {
  return (
    <>
      {group ? (
        group.students.map((student) => (
          <div
            key={student.id}
            style={{
              userSelect: 'none',
              padding: '0.5rem',
              margin: '0.5rem',
              background: '#5cc2f2',
              color: 'white',
              display: 'inline-block',
              width: '120px',
              textAlign: 'center',
              borderRadius: '5px',
              height: '40px',
              whiteSpace: 'nowrap',
            }}
          >
            {student.name}
          </div>
        ))
      ) : (
        <Empty />
      )}
    </>
  );
}
