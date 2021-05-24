import createDataContext from './createDataContext';


const globalReducer = (state, action) => {
    switch(action.type) {
        case 'create_poll':
            return {...state, question: action.payload.question, answers: action.payload.answers, isCreated: true};

        case 'add_answer':
            state.answers.push(action.payload);
            let newAnswers = state.answers;
            return {...state, answers: newAnswers};

        case 'update_answer':
            let editedAnswers = state.answers
            editedAnswers[action.payload.id].answer = action.payload.updatedAnswer;
            return { ...state, answers: editedAnswers }

        case 'update_question': 
            return { ...state, question: action.payload.updatedQuestion }

        case 'delete_answer':
            return {...state, answers: state.answers.filter(ans => ans.id !== action.payload.id)};

        case 'add_vote':
            let newAnswersArray = state.answers.map(ans => {
                return action.payload.id === ans.id ? Object.assign({}, ans, { score: ans.score + 1} ) : ans;
              });
              return {...state, answers: newAnswersArray, voteCount: state.voteCount + 1}

        case 'reset_poll':
            return { question: '', answers: [], isCreated: false };

        default:
            return state;

    }
};

const createPoll = dispatch => (question, answers) => {
    dispatch({ type: 'create_poll', payload: {question: question, answers: answers} });
};

const addAnswer = dispatch => (answer, id) => {
    dispatch({ type: 'add_answer', payload: {id: id, answer: answer, score: 0}});
}

const updateAnswer = dispatch => (id, updatedAnswer) => {
    dispatch({ type: 'update_answer', payload: {id: id, updatedAnswer: updatedAnswer} });
}

const updateQuestion = dispatch => (updatedQuestion) => {
    dispatch({ type: 'update_question', payload: {updatedQuestion: updatedQuestion} });
}

const deleteAnswer = dispatch => (id) => {
    dispatch({ type: 'delete_answer', payload: {id: id}});
}

const addVote = dispatch => (id) => {
    dispatch({ type: 'add_vote', payload: {id: id}})
}

const resetPoll = dispatch => () => {
    dispatch({ type: 'reset_poll'});
}

export const { Provider, Context } = createDataContext(
    globalReducer,
    {createPoll, addAnswer, updateAnswer, updateQuestion, deleteAnswer, addVote, resetPoll},
    { question: '', answers: [], isCreated: false, voteCount: 0 }
);