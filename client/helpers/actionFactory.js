
export const createAction = value => [
    `${value}_REQUEST`,
    `${value}_RECEIVE`,
    (...args) => ({ type: `${value}_REQUEST`, args }),
    payload => ({ type: `${value}_RECEIVE`,  payload })
]