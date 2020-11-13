import React from "react";
import { Formik } from "formik";
import { Button, Flex, FormControl, FormLabel, Input } from "@chakra-ui/core";
const Login: React.FC = () => {
    return (
        <Flex mx="auto" my={40} justify="center">
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values, props) => {
                    props.setSubmitting(true);
                    setTimeout(() => {
                        console.log(values);
                        props.setSubmitting(false);
                    }, 5000);
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
