import React from "react";
import { Formik } from "formik";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/core";
const Login: React.FC = () => {
    return (
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
                    <FormControl>
                        <FormLabel htmlFor="email">Email Address</FormLabel>
                        <Input
                            value={props.values.email}
                            onChange={props.handleChange}
                            type="email"
                            id="email"
                        ></Input>
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Input
                            value={props.values.password}
                            onChange={props.handleChange}
                            type="password"
                            id="password"
                        ></Input>
                    </FormControl>
                    <Button
                        type="submit"
                        isLoading={props.isSubmitting}
                        loadingText="Submitting"
                        variantColor="teal"
                        variant="outline"
                    >
                        Submit
                    </Button>
                </form>
            )}
        </Formik>
    );
};

export default Login;
