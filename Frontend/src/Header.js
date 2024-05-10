import React from 'react';

export class Header extends React.Component {
    render() {
        return (
            <article>
                <header>
                    <h1 style={{textAlign: "center"}}> 
                        Events List:
                    </h1>
                    <p style={{textAlign: "center"}}>New events coming soon!</p> 
                </header>
            </article>
        )
    }
}