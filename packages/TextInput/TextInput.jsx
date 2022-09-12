import React from "react"

export const TextInput = ({ children, ...props }) => {
	return (
		<label>
			{props.label}
			<input type='text' {...props} />
		</label>
	)
}

export default TextInput
