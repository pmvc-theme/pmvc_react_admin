'use strict';

import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import dispatcher, {dispatch} from '../actions/dispatcher';

const AjaxState = Immutable.Map();

class AjaxStore extends ReduceStore
{

  getInitialState()
  {
      return AjaxState;
  }

  reduce (state, action)
  {
        switch (action.type)
        {
            case 'ajax':
            let params = action.params;
            let json = 'json.php';
            var index = 'index.php';
            var ajaxUrl = params.url;
            if (-1!==ajaxUrl.indexOf(index)) {
                ajaxUrl = ajaxUrl.replace(index,json);
            } else {
                ajaxUrl += json;
            }
            ajaxUrl += '?r='+ ((new Date()).getTime());
            require(['superagent'],function(req){ 
               req.get(ajaxUrl)
                  .withCredentials()
                  .end(function(res){
                        let json = JSON.parse(res.text);
                        dispatch({
                            type: 'config/set',
                            params: json
                        });
                   });
            });
            default:
                return state;
        }
  }
}

// Export a singleton instance of the store, could do this some other way if
// you want to avoid singletons.
const instance = new AjaxStore(dispatcher);
export default instance;
