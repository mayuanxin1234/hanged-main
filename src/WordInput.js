import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Hangman from "./Hangman";
import {useFormik, useField, useFormikContext} from "formik";

import * as Yup from "yup";

const schema = Yup.object({
	word: Yup.string()
		.required("Required")
		.min(1)
		.max(1)
});


const WordInput = () => {	
	

	const formik = useFormik({
		initialValues: {word: ""},
		onSubmit: (values) => {
			console.log(values.word);
			var word = values.word;			
			<Hangman data = {word} />			
		},
		validationSchema: schema
	});

	return (
		
		<Form noValidate onSubmit={formik.handleSubmit} id="mainForm">
			<Form.Group className="mb-3" controlId="TaskInput">
				<Form.Label>Letter Input</Form.Label>
				<Form.Control
					type="textarea"
					placeholder="Enter letter to guess"
					rows={3}
					name="word"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					isInvalid={!!formik.errors.word}
				/>
				<Form.Control.Feedback type="invalid">
					{formik.errors.word}
				</Form.Control.Feedback>
			</Form.Group>

			<Button type="submit">Submit</Button>
			
		</Form>
		
	);
};

export default WordInput;
