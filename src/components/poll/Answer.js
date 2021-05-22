import React, { useContext, useState } from 'react'
import { Context } from '../../context/GlobalContext';
import './Answer.css'

export default function Answer() {
    const { state, addAnswer, deleteAnswer } = useContext(Context);
    const [answer, setAnswer] = useState('')

    return (
        <div className="answer-form">
            {state.answers ? (
                state.answers.map((ans) => {
                    return (
                        <div className="ui fluid icon input">
                            <input type="text" defaultValue={ans.answer} onChange={event => setAnswer(event.target.value)} />
                            <i className="circular close link icon" onClick={
                                () => {
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
                        <input type="text" placeholder="Type an answer" maxLength="80" defaultValue="" onChange={event => setAnswer(event.target.value)} />
                        <i className="circular plus link icon" onClick={
                            () => {
                                addAnswer(answer);
                            }
                        }
                        ></i>
                    </div>
                ) : null
            }
        </div>
    )
}
