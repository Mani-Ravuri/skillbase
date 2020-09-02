import uuid from 'node-uuid';



const INITIAL_STATE = {
  teamMembers: [
      {
          id: uuid(),
          name: 'Fred',
          skills: [
              { name: 'react', score: 0 },
              { name: 'redux', score: 0 },
              { name: 'javascript', score: 0 },
              { name: 'C#', score: 0 }
          ]
      }
  ]
}


export const organization = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_SKILLSL':
    case 'REMOVE_SKILL':
      return state;

    default:
      return state;
  }
};