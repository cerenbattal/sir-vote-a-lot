import React, { useContext, useState } from 'react'
import { Context } from '../../context/GlobalContext';
import './Answer.css'

export default function Answer() {
    const { state, addAnswer, deleteAnswer, updateAnswer } = useContext(Context);
    const [answer, setAnswer] = useState('')

    return (
        <div className="answer-form">
            {state.answers ? (
                state.answers.map((ans) => {
                    return (
                        <div key={ans.id} className="ui fluid icon input">
                            <input type="text" defaultValue={ans.answer} onChange={
                                (event) => {
                                    updateAnswer(ans.id, event.target.value)
                                }} />
                            <i className="circular close link icon" onClick={
                                () => {
                                    deleteAnswer(ans.id)
                                }
                            }
                            ></i>
                        </div>
                    )
                })
            ) : null}
            {
                state.answers.length < 10 ? (
                    <div className="ui fluid icon input">
                        <input type="text" placeholder="Type an answer" maxLength="80" value={answer} onChange={event => setAnswer(event.target.value)} />
                        <i className="circular plus link icon" onClick={
                            () => {
                                addAnswer(answer, state.answers.length);
                                setAnswer('');
                            }
                        }
                        ></i>
                    </div>
                ) : null
            }
        </div>
    )
}
