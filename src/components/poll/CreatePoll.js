import React, { useContext, useState } from 'react';
import { Context } from '../../context/GlobalContext';
import Answer from './Answer'
import './CreatePoll.css'

export default function CreatePoll() {
    const { state, createPoll, resetPoll, updateQuestion } = useContext(Context);
    const [question, setQuestion] = useState('');
    const disabled = state.answers.length < 2 ? 'disabled' : ''

    return (
        <div className="poll">
            <div className="ui fluid icon input">
                <input type="text" value={question} placeholder="Type a question..." maxLength="80" onChange={
                    (event) => {
                        setQuestion(event.target.value)
                        updateQuestion(event.target.value)
                    }
                    } />
            </div>
            <Answer />
            <div className="footer">
                {!state.isCreated ? (
                    <div className={`small ui right floated ${disabled} button`}
                    onClick={
                        () => {
                            createPoll(question, state.answers);
                        }
                    }
                >
                    Create
                </div>
                ) : null}
                
                {state.isCreated ? (
                    <div className="small ui right floated button"
                    onClick={
                        () => {
                            resetPoll();
                            setQuestion('')
                        }
                    }
                >Reset</div>
                ) : null}
                <p>{state.answers.length}/10 possible answers</p>
            </div>
        </div>
    )
}
