'use strict';

import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import dispatcher from '../actions/dispatcher';

const PageState = Immutable.Map();

class PageStore extends ReduceStore
{

  getInitialState()
  {
      return PageState;
  }

  reduce (state, action)
  {
        switch (action.type)
        {
            case 'page/go':
               return state.set('path', action.params.path);
            case 'page/changeUrl':
               return state.set('path', action.params.path);
            case 'ajax':
               return state.set('url', action.params.url);
            case 'config/set':
               return state.merge(action.params);
            default:
                return state;
        }
  }

}

// Export a singleton instance of the store, could do this some other way if
// you want to avoid singletons.
const instance = new PageStore(dispatcher);
export default instance;
