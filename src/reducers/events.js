export var feed = (state = {}, action) => {
  switch (action.type) {
  case 'UPDATE_FEED':
    return {...state,
      data: [...action.data].sort((a, b) =>
      new Date(a.begin).getTime() - new Date(b.begin).getTime())
    };
  case 'ADD_ITEM':
    return {...state,
    };

  case 'REMOVE_ITEM':
    return {...state,
    };
  default:
    return state;
  }
};

export var events = (state = {id: null, active: null, isPersonal: null}, action) => {
  switch (action.type) {
  case 'CURRENT_ITEM':
    return {...state,
      id: action.item,
      active: action.active,
      isPersonal: action.personal
    };
  default:
    return state;

  }
};

export var dateReducer = (state = {date: new Date(), start: new Date(), end: new Date()}, action) => {
  switch (action.type) {
  case 'DATE_CHANGE':
    return {...state,
      date: action.date
    };
  case 'START':
    let startTime = action.time.split(':');
    let startSet = new Date(state.date);
    startSet.setHours(startTime[0]);
    startSet.setMinutes(startTime[1]);
    return {...state,
      start: startSet
    };
  case 'END':
    let endTime = action.time.split(':');
    let endSet = new Date(state.date);
    endSet.setHours(endTime[0]);
    endSet.setMinutes(endTime[1]);
    return {...state,
      end: endSet
    };
  case 'RESET_DATE':
    return { date: new Date(), start: new Date(), end: new Date };
  default:
    return state;
  }

};

var defaultForm = {
  id: null,
  name: '',
  location: '',
  description: '',
  lat: null,
  long: null,
  place_id: null
};

export var eventForms = (state = defaultForm, action) => {
  switch (action.type) {
  case 'EVENT_NAME':
    return {...state,
      name: action.text,
    };
  case 'ADD_LOCATION':
    return {...state,
      location: action.location,
      lat: action.lat,
      long: action.long,
      place_id: action.place_id
    };
  case 'EVENT_DESC' :
    return {...state,
      description: action.text,
    };
  case 'RESET_EVENT_FORM':
    return defaultForm;
  default:
    return state;
  }
};

export var searchLocation = (state = { input: '', predictions: [] }, action) => {
  switch (action.type) {
  case 'UPDATE_LOC_INPUT':
    return { ...state,
      input: action.input
    };
  case 'UPDATE_LOC_PREDICTIONS':
    return { ...state,
      predictions: action.predictions
    };
  case 'CLEAR_LOC':
    return { input: '', predictions: [] };
  default:
    return state;
  }
};
