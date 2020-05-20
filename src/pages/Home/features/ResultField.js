import React from 'react';
import { connect } from 'react-redux';

function ResultField({dictionary = [], search}) {
  // tip: use includes on string
  const result = dictionary.filter(item => item.vocabulary === search);

  // use map on result array to show the list of dictionary
  return (
    <div>
      Search Result:
      <h2>
        {result.length !== 0 ? `${result[0].vocabulary} : ${result[0].type}  |  ${result[0].definition}` : ''}
      </h2>
    </div>
  );
}

const mapStateToProps = state => {
  const { dictionary, search } = state;
  return {
    dictionary,
    search
  }
}

export default connect(mapStateToProps)(ResultField);