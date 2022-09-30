import React from "react"
import Button from "@obelix/button"
import { TextInput } from "@obelix/text-input"

export const Form = ({ schema }) => {
	return (
		<div>
			<div>
				<form>
					{Object.entries(schema).map(([key, { label, type }]) => {
						const Input = {
							text: TextInput,
							/* "select": SelectInput, */
						}[type]

						return <Input label={label} key={key} name={key} value='' />
					})}
					{/* {carsArray.map((item) => {
						const labelTransformed = item[0].toUpperCase() + item.slice(1)
						return (
						)
					})} */}
				</form>
			</div>
			<Button
				onClick={(e) => {
					e.preventDefault()
					console.log(cars)
				}}
			>
				Submit form
			</Button>
		</div>
	)
}

export default Form
