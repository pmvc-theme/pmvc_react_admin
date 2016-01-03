'use strict';

import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import dispatcher from '../actions/dispatcher';

const PageState = Immutable.Record({
  path: undefined
});


class PageStore extends ReduceStore
{

  getInitialState()
  {
      return PageState();
  }

  reduce (state, action)
  {
        switch (action.type)
        {
            case 'page/go':
               return state.set('path', action.params.path);
        }
  }

}

// Export a singleton instance of the store, could do this some other way if
// you want to avoid singletons.
const instance = new PageStore(dispatcher);
export default instance;
