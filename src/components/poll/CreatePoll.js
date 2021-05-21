import React, { useContext } from 'react'
import { Context } from '../../context/GlobalContext';
import Answer from './Answer'
import './CreatePoll.css'

export default function CreatePoll() {
    const { state, createPoll } = useContext(Context);
    return (
        <div className="poll">
            <div className="ui fluid icon input">
                <input type="text" placeholder="Type a question..." />
            </div>
            <Answer />
            <div className="footer">
                <div className="small ui right floated button"
                    onClick={
                        () => {
                            createPoll('sorusousoru',[{ answer1: 0}, {answer2: 0 }])
                        }
                    }
                >
                    Create
                </div>
                <div className="small ui right floated button"
                    onClick={
                        () => {
                            console.log(state)
                        }
                    }
                >Reset</div>
                <p>0/10 possible answers</p>
            </div>
        </div>
    )
}
