import React, { useContext, useState } from 'react'
import { Context } from '../../context/GlobalContext';
import './Vote.css'

export default function Vote() {
    const { state, addVote} = useContext(Context);
    const [checkedAnswer, setCheckedAnswer] = useState('');
    return (
        <div data-testid="vote-test" className="vote">
            {state.isCreated ? (
                <>
                    <div className="ui form">
                        <div className="grouped fields">
                            <div className="ui piled segment">
                                <p>{state.question}</p>
                            </div>
                            {state.answers.map((ans) => {
                                return (
                                    <div key={ans.id} className="field">
                                        <div className="ui radio checkbox">
                                            <input type="radio" name="radio" key={ans.id} onClick={
                                                () => {
                                                    setCheckedAnswer(ans.id)
                                                }
                                            }/>
                                            <label>{ans.answer}</label>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="vote-footer">
                        <div className="small ui right floated button"
                            onClick={
                                () => {
                                    addVote(checkedAnswer);
                                }
                            }
                        >Vote</div>
                    </div>
                </>
            ) : (
                <div className="no-vote-text">
                    <i id="vote-icon" className="tasks icon"></i>
                    <p>Your poll will appear here!</p>
                </div>
            )}
        </div>
    )
}
