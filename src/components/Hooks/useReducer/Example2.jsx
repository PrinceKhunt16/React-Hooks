import React, { useReducer } from 'react'

const INITIAL_STATE = {
  loading: false,
  post: {},
  error: false
}

const types = {
  FETCH_START: 'FETCH_START',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR'
}

const reducer = (state, action) => {
  switch (action.type) {
    case types.FETCH_START:
      return {
        ...state,
        loading: true
      }
    case types.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        post: action.payload
      }
    case types.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        post: {}
      }
    default:
      return state
  }
}

const Example2 = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  const fetchData = () => {
    dispatch({type: types.FETCH_START})

    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        dispatch({type: types.FETCH_SUCCESS, payload: data})
      })
      .catch((err) => {
        dispatch({type: types.FETCH_ERROR})
      })
  }

  return (
    <div>
      <button onClick={fetchData}>
        {state.loading ? 'Loading' : 'Fetch the post'}
      </button>
      <p>{state.post?.title}</p>
      <span>{state.error && 'Something went wrong!'}</span>
    </div>
  )
}

export default Example2