import React from 'react';

export default function resultField(props) {
  const { dictionary, search } = props;

  const result = dictionary.filter(item => item.vocabulary === search);

  return (
    <div>
      Search Result:
      <h2>
        {result.length !== 0 ? `${result[0].vocabulary} : ${result[0].type}  |  ${result[0].definition}` : ''}
      </h2>
    </div>
  );
}