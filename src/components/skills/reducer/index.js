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


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_SKILL':
      console.log('Adding skill: ' + action.text);
      console.log('State: ' + state);
      //let { teamMembers } = state;

      let newTeamMembers = [...state.teamMembers  ]
      
      // state.teamMembers.forEach(person => {
      //   newTeamMembers.push({
      //     ...person
      //   })
      // });

      newTeamMembers.forEach(newPerson => {
        newPerson.skills.push({
          id: uuid(),
          name: action.text,
          score: 0
        })
      });

      const newState = {
        teamMembers : newTeamMembers
      }
      return newState;
    case 'ADD_TEAMMEMBER': 
      const member = state.teamMembers[0]
      const newMember = {...member}
      const newSkills = [...state.teamMembers[0].skills]
      newMember.id = uuid()
      newMember.name = action.text;
      newSkills.forEach(skill => skill.score = 0)
      newMember.skills = newSkills;
      console.log("mem name",action.text)
      return {...state, teamMembers: [...state.teamMembers, newMember]}

    case 'REMOVE_SKILL':
      return state;

    default:
      return state;
  }
};