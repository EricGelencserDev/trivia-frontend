import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    Button,
    Col,
    ControlLabel,
    FormGroup,
    FormControl,
    Row
} from "react-bootstrap";
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.onSignIn = props.onSignIn;
        this.state = {
            form: {
                email: "",
                password: "",
                errors: {}
            }
        };
    }
    handleChange(e) {
        const formState = Object.assign({}, this.state.form);
        formState[e.target.name] = e.target.value;
        this.setState({ form: formState });
    }
    login () {
        this.onSignIn(this.state.form)
    }
    render() {
        const { form, errors } = this.state
        const { firstName, lastName, email, password } = form
        return (
            <form>
                <Row>
                    <Col xs={6}>
                        <FormGroup>
                            <ControlLabel id="email"></ControlLabel>
                            <FormControl
                                type="text"
                                name="email"
                                placeholder="Username"
                                value={email}
                                onChange={this.handleChange.bind(this)}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                            <Button id="logInbtn" onClick = {this.login.bind(this)} >
                                Play Trivia Now!
                            </Button>
                    </Col>
                </Row>
            </form>
        );
    }
}
export default SignIn;
