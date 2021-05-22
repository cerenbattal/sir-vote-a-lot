import createDataContext from './createDataContext';

//return {...state, answers: answers.filter(ans => indexOf(ans) === action.payload.id)};

const globalReducer = (state, action) => {
    switch(action.type) {
        case 'create_poll':
            return {...state, question: action.payload.question, answers: action.payload.answers, isCreated: true};
        case 'add_answer':
            state.answers.push(action.payload);
            let newAnswers = state.answers;
            return {...state, answers: newAnswers};
        case 'delete_answer': //TODO
            return {...state, answers: action.payload.answers};
        case 'add_vote': //TODO
            return {...state, }
        case 'reset_poll':
            return { question: '', answers: [], isCreated: false };
        default:
            return state;
    }
};

const createPoll = dispatch => (question, answers) => {
    dispatch({ type: 'create_poll', payload: {question: question, answers: answers} });
};

const addAnswer = dispatch => (answer) => {
    dispatch({ type: 'add_answer', payload: {answer: answer, score: 0}});
}

// TODO
const deleteAnswer = dispatch => (answers) => {
    dispatch({ type: 'delete_answer', payload: {answers: answers}});
}

// TODO
const addVote = dispatch => (answer) => {
    dispatch({ type: 'add_vote'})
}

const resetPoll = dispatch => () => {
    dispatch({ type: 'reset_poll'});
}

export const { Provider, Context } = createDataContext(
    globalReducer,
    {createPoll, addAnswer, deleteAnswer, resetPoll},
    { question: '', answers: [], isCreated: false }
);