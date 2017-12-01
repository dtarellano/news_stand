import React from 'react';
import PropTypes from 'prop-types';
import uniq from 'node-uniq';

import NewsItem from './NewsItem';

const NewsList = props => (
  <div className="news-list">
    {props.newsArticles.length === 0 ? (
      <div id="no-articles">No articles found. Please try another search</div>
    ) : (
      props.newsArticles &&
      uniq(props.newsArticles, i => i.url).map(article => (
        <NewsItem user={props.user} article={article} key={article.url} liked={props.liked} />
      ))
    )}
  </div>
);

NewsList.propTypes = {
  newsArticles: PropTypes.arrayOf(PropTypes.object).isRequired,
  user: PropTypes.string.isRequired,
};

export default NewsList;
