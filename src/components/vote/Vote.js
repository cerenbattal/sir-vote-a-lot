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
                                    <div className="field">
                                        <div className="ui checkbox">
                                            <input name={`checkbox-${ans.answer}`} type="checkbox" key={ans.id} onChecked={
                                                () => {
                                                    setCheckedAnswer(ans.answer)
                                                }
                                            }/>
                                            <label for={`checkbox-${ans.answer}`}>{ans.answer}</label>
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
                                    console.log(checkedAnswer)
                                    addVote(checkedAnswer);
                                    setCheckedAnswer('');
                                }
                            }
                        >Vote</div>
                    </div>
                </>
            ) : 'has not created yet!'}
        </div>
    )
}
