import createDataContext from './createDataContext';

//return {...state, answers: answers.filter(ans => indexOf(ans) === action.payload.id)};

const globalReducer = (state, action) => {
    switch(action.type) {
        case 'create_poll':
            return {...state, question: action.payload.question, answers: action.payload.answers };
        case 'delete_answer':
            return {...state, answers: action.payload.answers};
        case 'reset_poll':
            return { question: '', answers: [] };
        default:
            return state;
    }
};

const createPoll = dispatch => (question, answers) => {
    dispatch({ type:'create_poll', payload: {question: question, answers: answers} });
};

const deleteAnswer = dispatch => (answers) => {
    dispatch({ type:'delete_answer', payload: {answers: answers}});
}

const resetPoll = dispatch => () => {
    dispatch({ type: 'reset_poll' });
}

export const { Provider, Context } = createDataContext(
    globalReducer,
    {createPoll, deleteAnswer, resetPoll},
    { question: '', answers: [] }
);