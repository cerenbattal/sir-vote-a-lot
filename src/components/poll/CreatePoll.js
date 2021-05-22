import React, { useContext, useState } from 'react';
import { Context } from '../../context/GlobalContext';
import Answer from './Answer'
import './CreatePoll.css'

export default function CreatePoll() {
    const { state, createPoll, resetPoll } = useContext(Context);
    const [question, setQuestion] = useState('');
    const disabled = state.answers.length < 2 ? 'disabled' : ''

    return (
        <div className="poll">
            <div className="ui fluid icon input">
                <input type="text" placeholder="Type a question..." maxlength="80" onChange={event => setQuestion(event.target.value)} />
            </div>
            <Answer />
            <div className="footer">
                <div className={`small ui right floated ${disabled} button`}
                    onClick={
                        () => {
                            createPoll(question, state.answers);
                        }
                    }
                >
                    {state.isCreated ? 'Update' : 'Create'}
                </div>
                <div className="small ui right floated button"
                    onClick={
                        () => {
                            resetPoll();
                        }
                    }
                >Reset</div>
                <p>{state.answers.length}/10 possible answers</p>
            </div>
        </div>
    )
}
