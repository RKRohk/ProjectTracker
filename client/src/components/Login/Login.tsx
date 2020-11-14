import React, { useState } from "react";
import { Formik } from "formik";
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Text,
} from "@chakra-ui/core";
import authService from "../../services/authService";
import { AxiosError } from "axios";

const Login: React.FC = () => {
    const [createAccount, setCreateAccount] = useState(false);
    return (
        <Flex mx="auto" my={40} justify="center">
            <Formik
                initialValues={{ email: "", password: "", username: "" }}
                onSubmit={async (values, props) => {
                    props.setSubmitting(true);
                    try {
                        if (createAccount) {
                            const response = await authService.register(
                                values.username,
                                values.email,
                                values.password
                            );
                        } else {
                            const response = await authService.login(
                                values.email,
                                values.password
                            );
                            const { username, email } = response.data;

                            localStorage.setItem(
                                "user",
                                JSON.stringify({ username, email })
                            );
                            localStorage.setItem("token", response.data.token);
                            console.log(response);
                        }
                    } catch (err) {
                        //Error Handler
                        const error: AxiosError = err;
                        console.log(error.response?.data);
                        props.setFieldError("error", error.response?.data);
                    }
                }}
            >
                {(props) => (
                    <form onSubmit={props.handleSubmit}>
                        <FormControl
                            mx="auto"
                            width={["90vw", "90vw", "30vw", "30vw"]}
                        >
                            <FormLabel htmlFor="email">Email Address</FormLabel>
                            <Input
                                value={props.values.email}
                                onChange={props.handleChange}
                                type="email"
                                id="email"
                            ></Input>
                        </FormControl>
                        <FormControl
                            mx="auto"
                            width={["90vw", "90vw", "30vw", "30vw"]}
                        >
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <Input
                                value={props.values.password}
                                onChange={props.handleChange}
                                type="password"
                                id="password"
                            ></Input>
                        </FormControl>
                        <FormControl
                            mx="auto"
                            width={["90vw", "90vw", "30vw", "30vw"]}
                            display={createAccount ? "block" : "none"}
                        >
                            <FormLabel htmlFor="username">
                                Please Enter Username
                            </FormLabel>
                            <Input
                                value={props.values.username}
                                onChange={props.handleChange}
                                type="text"
                                id="username"
                            ></Input>
                        </FormControl>
                        <Text
                            my={6}
                            as="button"
                            onClick={(e) => {
                                e.preventDefault();
                                setCreateAccount(!createAccount);
                            }}
                        >
                            Dont Have an account?
                        </Text>
                        <Flex justify="center" my={6}>
                            <Button
                                type="submit"
                                isLoading={props.isSubmitting}
                                loadingText="Submitting"
                                variantColor="purple"
                                variant="outline"
                            >
                                Submit
                            </Button>
                        </Flex>
                    </form>
                )}
            </Formik>
        </Flex>
    );
};

export default Login;
