const redux = require('redux');
//action
const initialState = {
    count : 0
}

const rootReducer = (state=initialState, action) => {

    if(action.type==="COUNTER_INC"){
        return {
            ...state,
            count:state.count+1
        }
    }

    if(action.type==="COUNTER_ADD"){
        return {
            ...state,
            count:state.count+10
        };
    }

    return state;
};


const store = redux.createStore(rootReducer);

//subscription
store.subscribe(()=>{
    console.log('Subs value : ', store.getState());
});

store.dispatch({type:'COUNTER_INC'});
store.dispatch({type:'COUNTER_ADD', value:10});



