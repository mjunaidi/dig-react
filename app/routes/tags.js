'use strict';

import React            from 'react';
import { FeaturedPage } from '../components';
import { mergeParams }  from '../unicorns';
import qc               from '../models/query-configs';
import Playlist         from '../stores/playlist';

var tags = React.createClass({

  render() {
    var title = this.props.params.tags.replace(/[^a-z_]+/,' ');
    return (
      <FeaturedPage {...this.props} icon="tags" subTitle="Tags" title={title} />
    );      
  },
});

tags.title = 'Tags';

tags.path = '/tags/:tags';

tags.store = function(params,queryParams) {
  var qparams = mergeParams( {}, qc.default, { tags: params.tags }, queryParams );
  return Playlist.storeFromQuery(qparams);
};

module.exports = tags;

