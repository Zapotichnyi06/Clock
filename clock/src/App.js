import React from 'react';
import Clock from "./component/clock";
import 'animate.css';
import Button from "./component/Button";

class App extends React.Component {
    render() {
        return(
            <>
                <div className="fonT">
                    <div className="fon animate__zoomInDown">
                        <h1 className="clock"><Clock /></h1>
                    </div>
                </div>
                <Button />
            </>
        )
    }
}

export default App;