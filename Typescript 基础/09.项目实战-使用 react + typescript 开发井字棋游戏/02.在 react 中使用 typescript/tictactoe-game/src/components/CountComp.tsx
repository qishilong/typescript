// import React from 'react';
// import { FC } from "react";
import { Component } from "react";

interface CountProps {
    num: number;
    onChange?: (n: number) => void;
}



// 类组件
// /**
//  * 

interface CountState {
    msg: string;
    description: string;
}

class CountComp extends Component<CountProps, CountState> {
    state: CountState = {
        msg: "组件",
        description: "这是一个测试组件"
    };

    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <p>{this.state.description}</p>
                <button
                    onClick={() => {
                        if (this.props.onChange) {
                            this.props.onChange(this.props.num - 1);
                        }
                    }}
                >-</button>
                <span>{this.props.num}</span>
                <button
                    onClick={() => {
                        if (this.props.onChange) {
                            this.props.onChange(this.props.num + 1);
                        }
                    }}
                >+</button>
            </div>
        );
    }
}
//  */

// 函数组件
/**
const CountComp: FC<CountProps> = (props) => {
    return (
        <div>
            <button onClick={() => {
                if (props.onChange) {
                    props.onChange(props.num - 1);
                }
            }}>-</button>
            <span>{props.num}</span>
            <button onClick={() => {
                if (props.onChange) {
                    props.onChange(props.num + 1);
                }
            }}>+</button>
        </div>
    );
};
 */

export default CountComp;
