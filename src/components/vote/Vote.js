import React, { useContext } from 'react'
import { Context } from '../../context/GlobalContext';
import './Vote.css'

export default function Vote() {
    const { state } = useContext(Context);
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
                                            <input type="checkbox"/>
                                            <label>{ans.answer}</label>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="vote-footer">
                        <div className="small ui right floated button">Vote</div>
                    </div>
                </>
            ) : 'has not created yet!'}
        </div>
    )
}
