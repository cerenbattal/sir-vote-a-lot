import React from 'react'
import './Vote.css'

export default function Vote() {
    return (
        <div className="vote">
            <div className="ui form">
                <div className="grouped fields">
                    <div className="ui piled segment">
                        <p>eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
                    </div>
                    <div className="field">
                        <div className="ui checkbox">
                            <input type="checkbox" name="example2" checked="checked" />
                            <label>Once a week</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui checkbox">
                            <input type="checkbox" name="example2" />
                            <label>Once a day</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="vote-footer">
                <div className="small ui right floated button">Vote</div>
            </div>
        </div>
    )
}
