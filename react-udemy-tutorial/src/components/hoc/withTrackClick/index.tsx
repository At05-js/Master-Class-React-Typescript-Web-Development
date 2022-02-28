import React from "react";
import { withTrackClickProps, withTrackClickState, WrapperComponentState } from "./interface";

export const withTrackClick = (WrapperComponent: React.FC<WrapperComponentState>) => {
    return class extends React.PureComponent<withTrackClickProps, withTrackClickState> {
        constructor(props:withTrackClickProps) {
            super(props);
            this.state = {
                click:0,
            }
        }
        handleClick = () => {
            this.setState({
                click:this.state.click+1
            })
        }
        render() {
            return (
                <div onClick={this.handleClick}>
                    <WrapperComponent click={this.state.click}/>
                </div>
            )
        }
    }
}